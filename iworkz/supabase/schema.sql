-- aiKODA Cultural Intelligence Platform Database Schema
-- Comprehensive schema for talent management with cultural intelligence

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =============================================
-- AUTHENTICATION & USER MANAGEMENT
-- =============================================

-- User profiles (extends Supabase auth.users)
CREATE TABLE user_profiles (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    user_type TEXT CHECK (user_type IN ('candidate', 'company', 'admin')) NOT NULL,
    language_preference TEXT DEFAULT 'en' CHECK (language_preference IN ('en', 'ja')),
    timezone TEXT DEFAULT 'Asia/Tokyo',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- COMPANIES
-- =============================================

CREATE TABLE companies (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES user_profiles(id),
    company_name TEXT NOT NULL,
    company_name_ja TEXT,
    industry TEXT NOT NULL,
    company_size TEXT CHECK (company_size IN ('1-10', '11-50', '51-200', '201-1000', '1000+')),
    headquarters_location TEXT,
    website_url TEXT,
    description TEXT,
    description_ja TEXT,
    logo_url TEXT,
    
    -- Cultural Requirements
    cultural_values JSONB DEFAULT '{}',
    work_style_preferences JSONB DEFAULT '{}',
    communication_style TEXT CHECK (communication_style IN ('direct', 'indirect', 'mixed')),
    hierarchy_level TEXT CHECK (hierarchy_level IN ('flat', 'moderate', 'hierarchical')),
    
    -- Japanese Business Culture
    wa_importance INTEGER CHECK (wa_importance BETWEEN 1 AND 10) DEFAULT 5,
    kaizen_focus INTEGER CHECK (kaizen_focus BETWEEN 1 AND 10) DEFAULT 5,
    omotenashi_level INTEGER CHECK (omotenashi_level BETWEEN 1 AND 10) DEFAULT 5,
    
    -- Compliance & Legal
    visa_sponsorship_available BOOLEAN DEFAULT FALSE,
    remote_work_policy TEXT CHECK (remote_work_policy IN ('none', 'hybrid', 'full')),
    
    -- Status
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- CANDIDATES
-- =============================================

CREATE TABLE candidates (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES user_profiles(id),
    
    -- Personal Information
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    first_name_ja TEXT,
    last_name_ja TEXT,
    date_of_birth DATE,
    gender TEXT CHECK (gender IN ('male', 'female', 'other', 'prefer_not_to_say')),
    nationality TEXT,
    
    -- Contact Information
    phone TEXT,
    address TEXT,
    city TEXT,
    prefecture TEXT,
    postal_code TEXT,
    country TEXT DEFAULT 'Japan',
    
    -- Professional Information
    current_title TEXT,
    years_of_experience INTEGER,
    education_level TEXT CHECK (education_level IN ('high_school', 'bachelor', 'master', 'phd', 'other')),
    university TEXT,
    major TEXT,
    graduation_year INTEGER,
    
    -- Skills & Competencies
    technical_skills JSONB DEFAULT '[]',
    soft_skills JSONB DEFAULT '[]',
    languages JSONB DEFAULT '[]', -- [{"language": "Japanese", "level": "native"}, {"language": "English", "level": "business"}]
    certifications JSONB DEFAULT '[]',
    
    -- Work Preferences
    desired_salary_min INTEGER,
    desired_salary_max INTEGER,
    preferred_locations JSONB DEFAULT '[]',
    work_style_preference TEXT CHECK (work_style_preference IN ('remote', 'office', 'hybrid')),
    availability_date DATE,
    
    -- Visa & Legal Status
    visa_status TEXT,
    work_authorization BOOLEAN DEFAULT FALSE,
    needs_visa_sponsorship BOOLEAN DEFAULT FALSE,
    
    -- Profile
    bio TEXT,
    bio_ja TEXT,
    resume_url TEXT,
    portfolio_url TEXT,
    linkedin_url TEXT,
    
    -- Status
    is_active BOOLEAN DEFAULT TRUE,
    is_verified BOOLEAN DEFAULT FALSE,
    profile_completion_percentage INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- CULTURAL INTELLIGENCE ASSESSMENTS
-- =============================================

CREATE TABLE cultural_assessments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    candidate_id UUID REFERENCES candidates(id),
    assessment_type TEXT DEFAULT 'cq47' CHECK (assessment_type IN ('cq47', 'basic', 'comprehensive')),
    
    -- CQ47 Framework Dimensions (47 cultural dimensions)
    power_distance INTEGER CHECK (power_distance BETWEEN 1 AND 10),
    individualism_collectivism INTEGER CHECK (individualism_collectivism BETWEEN 1 AND 10),
    uncertainty_avoidance INTEGER CHECK (uncertainty_avoidance BETWEEN 1 AND 10),
    long_term_orientation INTEGER CHECK (long_term_orientation BETWEEN 1 AND 10),
    masculinity_femininity INTEGER CHECK (masculinity_femininity BETWEEN 1 AND 10),
    
    -- Japanese Cultural Dimensions
    wa_harmony INTEGER CHECK (wa_harmony BETWEEN 1 AND 10),
    kaizen_improvement INTEGER CHECK (kaizen_improvement BETWEEN 1 AND 10),
    omotenashi_hospitality INTEGER CHECK (omotenashi_hospitality BETWEEN 1 AND 10),
    nemawashi_consensus INTEGER CHECK (nemawashi_consensus BETWEEN 1 AND 10),
    ringi_decision_making INTEGER CHECK (ringi_decision_making BETWEEN 1 AND 10),
    
    -- Communication Styles
    direct_communication INTEGER CHECK (direct_communication BETWEEN 1 AND 10),
    context_sensitivity INTEGER CHECK (context_sensitivity BETWEEN 1 AND 10),
    non_verbal_awareness INTEGER CHECK (non_verbal_awareness BETWEEN 1 AND 10),
    silence_comfort INTEGER CHECK (silence_comfort BETWEEN 1 AND 10),
    
    -- Work Styles
    team_collaboration INTEGER CHECK (team_collaboration BETWEEN 1 AND 10),
    independent_work INTEGER CHECK (independent_work BETWEEN 1 AND 10),
    hierarchy_respect INTEGER CHECK (hierarchy_respect BETWEEN 1 AND 10),
    innovation_openness INTEGER CHECK (innovation_openness BETWEEN 1 AND 10),
    
    -- Adaptability
    cultural_adaptability INTEGER CHECK (cultural_adaptability BETWEEN 1 AND 10),
    change_flexibility INTEGER CHECK (change_flexibility BETWEEN 1 AND 10),
    stress_tolerance INTEGER CHECK (stress_tolerance BETWEEN 1 AND 10),
    learning_agility INTEGER CHECK (learning_agility BETWEEN 1 AND 10),
    
    -- Overall Scores
    overall_cq_score DECIMAL(4,2),
    japanese_cultural_fit_score DECIMAL(4,2),
    integration_timeline_prediction INTEGER, -- days
    
    -- Assessment Metadata
    assessment_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    assessor_notes TEXT,
    is_complete BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- PSYCHOLOGICAL ASSESSMENTS
-- =============================================

CREATE TABLE psychological_assessments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    candidate_id UUID REFERENCES candidates(id),
    assessment_type TEXT DEFAULT 'big_five' CHECK (assessment_type IN ('big_five', 'hexaco', 'disc', 'mbti')),
    
    -- Big Five Personality Traits
    openness INTEGER CHECK (openness BETWEEN 1 AND 100),
    conscientiousness INTEGER CHECK (conscientiousness BETWEEN 1 AND 100),
    extraversion INTEGER CHECK (extraversion BETWEEN 1 AND 100),
    agreeableness INTEGER CHECK (agreeableness BETWEEN 1 AND 100),
    neuroticism INTEGER CHECK (neuroticism BETWEEN 1 AND 100),
    
    -- HEXACO Additional Dimension
    honesty_humility INTEGER CHECK (honesty_humility BETWEEN 1 AND 100),
    
    -- Team Role Preferences (Belbin)
    team_role_primary TEXT,
    team_role_secondary TEXT,
    leadership_style TEXT,
    
    -- Work Preferences
    work_motivation_factors JSONB DEFAULT '[]',
    stress_indicators JSONB DEFAULT '[]',
    communication_preferences JSONB DEFAULT '{}',
    
    -- Assessment Results
    personality_summary TEXT,
    strengths JSONB DEFAULT '[]',
    development_areas JSONB DEFAULT '[]',
    career_recommendations JSONB DEFAULT '[]',
    
    -- Assessment Metadata
    assessment_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    assessor_id UUID REFERENCES user_profiles(id),
    is_complete BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- JOBS
-- =============================================

CREATE TABLE jobs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    company_id UUID REFERENCES companies(id),
    
    -- Job Information
    title TEXT NOT NULL,
    title_ja TEXT,
    department TEXT,
    employment_type TEXT CHECK (employment_type IN ('full_time', 'part_time', 'contract', 'internship')),
    seniority_level TEXT CHECK (seniority_level IN ('entry', 'mid', 'senior', 'executive')),
    
    -- Location & Remote
    location TEXT,
    prefecture TEXT,
    remote_work_option TEXT CHECK (remote_work_option IN ('none', 'hybrid', 'full')),
    
    -- Compensation
    salary_min INTEGER,
    salary_max INTEGER,
    currency TEXT DEFAULT 'JPY',
    bonus_structure TEXT,
    benefits JSONB DEFAULT '[]',
    
    -- Job Description
    description TEXT NOT NULL,
    description_ja TEXT,
    responsibilities JSONB DEFAULT '[]',
    requirements JSONB DEFAULT '[]',
    preferred_qualifications JSONB DEFAULT '[]',
    
    -- Skills & Experience
    required_skills JSONB DEFAULT '[]',
    preferred_skills JSONB DEFAULT '[]',
    years_experience_min INTEGER,
    years_experience_max INTEGER,
    education_requirements JSONB DEFAULT '[]',
    language_requirements JSONB DEFAULT '[]',
    
    -- Cultural Requirements
    cultural_fit_requirements JSONB DEFAULT '{}',
    wa_requirement INTEGER CHECK (wa_requirement BETWEEN 1 AND 10),
    kaizen_requirement INTEGER CHECK (kaizen_requirement BETWEEN 1 AND 10),
    omotenashi_requirement INTEGER CHECK (omotenashi_requirement BETWEEN 1 AND 10),
    communication_style_requirement TEXT,
    
    -- Visa & Legal
    visa_sponsorship_available BOOLEAN DEFAULT FALSE,
    security_clearance_required BOOLEAN DEFAULT FALSE,
    
    -- Job Status
    status TEXT DEFAULT 'active' CHECK (status IN ('draft', 'active', 'paused', 'closed', 'filled')),
    applications_count INTEGER DEFAULT 0,
    views_count INTEGER DEFAULT 0,
    
    -- Dates
    posted_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    application_deadline DATE,
    start_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- JOB APPLICATIONS
-- =============================================

CREATE TABLE job_applications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    job_id UUID REFERENCES jobs(id),
    candidate_id UUID REFERENCES candidates(id),
    
    -- Application Information
    cover_letter TEXT,
    cover_letter_ja TEXT,
    resume_url TEXT,
    portfolio_url TEXT,
    
    -- Status Tracking
    status TEXT DEFAULT 'applied' CHECK (status IN ('applied', 'screening', 'interview', 'assessment', 'offer', 'hired', 'rejected', 'withdrawn')),
    stage TEXT DEFAULT 'application',
    
    -- AI Matching Scores
    overall_match_score DECIMAL(4,2),
    skills_match_score DECIMAL(4,2),
    experience_match_score DECIMAL(4,2),
    cultural_fit_score DECIMAL(4,2),
    salary_match_score DECIMAL(4,2),
    location_match_score DECIMAL(4,2),
    
    -- AI Analysis
    match_explanation TEXT,
    strengths JSONB DEFAULT '[]',
    concerns JSONB DEFAULT '[]',
    recommendations JSONB DEFAULT '[]',
    
    -- Interview Process
    interview_stages JSONB DEFAULT '[]',
    current_interview_stage INTEGER DEFAULT 0,
    interview_feedback JSONB DEFAULT '[]',
    
    -- Dates
    applied_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_activity_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    decision_date TIMESTAMP WITH TIME ZONE,
    start_date DATE,
    
    -- Metadata
    source TEXT, -- how they found the job
    referral_id UUID REFERENCES candidates(id),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(job_id, candidate_id)
);

-- =============================================
-- AI MATCHING RESULTS
-- =============================================

CREATE TABLE ai_matching_results (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    job_id UUID REFERENCES jobs(id),
    candidate_id UUID REFERENCES candidates(id),
    
    -- Matching Scores (0-100)
    overall_score DECIMAL(5,2) NOT NULL,
    skills_score DECIMAL(5,2),
    experience_score DECIMAL(5,2),
    cultural_fit_score DECIMAL(5,2),
    personality_score DECIMAL(5,2),
    location_score DECIMAL(5,2),
    salary_expectations_score DECIMAL(5,2),
    availability_score DECIMAL(5,2),
    
    -- Detailed Analysis
    matching_factors JSONB DEFAULT '{}',
    strengths JSONB DEFAULT '[]',
    gaps JSONB DEFAULT '[]',
    recommendations JSONB DEFAULT '[]',
    
    -- Cultural Intelligence Analysis
    cq_compatibility JSONB DEFAULT '{}',
    integration_prediction JSONB DEFAULT '{}',
    cultural_challenges JSONB DEFAULT '[]',
    cultural_opportunities JSONB DEFAULT '[]',
    
    -- AI Model Information
    model_version TEXT,
    confidence_level DECIMAL(3,2),
    processing_time_ms INTEGER,
    
    -- Status
    is_reviewed BOOLEAN DEFAULT FALSE,
    reviewer_id UUID REFERENCES user_profiles(id),
    reviewer_notes TEXT,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(job_id, candidate_id)
);

-- =============================================
-- INTERVIEWS
-- =============================================

CREATE TABLE interviews (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    application_id UUID REFERENCES job_applications(id),
    
    -- Interview Details
    interview_type TEXT CHECK (interview_type IN ('phone', 'video', 'in_person', 'technical', 'cultural', 'final')),
    stage_number INTEGER,
    scheduled_date TIMESTAMP WITH TIME ZONE,
    duration_minutes INTEGER DEFAULT 60,
    location TEXT,
    meeting_link TEXT,
    
    -- Participants
    interviewer_ids JSONB DEFAULT '[]',
    candidate_id UUID REFERENCES candidates(id),
    
    -- Status
    status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'in_progress', 'completed', 'cancelled', 'rescheduled')),
    
    -- Feedback & Results
    interviewer_feedback JSONB DEFAULT '[]',
    cultural_assessment_scores JSONB DEFAULT '{}',
    technical_assessment_scores JSONB DEFAULT '{}',
    overall_rating INTEGER CHECK (overall_rating BETWEEN 1 AND 10),
    
    -- AI Analysis
    ai_sentiment_analysis JSONB DEFAULT '{}',
    ai_cultural_cues JSONB DEFAULT '[]',
    ai_recommendations TEXT,
    
    -- Notes
    preparation_notes TEXT,
    interview_notes TEXT,
    follow_up_actions JSONB DEFAULT '[]',
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- CULTURAL INTELLIGENCE REPORTS
-- =============================================

CREATE TABLE cultural_intelligence_reports (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    company_id UUID REFERENCES companies(id),
    report_type TEXT CHECK (report_type IN ('team_analysis', 'hiring_trends', 'cultural_diversity', 'integration_success')),
    
    -- Report Data
    report_title TEXT NOT NULL,
    report_period_start DATE,
    report_period_end DATE,
    
    -- Metrics
    total_hires INTEGER DEFAULT 0,
    cultural_fit_average DECIMAL(4,2),
    integration_success_rate DECIMAL(4,2),
    diversity_metrics JSONB DEFAULT '{}',
    retention_rates JSONB DEFAULT '{}',
    
    -- Analysis
    key_insights JSONB DEFAULT '[]',
    recommendations JSONB DEFAULT '[]',
    cultural_trends JSONB DEFAULT '[]',
    risk_factors JSONB DEFAULT '[]',
    
    -- Report Content
    executive_summary TEXT,
    detailed_analysis TEXT,
    charts_data JSONB DEFAULT '{}',
    
    -- Status
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'completed', 'published')),
    generated_by UUID REFERENCES user_profiles(id),
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- AUDIT LOGS
-- =============================================

CREATE TABLE audit_logs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES user_profiles(id),
    action TEXT NOT NULL,
    table_name TEXT,
    record_id UUID,
    old_values JSONB,
    new_values JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- INDEXES FOR PERFORMANCE
-- =============================================

-- User profiles
CREATE INDEX idx_user_profiles_user_type ON user_profiles(user_type);
CREATE INDEX idx_user_profiles_email ON user_profiles(email);

-- Companies
CREATE INDEX idx_companies_industry ON companies(industry);
CREATE INDEX idx_companies_location ON companies(headquarters_location);
CREATE INDEX idx_companies_active ON companies(is_active);

-- Candidates
CREATE INDEX idx_candidates_location ON candidates(city, prefecture);
CREATE INDEX idx_candidates_experience ON candidates(years_of_experience);
CREATE INDEX idx_candidates_active ON candidates(is_active);
CREATE INDEX idx_candidates_skills ON candidates USING GIN(technical_skills);

-- Cultural assessments
CREATE INDEX idx_cultural_assessments_candidate ON cultural_assessments(candidate_id);
CREATE INDEX idx_cultural_assessments_score ON cultural_assessments(overall_cq_score);

-- Jobs
CREATE INDEX idx_jobs_company ON jobs(company_id);
CREATE INDEX idx_jobs_status ON jobs(status);
CREATE INDEX idx_jobs_location ON jobs(prefecture);
CREATE INDEX idx_jobs_posted_date ON jobs(posted_date);
CREATE INDEX idx_jobs_skills ON jobs USING GIN(required_skills);

-- Job applications
CREATE INDEX idx_applications_job ON job_applications(job_id);
CREATE INDEX idx_applications_candidate ON job_applications(candidate_id);
CREATE INDEX idx_applications_status ON job_applications(status);
CREATE INDEX idx_applications_match_score ON job_applications(overall_match_score);

-- AI matching results
CREATE INDEX idx_matching_job ON ai_matching_results(job_id);
CREATE INDEX idx_matching_candidate ON ai_matching_results(candidate_id);
CREATE INDEX idx_matching_score ON ai_matching_results(overall_score);

-- =============================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================

-- Enable RLS on all tables
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE candidates ENABLE ROW LEVEL SECURITY;
ALTER TABLE cultural_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE psychological_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_matching_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE interviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE cultural_intelligence_reports ENABLE ROW LEVEL SECURITY;

-- User profiles: Users can only see their own profile
CREATE POLICY "Users can view own profile" ON user_profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON user_profiles
    FOR UPDATE USING (auth.uid() = id);

-- Companies: Company users can manage their own company data
CREATE POLICY "Companies can view own data" ON companies
    FOR ALL USING (auth.uid() = user_id);

-- Candidates: Candidates can manage their own data
CREATE POLICY "Candidates can view own data" ON candidates
    FOR ALL USING (auth.uid() = user_id);

-- Jobs: Public read access, company write access
CREATE POLICY "Jobs are publicly readable" ON jobs
    FOR SELECT USING (status = 'active');

CREATE POLICY "Companies can manage own jobs" ON jobs
    FOR ALL USING (
        company_id IN (
            SELECT id FROM companies WHERE user_id = auth.uid()
        )
    );

-- =============================================
-- FUNCTIONS FOR BUSINESS LOGIC
-- =============================================

-- Function to calculate cultural fit score
CREATE OR REPLACE FUNCTION calculate_cultural_fit_score(
    candidate_assessment_id UUID,
    job_requirements JSONB
) RETURNS DECIMAL(4,2) AS $$
DECLARE
    fit_score DECIMAL(4,2) := 0;
BEGIN
    -- Complex cultural fit calculation logic would go here
    -- This is a simplified version
    SELECT 
        (wa_harmony + kaizen_improvement + omotenashi_hospitality + 
         cultural_adaptability + team_collaboration) / 5.0 * 10
    INTO fit_score
    FROM cultural_assessments
    WHERE id = candidate_assessment_id;
    
    RETURN COALESCE(fit_score, 0);
END;
$$ LANGUAGE plpgsql;

-- Function to update job application counts
CREATE OR REPLACE FUNCTION update_job_application_count()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE jobs 
        SET applications_count = applications_count + 1
        WHERE id = NEW.job_id;
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE jobs 
        SET applications_count = applications_count - 1
        WHERE id = OLD.job_id;
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Trigger for job application count
CREATE TRIGGER trigger_update_job_application_count
    AFTER INSERT OR DELETE ON job_applications
    FOR EACH ROW EXECUTE FUNCTION update_job_application_count();

-- Function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add update triggers to all tables
CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON user_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_companies_updated_at BEFORE UPDATE ON companies FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_candidates_updated_at BEFORE UPDATE ON candidates FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_cultural_assessments_updated_at BEFORE UPDATE ON cultural_assessments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_psychological_assessments_updated_at BEFORE UPDATE ON psychological_assessments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON jobs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_job_applications_updated_at BEFORE UPDATE ON job_applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_ai_matching_results_updated_at BEFORE UPDATE ON ai_matching_results FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_interviews_updated_at BEFORE UPDATE ON interviews FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_cultural_intelligence_reports_updated_at BEFORE UPDATE ON cultural_intelligence_reports FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

