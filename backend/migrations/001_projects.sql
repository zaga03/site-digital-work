CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    title VARCHAR(150) NOT NULL,
    short_title VARCHAR(100),

    description TEXT NOT NULL,
    details TEXT,

    category VARCHAR(100) NOT NULL,

    image_url TEXT,

    technologies JSONB NOT NULL DEFAULT '[]'::jsonb,
    benefits JSONB NOT NULL DEFAULT '[]'::jsonb,

    project_url TEXT,
    demo_url TEXT,

    featured BOOLEAN NOT NULL DEFAULT FALSE,

    status VARCHAR(30) NOT NULL DEFAULT 'completed'
        CHECK (status IN ('completed', 'in-progress', 'maintenance')),

    sort_order INTEGER NOT NULL DEFAULT 0,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);