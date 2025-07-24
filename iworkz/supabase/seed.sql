-- Sample Data for aiKODA Cultural Intelligence Platform
-- This file provides realistic test data for development and demonstration

-- =============================================
-- SAMPLE USER PROFILES
-- =============================================

-- Note: In production, user_profiles will be populated via Supabase Auth
-- These are example records for testing

INSERT INTO user_profiles (id, email, full_name, user_type, language_preference) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'tanaka.hiroshi@example.com', 'Tanaka Hiroshi', 'candidate', 'ja'),
('550e8400-e29b-41d4-a716-446655440002', 'smith.john@example.com', 'John Smith', 'candidate', 'en'),
('550e8400-e29b-41d4-a716-446655440003', 'yamada.akiko@example.com', 'Yamada Akiko', 'candidate', 'ja'),
('550e8400-e29b-41d4-a716-446655440004', 'hr@techcorp.jp', 'TechCorp HR', 'company', 'ja'),
('550e8400-e29b-41d4-a716-446655440005', 'hr@globalfinance.com', 'Global Finance HR', 'company', 'en'),
('550e8400-e29b-41d4-a716-446655440006', 'admin@aikoda.com', 'aiKODA Admin', 'admin', 'en');

-- =============================================
-- SAMPLE COMPANIES
-- =============================================

INSERT INTO companies (
    id, user_id, company_name, company_name_ja, industry, company_size, 
    headquarters_location, website_url, description, description_ja,
    cultural_values, communication_style, hierarchy_level,
    wa_importance, kaizen_focus, omotenashi_level,
    visa_sponsorship_available, remote_work_policy, is_verified
) VALUES 
(
    '660e8400-e29b-41d4-a716-446655440001',
    '550e8400-e29b-41d4-a716-446655440004',
    'TechCorp Japan',
    'テックコープ・ジャパン',
    'Information Technology',
    '201-1000',
    'Tokyo, Japan',
    'https://techcorp.jp',
    'Leading technology company specializing in AI and machine learning solutions for enterprise clients.',
    '企業向けAI・機械学習ソリューションを専門とする大手テクノロジー企業',
    '{"innovation": 9, "collaboration": 8, "quality": 9, "customer_focus": 8}',
    'mixed',
    'moderate',
    7, 8, 6,
    true,
    'hybrid',
    true
),
(
    '660e8400-e29b-41d4-a716-446655440002',
    '550e8400-e29b-41d4-a716-446655440005',
    'Global Finance Solutions',
    'グローバル・ファイナンス・ソリューションズ',
    'Financial Services',
    '1000+',
    'Tokyo, Japan',
    'https://globalfinance.com',
    'International financial services company providing investment and banking solutions.',
    '投資・銀行ソリューションを提供する国際金融サービス企業',
    '{"integrity": 10, "excellence": 9, "diversity": 8, "innovation": 7}',
    'direct',
    'hierarchical',
    8, 7, 9,
    true,
    'hybrid',
    true
);

-- =============================================
-- SAMPLE CANDIDATES
-- =============================================

INSERT INTO candidates (
    id, user_id, first_name, last_name, first_name_ja, last_name_ja,
    date_of_birth, nationality, phone, city, prefecture, country,
    current_title, years_of_experience, education_level, university, major, graduation_year,
    technical_skills, soft_skills, languages,
    desired_salary_min, desired_salary_max, preferred_locations,
    work_style_preference, visa_status, work_authorization,
    bio, bio_ja, is_active, profile_completion_percentage
) VALUES 
(
    '770e8400-e29b-41d4-a716-446655440001',
    '550e8400-e29b-41d4-a716-446655440001',
    'Hiroshi', 'Tanaka', '博', '田中',
    '1990-05-15', 'Japanese', '+81-90-1234-5678',
    'Tokyo', 'Tokyo', 'Japan',
    'Senior Software Engineer', 8,
    'master', 'Tokyo University', 'Computer Science', 2015,
    '["Python", "JavaScript", "React", "Node.js", "AWS", "Docker", "Kubernetes"]',
    '["Leadership", "Problem Solving", "Communication", "Team Management"]',
    '[{"language": "Japanese", "level": "native"}, {"language": "English", "level": "business"}]',
    8000000, 12000000,
    '["Tokyo", "Osaka", "Remote"]',
    'hybrid',
    'Japanese Citizen',
    true,
    'Experienced software engineer with expertise in full-stack development and cloud technologies. Passionate about building scalable solutions and leading development teams.',
    '8年の経験を持つソフトウェアエンジニア。フルスタック開発とクラウド技術に精通。スケーラブルなソリューション構築と開発チームのリーダーシップに情熱を持つ。',
    true,
    95
),
(
    '770e8400-e29b-41d4-a716-446655440002',
    '550e8400-e29b-41d4-a716-446655440002',
    'John', 'Smith', 'ジョン', 'スミス',
    '1988-03-22', 'American', '+81-80-9876-5432',
    'Tokyo', 'Tokyo', 'Japan',
    'Product Manager', 6,
    'bachelor', 'Stanford University', 'Business Administration', 2010,
    '["Product Strategy", "Agile", "Scrum", "Data Analysis", "SQL", "Tableau"]',
    '["Strategic Thinking", "Cross-cultural Communication", "Negotiation", "Project Management"]',
    '[{"language": "English", "level": "native"}, {"language": "Japanese", "level": "conversational"}]',
    9000000, 15000000,
    '["Tokyo", "Yokohama"]',
    'office',
    'Work Visa',
    true,
    'Experienced product manager with a track record of launching successful products in both US and Japanese markets. Strong background in data-driven decision making.',
    '米国と日本市場での成功した製品ローンチの実績を持つ経験豊富なプロダクトマネージャー。データドリブンな意思決定に強いバックグラウンドを持つ。',
    true,
    88
),
(
    '770e8400-e29b-41d4-a716-446655440003',
    '550e8400-e29b-41d4-a716-446655440003',
    'Akiko', 'Yamada', '明子', '山田',
    '1992-11-08', 'Japanese', '+81-70-5555-1234',
    'Osaka', 'Osaka', 'Japan',
    'UX Designer', 5,
    'bachelor', 'Kyoto University of Arts', 'Design', 2014,
    '["Figma", "Adobe Creative Suite", "Sketch", "Prototyping", "User Research", "HTML/CSS"]',
    '["Creative Thinking", "Empathy", "Attention to Detail", "Collaboration"]',
    '[{"language": "Japanese", "level": "native"}, {"language": "English", "level": "intermediate"}]',
    6000000, 9000000,
    '["Osaka", "Kyoto", "Tokyo", "Remote"]',
    'remote',
    'Japanese Citizen',
    true,
    'Creative UX designer focused on creating intuitive and accessible digital experiences. Experienced in user research and design thinking methodologies.',
    '直感的でアクセシブルなデジタル体験の創造に焦点を当てたクリエイティブなUXデザイナー。ユーザーリサーチとデザイン思考手法に経験豊富。',
    true,
    92
);

-- =============================================
-- SAMPLE CULTURAL ASSESSMENTS
-- =============================================

INSERT INTO cultural_assessments (
    id, candidate_id, assessment_type,
    power_distance, individualism_collectivism, uncertainty_avoidance, long_term_orientation, masculinity_femininity,
    wa_harmony, kaizen_improvement, omotenashi_hospitality, nemawashi_consensus, ringi_decision_making,
    direct_communication, context_sensitivity, non_verbal_awareness, silence_comfort,
    team_collaboration, independent_work, hierarchy_respect, innovation_openness,
    cultural_adaptability, change_flexibility, stress_tolerance, learning_agility,
    overall_cq_score, japanese_cultural_fit_score, integration_timeline_prediction, is_complete
) VALUES 
(
    '880e8400-e29b-41d4-a716-446655440001',
    '770e8400-e29b-41d4-a716-446655440001',
    'cq47',
    6, 4, 7, 8, 5,
    8, 9, 7, 8, 7,
    6, 8, 9, 8,
    9, 7, 8, 8,
    8, 8, 7, 9,
    94.5, 92.3, 30,
    true
),
(
    '880e8400-e29b-41d4-a716-446655440002',
    '770e8400-e29b-41d4-a716-446655440002',
    'cq47',
    4, 8, 5, 6, 7,
    5, 6, 6, 4, 5,
    8, 6, 5, 4,
    7, 9, 5, 9,
    9, 9, 8, 9,
    87.2, 73.8, 60,
    true
),
(
    '880e8400-e29b-41d4-a716-446655440003',
    '770e8400-e29b-41d4-a716-446655440003',
    'cq47',
    5, 3, 6, 7, 4,
    9, 8, 9, 9, 8,
    5, 9, 8, 9,
    9, 6, 9, 7,
    7, 7, 6, 8,
    91.7, 96.2, 21,
    true
);

-- =============================================
-- SAMPLE PSYCHOLOGICAL ASSESSMENTS
-- =============================================

INSERT INTO psychological_assessments (
    id, candidate_id, assessment_type,
    openness, conscientiousness, extraversion, agreeableness, neuroticism,
    honesty_humility, team_role_primary, team_role_secondary, leadership_style,
    work_motivation_factors, personality_summary, strengths, development_areas,
    is_complete
) VALUES 
(
    '990e8400-e29b-41d4-a716-446655440001',
    '770e8400-e29b-41d4-a716-446655440001',
    'big_five',
    85, 88, 72, 79, 35,
    82, 'Coordinator', 'Implementer', 'Collaborative',
    '["Achievement", "Autonomy", "Learning", "Recognition"]',
    'Highly conscientious and open individual with strong leadership potential and excellent problem-solving abilities.',
    '["Strategic thinking", "Technical expertise", "Team leadership", "Adaptability"]',
    '["Public speaking", "Delegation", "Work-life balance"]',
    true
),
(
    '990e8400-e29b-41d4-a716-446655440002',
    '770e8400-e29b-41d4-a716-446655440002',
    'big_five',
    78, 85, 88, 75, 28,
    79, 'Shaper', 'Resource Investigator', 'Transformational',
    '["Challenge", "Variety", "Impact", "Growth"]',
    'Highly extraverted and conscientious with strong drive for results and excellent communication skills.',
    '["Strategic vision", "Communication", "Results orientation", "Cross-cultural competence"]',
    '["Patience with details", "Consensus building", "Stress management"]',
    true
),
(
    '990e8400-e29b-41d4-a716-446655440003',
    '770e8400-e29b-41d4-a716-446655440003',
    'big_five',
    92, 79, 45, 88, 42,
    85, 'Plant', 'Monitor Evaluator', 'Servant',
    '["Creativity", "Purpose", "Harmony", "Quality"]',
    'Highly creative and agreeable individual with strong aesthetic sense and user-centered approach.',
    '["Creative problem solving", "User empathy", "Attention to detail", "Quality focus"]',
    '["Assertiveness", "Time management", "Technical skills"]',
    true
);

-- =============================================
-- SAMPLE JOBS
-- =============================================

INSERT INTO jobs (
    id, company_id, title, title_ja, department, employment_type, seniority_level,
    location, prefecture, remote_work_option,
    salary_min, salary_max, currency,
    description, description_ja, responsibilities, requirements, preferred_qualifications,
    required_skills, preferred_skills, years_experience_min, years_experience_max,
    language_requirements, cultural_fit_requirements,
    wa_requirement, kaizen_requirement, omotenashi_requirement,
    visa_sponsorship_available, status, posted_date
) VALUES 
(
    'aa0e8400-e29b-41d4-a716-446655440001',
    '660e8400-e29b-41d4-a716-446655440001',
    'Senior Full Stack Developer',
    'シニア フルスタック デベロッパー',
    'Engineering',
    'full_time',
    'senior',
    'Tokyo, Japan',
    'Tokyo',
    'hybrid',
    9000000, 13000000, 'JPY',
    'We are seeking a Senior Full Stack Developer to join our innovative AI team. You will be responsible for developing scalable web applications and contributing to our cutting-edge AI products.',
    '革新的なAIチームに参加するシニア フルスタック デベロッパーを募集しています。スケーラブルなWebアプリケーションの開発と最先端のAI製品への貢献を担当していただきます。',
    '["Develop and maintain full-stack web applications", "Collaborate with AI/ML teams", "Code review and mentoring", "Architecture design"]',
    '["5+ years full-stack development experience", "Strong JavaScript/TypeScript skills", "Experience with React and Node.js", "Database design experience"]',
    '["AI/ML experience", "Cloud platform experience (AWS/GCP)", "Microservices architecture", "DevOps experience"]',
    '["JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL", "MongoDB"]',
    '["TensorFlow", "PyTorch", "AWS", "Docker", "Kubernetes", "GraphQL"]',
    5, 10,
    '[{"language": "Japanese", "level": "business", "required": true}, {"language": "English", "level": "conversational", "required": false}]',
    '{"team_collaboration": 8, "innovation_openness": 9, "cultural_adaptability": 7}',
    7, 8, 6,
    true,
    'active',
    NOW() - INTERVAL '5 days'
),
(
    'aa0e8400-e29b-41d4-a716-446655440002',
    '660e8400-e29b-41d4-a716-446655440002',
    'Product Manager - Digital Banking',
    'プロダクトマネージャー - デジタルバンキング',
    'Product',
    'full_time',
    'mid',
    'Tokyo, Japan',
    'Tokyo',
    'hybrid',
    10000000, 16000000, 'JPY',
    'Lead the development of next-generation digital banking products. Work closely with engineering, design, and business teams to deliver innovative financial solutions.',
    '次世代デジタルバンキング製品の開発をリードします。エンジニアリング、デザイン、ビジネスチームと密接に連携し、革新的な金融ソリューションを提供します。',
    '["Define product strategy and roadmap", "Collaborate with cross-functional teams", "Analyze market trends and user needs", "Manage product lifecycle"]',
    '["3+ years product management experience", "Financial services background preferred", "Strong analytical skills", "Excellent communication skills"]',
    '["MBA or equivalent", "Fintech experience", "Agile/Scrum certification", "Data analysis skills"]',
    '["Product Strategy", "Market Analysis", "Agile", "SQL", "Data Analysis"]',
    '["Fintech", "Blockchain", "API Management", "User Research", "A/B Testing"]',
    3, 8,
    '[{"language": "Japanese", "level": "business", "required": true}, {"language": "English", "level": "business", "required": true}]',
    '{"hierarchy_respect": 8, "nemawashi_consensus": 7, "omotenashi_hospitality": 8}',
    8, 7, 9,
    true,
    'active',
    NOW() - INTERVAL '3 days'
),
(
    'aa0e8400-e29b-41d4-a716-446655440003',
    '660e8400-e29b-41d4-a716-446655440001',
    'UX/UI Designer',
    'UX/UIデザイナー',
    'Design',
    'full_time',
    'mid',
    'Tokyo, Japan',
    'Tokyo',
    'remote',
    6500000, 9500000, 'JPY',
    'Create exceptional user experiences for our AI-powered applications. Work with product and engineering teams to design intuitive and accessible interfaces.',
    'AI搭載アプリケーションの優れたユーザーエクスペリエンスを創造します。プロダクトとエンジニアリングチームと協力し、直感的でアクセシブルなインターフェースを設計します。',
    '["Design user interfaces and experiences", "Conduct user research and testing", "Create prototypes and wireframes", "Collaborate with development teams"]',
    '["3+ years UX/UI design experience", "Proficiency in Figma and Adobe Creative Suite", "Understanding of design systems", "Portfolio of web/mobile designs"]',
    '["Experience with AI/ML applications", "Accessibility design knowledge", "Front-end development skills", "Japanese design aesthetics understanding"]',
    '["Figma", "Adobe Creative Suite", "Sketch", "Prototyping", "User Research"]',
    '["HTML/CSS", "JavaScript", "React", "Design Systems", "Accessibility"]',
    3, 7,
    '[{"language": "Japanese", "level": "conversational", "required": true}, {"language": "English", "level": "intermediate", "required": false}]',
    '{"omotenashi_hospitality": 9, "attention_to_detail": 8, "user_empathy": 9}',
    6, 7, 9,
    false,
    'active',
    NOW() - INTERVAL '1 day'
);

-- =============================================
-- SAMPLE JOB APPLICATIONS
-- =============================================

INSERT INTO job_applications (
    id, job_id, candidate_id, status, stage,
    overall_match_score, skills_match_score, experience_match_score, 
    cultural_fit_score, salary_match_score, location_match_score,
    match_explanation, strengths, concerns, recommendations,
    applied_date, last_activity_date
) VALUES 
(
    'bb0e8400-e29b-41d4-a716-446655440001',
    'aa0e8400-e29b-41d4-a716-446655440001',
    '770e8400-e29b-41d4-a716-446655440001',
    'interview',
    'technical_interview',
    92.5, 95.0, 90.0, 92.3, 85.0, 100.0,
    'Excellent technical match with strong cultural fit. Candidate demonstrates deep understanding of full-stack development and shows high adaptability to Japanese work culture.',
    '["Strong technical skills", "Excellent cultural fit", "Leadership experience", "Local market knowledge"]',
    '["Salary expectations slightly above budget", "Limited AI/ML experience"]',
    '["Proceed to technical interview", "Discuss AI/ML learning opportunities", "Consider salary negotiation"]',
    NOW() - INTERVAL '10 days',
    NOW() - INTERVAL '2 days'
),
(
    'bb0e8400-e29b-41d4-a716-446655440002',
    'aa0e8400-e29b-41d4-a716-446655440002',
    '770e8400-e29b-41d4-a716-446655440002',
    'screening',
    'hr_review',
    87.2, 85.0, 88.0, 73.8, 95.0, 100.0,
    'Strong product management background with international experience. Some cultural adaptation needed but high potential for success.',
    '["International experience", "Strong communication skills", "Product strategy expertise", "Data-driven approach"]',
    '["Limited Japanese cultural understanding", "Needs cultural integration support"]',
    '["Provide cultural mentoring", "Schedule cultural fit interview", "Discuss integration timeline"]',
    NOW() - INTERVAL '7 days',
    NOW() - INTERVAL '5 days'
),
(
    'bb0e8400-e29b-41d4-a716-446655440003',
    'aa0e8400-e29b-41d4-a716-446655440003',
    '770e8400-e29b-41d4-a716-446655440003',
    'offer',
    'final_review',
    96.2, 90.0, 88.0, 96.2, 100.0, 95.0,
    'Outstanding cultural fit with strong design skills. Perfect match for user-centered design approach and Japanese aesthetic sensibilities.',
    '["Exceptional cultural fit", "Strong design portfolio", "User research skills", "Japanese aesthetic understanding"]',
    '["Limited technical skills", "Remote work preference"]',
    '["Offer position with remote flexibility", "Provide technical skill development opportunities"]',
    NOW() - INTERVAL '14 days',
    NOW() - INTERVAL '1 day'
);

-- =============================================
-- SAMPLE AI MATCHING RESULTS
-- =============================================

INSERT INTO ai_matching_results (
    id, job_id, candidate_id,
    overall_score, skills_score, experience_score, cultural_fit_score,
    personality_score, location_score, salary_expectations_score, availability_score,
    matching_factors, strengths, gaps, recommendations,
    cq_compatibility, integration_prediction, cultural_challenges, cultural_opportunities,
    model_version, confidence_level, processing_time_ms
) VALUES 
(
    'cc0e8400-e29b-41d4-a716-446655440001',
    'aa0e8400-e29b-41d4-a716-446655440001',
    '770e8400-e29b-41d4-a716-446655440001',
    92.5, 95.0, 90.0, 92.3, 88.5, 100.0, 85.0, 95.0,
    '{"technical_alignment": 0.95, "cultural_compatibility": 0.92, "experience_relevance": 0.90, "communication_fit": 0.88}',
    '["Excellent technical skills match", "Strong Japanese cultural understanding", "Leadership experience", "Team collaboration skills"]',
    '["AI/ML experience limited", "Salary expectations above average"]',
    '["Proceed with technical interview", "Discuss AI/ML training opportunities", "Consider competitive salary package"]',
    '{"wa_compatibility": 0.89, "kaizen_alignment": 0.94, "omotenashi_match": 0.85, "communication_style": 0.88}',
    '{"integration_timeline": 30, "success_probability": 0.92, "cultural_adaptation_score": 0.91}',
    '["Potential over-commitment to harmony", "May need encouragement for innovation"]',
    '["Natural mentor for junior developers", "Bridge between traditional and modern approaches", "Cultural ambassador potential"]',
    'v2.1.0', 0.94, 1250
),
(
    'cc0e8400-e29b-41d4-a716-446655440002',
    'aa0e8400-e29b-41d4-a716-446655440002',
    '770e8400-e29b-41d4-a716-446655440002',
    87.2, 85.0, 88.0, 73.8, 91.2, 100.0, 95.0, 90.0,
    '{"technical_alignment": 0.85, "cultural_compatibility": 0.74, "experience_relevance": 0.88, "communication_fit": 0.82}',
    '["Strong product management experience", "International perspective", "Data-driven approach", "Excellent communication"]',
    '["Cultural adaptation needed", "Limited Japanese business protocol knowledge"]',
    '["Provide cultural mentoring program", "Pair with Japanese mentor", "Gradual integration approach"]',
    '{"wa_compatibility": 0.65, "kaizen_alignment": 0.72, "omotenashi_match": 0.68, "communication_style": 0.75}',
    '{"integration_timeline": 60, "success_probability": 0.78, "cultural_adaptation_score": 0.74}',
    '["Direct communication style may conflict", "Need to understand consensus building", "Hierarchy navigation required"]',
    '["Bring international best practices", "Diversity of thought", "Cross-cultural bridge", "Innovation catalyst"]',
    'v2.1.0', 0.87, 1180
),
(
    'cc0e8400-e29b-41d4-a716-446655440003',
    'aa0e8400-e29b-41d4-a716-446655440003',
    '770e8400-e29b-41d4-a716-446655440003',
    96.2, 90.0, 88.0, 96.2, 92.8, 95.0, 100.0, 98.0,
    '{"technical_alignment": 0.90, "cultural_compatibility": 0.96, "experience_relevance": 0.88, "communication_fit": 0.94}',
    '["Perfect cultural fit", "Strong design skills", "User empathy", "Japanese aesthetic understanding"]',
    '["Technical skills could be stronger", "Remote work preference"]',
    '["Offer with remote flexibility", "Provide technical skill development", "Leverage cultural strengths"]',
    '{"wa_compatibility": 0.98, "kaizen_alignment": 0.91, "omotenashi_match": 0.97, "communication_style": 0.95}',
    '{"integration_timeline": 21, "success_probability": 0.96, "cultural_adaptation_score": 0.97}',
    '["May be too accommodating", "Could avoid necessary conflicts"]',
    '["Natural cultural ambassador", "User advocacy champion", "Team harmony facilitator", "Quality excellence driver"]',
    'v2.1.0', 0.96, 980
);

-- =============================================
-- SAMPLE INTERVIEWS
-- =============================================

INSERT INTO interviews (
    id, application_id, interview_type, stage_number, scheduled_date,
    duration_minutes, location, status, interviewer_feedback,
    cultural_assessment_scores, overall_rating, interview_notes
) VALUES 
(
    'dd0e8400-e29b-41d4-a716-446655440001',
    'bb0e8400-e29b-41d4-a716-446655440001',
    'technical',
    2,
    NOW() + INTERVAL '2 days',
    90,
    'TechCorp Tokyo Office',
    'scheduled',
    '[]',
    '{}',
    null,
    'Technical interview scheduled to assess full-stack development skills and AI/ML knowledge.'
),
(
    'dd0e8400-e29b-41d4-a716-446655440002',
    'bb0e8400-e29b-41d4-a716-446655440002',
    'cultural',
    1,
    NOW() + INTERVAL '5 days',
    60,
    'Video Call',
    'scheduled',
    '[]',
    '{}',
    null,
    'Cultural fit interview to assess adaptation potential and communication style.'
);

-- =============================================
-- SAMPLE CULTURAL INTELLIGENCE REPORTS
-- =============================================

INSERT INTO cultural_intelligence_reports (
    id, company_id, report_type, report_title,
    report_period_start, report_period_end,
    total_hires, cultural_fit_average, integration_success_rate,
    diversity_metrics, retention_rates, key_insights, recommendations,
    executive_summary, status, generated_by
) VALUES 
(
    'ee0e8400-e29b-41d4-a716-446655440001',
    '660e8400-e29b-41d4-a716-446655440001',
    'hiring_trends',
    'Q4 2024 Cultural Intelligence Hiring Report',
    '2024-10-01', '2024-12-31',
    12, 87.5, 91.7,
    '{"nationality_diversity": 0.67, "cultural_background_diversity": 0.75, "language_diversity": 0.58}',
    '{"3_month": 0.92, "6_month": 0.88, "12_month": 0.85}',
    '["High cultural fit scores correlate with better retention", "International candidates show strong adaptation with proper support", "Technical skills gaps can be bridged more easily than cultural gaps"]',
    '["Implement cultural mentoring program", "Expand cultural assessment to all roles", "Develop integration timeline tracking"]',
    'Q4 2024 showed strong hiring performance with 12 new hires averaging 87.5% cultural fit score. Integration success rate of 91.7% demonstrates effectiveness of cultural intelligence screening.',
    'completed',
    '550e8400-e29b-41d4-a716-446655440006'
);

-- =============================================
-- UPDATE SEQUENCES AND COUNTERS
-- =============================================

-- Update job application counts
UPDATE jobs SET applications_count = (
    SELECT COUNT(*) FROM job_applications WHERE job_id = jobs.id
);

-- Update profile completion percentages (simplified calculation)
UPDATE candidates SET profile_completion_percentage = 
    CASE 
        WHEN bio IS NOT NULL AND technical_skills::text != '[]' AND languages::text != '[]' THEN 95
        WHEN bio IS NOT NULL AND technical_skills::text != '[]' THEN 85
        WHEN bio IS NOT NULL THEN 75
        ELSE 60
    END;

