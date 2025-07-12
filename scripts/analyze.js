#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Analyzing bundle size and performance...\n');

// Build with bundle analyzer
console.log('📦 Building with bundle analyzer...');
execSync('npm run build:analyze', { stdio: 'inherit' });

// Check build directory size
const buildPath = path.join(__dirname, '..', 'build');
if (fs.existsSync(buildPath)) {
  const getFolderSize = dir => {
    let size = 0;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        size += getFolderSize(filePath);
      } else {
        size += stats.size;
      }
    });
    return size;
  };

  const sizeInBytes = getFolderSize(buildPath);
  const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);

  console.log(`\n📈 Build Statistics:`);
  console.log(`   Total build size: ${sizeInMB} MB`);

  if (sizeInMB > 10) {
    console.log(
      '⚠️  Warning: Build size is larger than 10MB. Consider optimizing.'
    );
  } else {
    console.log('✅ Build size looks good!');
  }
}

console.log('\n🎯 Performance Tips:');
console.log('   - Use `npm run serve:build` to test production build locally');
console.log(
  '   - Check the bundle analyzer report for optimization opportunities'
);
console.log('   - Consider code splitting for large components');
console.log('   - Optimize images in the static folder');
