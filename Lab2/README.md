# Lab2
[Lab2](#lab2)
- [Lab2](#lab2)
  - [General](#general)
  - [Info](#info)
  - [Steps](#steps)

## General

Building a DevOps pipeline based on Azuer DevOps using a Node.JS example.

- For the example a Node.Js application is to be built using Express. 
- This should be deplyoed using an Azuer DevOpps pipeline in an Azure Web App after each commit. 
- The Node.js application has to be equipped with test cases. In addition to the build pipeline, a release pipeline is also to be created, which ensures an automatic takeover of a release into production. 
- This is to be equipped with a manual check and should not be released after each build. Finally, the application should include Azure Application Insights.

## Info

Links to the azure web apps:
[Dev App](mfwebappnodejs-dev.azurewebsites.net)
[Production App](mfwebappnodejs-prod.azurewebsites.net)

## Steps


1. In the first step, a simple NodeJS application was created. Mathematical operators were implemented for the test cases and corresponding test cases were written. <br><br>

2. Then the Build and Deploy Pipeline was created. YAML File [here](../azure-pipelines.yml) <br><br>
   
3. For deploying on Azure, a service connection had to be created <br>
   ![Successful Deployment](../Lab2/img/service-connection-config.png) <br>

4. When starting the pipeline I got the following error: <br>
   ![Successful Deployment](../Lab2/img/pipeline-error.png) <br>
   After that I had to send a request to Microsoft for free parallelsim  <br>
   ![Successful Deployment](../Lab2/img/azure-pipeline-free-parallelism.png) <br><br>

5. Then the Build was successful but the pipeline could not found the test-results.yaml. This issue was fixed by adjusting the search folder parameter. <b>
   ![Successful Deployment](../Lab2/img/after-build-state.png) <br><br>

6. After that the Build Deploy Pipeline succeeded <br>
   ![Successful Deployment](../Lab2/img/successful-build-deploy.png) 

   Test results: <br>
   ![Successful Deployment](../Lab2/img/test-results.png) <br><br>

7. To create a release pipeline, the option "Disable creation of classic build pipelines" had to be activated in the organization settings. <br>
   ![Successful Deployment](../Lab2/img/release-pipeline-configuration.png) 
   
   After this setting, releases were visible under Pipelines <br>
   ![Successful Deployment](../Lab2/img/releases-option-pipeline.png) <br><br>

8. Furthermore the release pipeline could be created <br>
   ![Successful Deployment](../Lab2/img/release-pipeline-created.png) <br><br>

   Production Stage Pre Conditions Configuration: <br>
   ![Successful Deployment](../Lab2/img/release-pipeline-prod-pre-deployment-conditions.png) <br><br>

9.  Release Pipeline Dev started <br>
   ![Successful Deployment](../Lab2/img/release-pipeline-dev-started.png)

   Release Pipeline Dev succeded <br>
   ![Successful Deployment](../Lab2/img/release-pipeline-dev-succeded.png) 

   Release Pipeline Prod Approve <br>
   ![Successful Deployment](../Lab2/img/pipeline-pending-approval.png) 
   ![Successful Deployment](../Lab2/img/release-pipeline-prod-started.png) 

   Release Pipeline Prod succeded <br>
   ![Successful Deployment](../Lab2/img/release-pipeline-prod-succeded.png)

10. The release was successful <br>
   ![Successful Release](../Lab2/img/successful-release.png)<br><br>

11. You can see all releases <br>
   ![Successful Release](../Lab2/img/all-releases.png) <br><br>

      The first thing I got was an Application Error from the Azure Web App <br>
      ![Successful Release](../Lab2/img/application-error.png)

      I used the protocol stream to find out the cause of the error

      Issue: The Web App found not the package.json

      To fix the error in the Azure portal had to add a application configuration with the name **PROJECT** and the Value ```<ROOT PATH>``` (for example: Lab2/app)</ROOT> <br>

      ![Successful Release](../Lab2/img/web-app-configuration.png) <br><br>

12. After the release on production:å
    ![Successful Release](../Lab2/img/production-web-app.png) 