@echo off
set COMMIT=%1

if "%COMMIT%" == "" (
    echo "missing parameter"
) else (
echo "moving to %COMMIT%..."
    git fetch -p --tags --force
    git reset HEAD --hard
    git add .
    git stash
    git pull origin main --rebase --force
    git checkout "%COMMIT%"
    git stash drop
)
