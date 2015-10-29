1. Create an account at aws.amazon.com
2. Generate an ssh key (instructions [here](https://help.github.com/articles/generating-ssh-keys/)). Go up to step 4 where you do `pbcopy`
3. You should have your public key in your clipboard
4. In AWS go to "EC2 ->Network & Security->Key Pairs"
5. Import Key Pair (name could be "My Mac"). Paste in the public key and click "import"
6. Go back to AWS dasboard and click on "OpsWorks"
7. Click on "Add Stack"
  1. Name: Your Application
  2. Default SSH Key: Select the key you created
  3. Click "Add Stack"
8. Click on "Add a layer"
  1. Select Node.js as layer type and click "Add Layer"
9. Under Navigation, click "Instances" and click "Add an instance"
  1. Under "Size" select "t2.micro" (smallest server)
  2. Add Instance
  3. Click "Start" to start up your instance
10. Under Navigation, click "Apps" and click "Add an App"
  1. Name: Name of your app
  2. Repository URL: from github code repo copy the *SSH* clone URL on the right (ex: git@github.com:nycitt/codementor-example.git)
  3. Go to "Settings" in Github repo and click "Deploy keys"
  4. Follow same steps as [here](https://help.github.com/articles/generating-ssh-keys/) BUT when it asks "Enter file in which to save the key" name your key "yourapplication" with No Passphrase
  5. Copy the public key that's generated into the "Key" field in Github
  6. Name it "Amazon" and click "Add Key"
  7. Go back to AWS and copy the private key into the Repository SSH key field
  8. Fill in environmental variables by looking at the config file. Convert everything to Uppercase
    1. camelCase -> CAMEL_CASE
    2. nested object becomes PARENT_CHILD
      ```
      {
        parse: {
          masterKey: ''
        }
      }

      Environment Variable: PARSE_MASTER_KEY
      ```
  9. Click "Add App"
  10. Click "Deploy" and "Deploy again"
11. You will be able to access your app by going to Navigation->Instances and looking for the public ip of your server
12. If you need to debug do `ssh ec2-user@IP-ADDRESS` and it should automatically log in using your private key. All files are located in `/srv/www/<name of app>/current`

# Setting Up Auto Deploy on Push
1. In Github repo go to "settings"
2. Go to "Webhooks & Services"
3. Add Service -> OpsWorks
4. Fill in info
  1. In AWS go to "IAM"
  2. Go to "Users"
  3. Create new user
  4. Name it "aws"
  5. Create Create
  6. Show User Security Credentials
  7. Copy security credentials to the GitHub page
  8. Close and click on user. 
  9. Go to "Permissions"
  10. Click "attach policy
  11. Filter for "ops" and attach the 1st policy
  12. AppId: In opsworks, click on your app, and it's going to be the "OpsWorks ID"
  13: Stack ID: In OpsWorks selet "Stack" from navigation, go to "Stack Settings". It's going to be the OpsWorks Id
  14. branch name: master