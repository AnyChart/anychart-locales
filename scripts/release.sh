#!/usr/bin/env bash

# variables definition
CDN_PATH="/apps/static/cdn/locales"
VERSION=$(node -p "require('./package.json').version")
INSTALL_PACKAGE_NAME="latest.zip"

# runs echoed command
run () {
    echo "> $*"
    eval "$@"
}

echo "--"
echo "Build samples"
echo "--"
run "node ./scripts/generateSamples.js"
echo

echo "--"
echo "Creating/checkout branch for locales-samples: $VERSION"
run "cd ../locales-samples"
run "git checkout -b $VERSION || git checkout $VERSION"
echo "Updating samples"
run "cp -R ../anychart-locales/samples/* ./"
echo "Commit and push"
run "git add ."
run "git commit -am 'Update version $VERSION'"
run "git push -u origin $VERSION"

run "cd ../anychart-locales"
run "rm -rf samples"

echo "--"
echo "Build locales"
echo "--"
run "node ./scripts/build.js"
echo

echo "--"
echo "Upload files to static server"
echo "--"
echo

# zip files
echo Zipping dist files
run "cd dist"
run "zip -q -r $INSTALL_PACKAGE_NAME *"
run "cd .."
echo

echo Create dir on static
run "ssh -i ~/.ssh/id_rsa $STATIC_HOST_SSH_STRING \"mkdir -p $CDN_PATH/$VERSION && rm -rf $CDN_PATH/$VERSION/* && rm -rf $CDN_PATH/latest/*\""
echo

echo Upload zip file
run "scp -i ~/.ssh/id_rsa dist/$INSTALL_PACKAGE_NAME $STATIC_HOST_SSH_STRING:$CDN_PATH/$INSTALL_PACKAGE_NAME"
echo

echo "Unzip file as $VERSION/ and latest/"
run "ssh -i ~/.ssh/id_rsa $STATIC_HOST_SSH_STRING \"unzip -q -o $CDN_PATH/$INSTALL_PACKAGE_NAME -d $CDN_PATH/$VERSION/\""
run "ssh -i ~/.ssh/id_rsa $STATIC_HOST_SSH_STRING \"unzip -q -o $CDN_PATH/$INSTALL_PACKAGE_NAME -d $CDN_PATH/latest/\""
echo

echo Remove local zip
run "rm dist/$INSTALL_PACKAGE_NAME"
echo

echo Moving locales dirs from cjs/
run "mv cjs/* ./"
run "rm -rf cjs"
echo

echo Drop cdn cache
run "node ./scripts/cdn.js"
echo
