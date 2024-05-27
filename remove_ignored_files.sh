#!/bin/bash

# Ensure the working tree is clean
if [ -n "$(git status --porcelain)" ]; then
  echo "Please commit or stash your changes before running this script."
  exit 1
fi

# Get the list of ignored files that are currently tracked by git
ignored_files=$(git ls-files -i --exclude-per-directory=.gitignore)

if [ -z "$ignored_files" ]; then
  echo "No tracked files match the patterns in .gitignore."
  exit 0
fi

for file in $ignored_files; do
  echo "Removing $file from index"
  git rm --cached "$file"
done

# Commit the changes
git commit -m "Remove ignored files from version control based on .gitignore"

# Push the changes to the remote repository
git push

echo "Ignored files have been successfully removed from the repository and untracked locally."
