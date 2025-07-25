#!/bin/bash

# Create a fresh branch from the current state
echo "Creating a fresh branch from the current state..."
git checkout --orphan temp_branch

# Add all the files
echo "Adding all current files..."
git add .

# Commit the changes
echo "Committing changes..."
git commit -m "Clean start: Removed large media files from history"

# Delete the main branch
echo "Deleting the old main branch..."
git branch -D main

# Rename the temporary branch to main
echo "Renaming temp_branch to main..."
git branch -m main

# Force push to remote repository
echo "Force pushing to remote repository..."
git push -f origin main

echo "Done! The repository has been cleaned of large files in its history."
