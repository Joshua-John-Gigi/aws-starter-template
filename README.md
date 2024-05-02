# aws-starter-template

This template provides an insight into how a project using AWS (Amazon Web Services) can be structured for better source code management

1. `cd api/`
2. `yarn` or `npm install`
3. `tsc`
4. Run `yarn` or `npm install` inside all folders with package.json

Use the paths relative to template to reference the js files instead of typescript files used during development. Deploy using SAM

1. `sam package --resolve-s3 --template ./api/infrastructure/contact/lambda/template.yaml --output-template-file ./api/infrastructure/contact/lambda/output.yaml`
2. `sam deploy --resolve-s3 --template-file ./api/infrastructure/contact/lambda/output.yaml --capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND --stack-name portfolio-prod --parameter-overrides stage=prod stackName=portfolio-prod`
