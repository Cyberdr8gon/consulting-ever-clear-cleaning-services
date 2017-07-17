cd ./front-end-staging/company-site
hugo -t=company-theme
cd ../..
cp -r ./front-end-staging/company-site/public/* ./public
