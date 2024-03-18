git pull
npm run build
cd dist
git add .
git commit -m "$now"
git push gitee2 main
git push china main
echo "Site updated successfully!"
