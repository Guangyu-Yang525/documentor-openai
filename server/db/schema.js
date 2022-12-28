/**
 * Author: Guangyu Yang
 * 
 * database schema for PostgreSQL
 */

export const schema = `CREATE TABLE IF NOT EXISTS users (
    user_id serial primary key,
    user_name text not null,
    user_email text not null,
    user_password text not null
);

CREATE TABLE IF NOT EXISTS documents (
    doc_id serial primary key,
    doc_title text not null, 
    doc_content text,
    doc_created_at text not null,
    doc_updated_at text not null,
    doc_creator integer not null references users(user_id)
);
`