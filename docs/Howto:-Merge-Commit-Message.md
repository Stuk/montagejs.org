---
layout: docs
title: Merge Commit Message
---

# Merge Commit Message

Looking at the history and at the number of commits I think it would be beneficial to normalize the merge commit messages. This means that all merges need to be made using a custom message. Using the command line this is done with the -m parameter. If you are using a GUI of your choice please find out how to do this.

    `git merge -m "..." branch-name`

if the commit doesn’t apply cleanly you will need to do 

    `git commit -m "..."`

I think that we can imply the "into ..." part of the default commit message.

If you are merging a branch that is in the main montage repository you can omit the username.
Merging montage's master branch into yours

    **"Merge branch master"**
  
Merging a montage feature-branch branch into yours

    **"Merge branch feature-branch"**
    
Merging a branch from somebody's fork (or your own) into your own branch

    **"Merge branch somebodysusername/branch-name"**

For pull requests I'm keeping the default form GitHub uses.

    **"Merge pull request #ISSUENUMBER from somebodysusername/branch-name"**
    
If you are merging a local branch that will not be push to your fork into another, please try rebasing the local commits first, if that is impractical, the commit message should be.

    **"Merge branch yourusername/descriptive-branch-name"**