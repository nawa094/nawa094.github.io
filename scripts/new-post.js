#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

async function question(prompt) {
  return new Promise(resolve => {
    rl.question(prompt, resolve);
  });
}

async function createNewPost() {
  console.log('📝 Creating a new blog post...\n');

  const title = await question('Post title: ');
  const description = await question('Post description: ');
  const tags = await question('Tags (comma-separated): ');

  const today = new Date();
  const slug = slugify(title);
  const filename = `${formatDate(today)}-${slug}.md`;
  const filepath = path.join(__dirname, '..', 'blog', filename);

  const tagArray = tags
    .split(',')
    .map(tag => `"${tag.trim()}"`)
    .join(', ');

  const frontMatter = `---
title: "${title}"
authors: nawam
date: ${formatDate(today)}
description: "${description}"
tags: [${tagArray}]
---

# ${title}

${description}

<!-- truncate -->

## Introduction

Write your blog post content here...

## Conclusion

Wrap up your thoughts here.
`;

  fs.writeFileSync(filepath, frontMatter);

  console.log(`\n✅ Created new blog post: ${filename}`);
  console.log(`📍 Location: ${filepath}`);
  console.log('\nYou can now edit the file and add your content!');

  rl.close();
}

createNewPost().catch(console.error);
