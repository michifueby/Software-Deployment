# Lab2

Building a DevOps pipeline based on Azuer DevOps using a Node.JS example.

- For the example a Node.Js application is to be built using Express. 
- This should be deplyoed using an Azuer DevOpps pipeline in an Azure Web App after each commit. 
- The Node.js application has to be equipped with test cases. In addition to the build pipeline, a release pipeline is also to be created, which ensures an automatic takeover of a release into production. 
- This is to be equipped with a manual check and should not be released after each build. Finally, the application should include Azure Application Insights.

1. In the first step, a simple NodeJS application was created. Mathematical operators were implemented for the test cases and corresponding test cases were written. <br><br>

2. Then the Build and Deploy Pipeline was created. YAML File [here](../azure-pipelines.yml) <br><br>

3. When starting the pipeline I got the following error:
   ![Successful Deployment](../Lab2/img/pipeline-error.png) <br>
   After that I had to send a request to Microsoft for free parallelsim 
   ![Successful Deployment](../Lab2/img/azure-pipeline-free-parallelism.png) <br><br>

4. Then the Build was successful but the pipeline could not found the test-results.yaml. This issue was fixed by adjusting the search folder parameter.
   ![Successful Deployment](../Lab2/img/after-build-state.png) <br><br>

5. After that the Build Deploy Pipeline succeeded
   ![Successful Deployment](../Lab2/img/successful-build-deploy.png) 

   Test results:
   ![Successful Deployment](../Lab2/img/test-results.png) <br><br>

6. To create a release pipeline, the option "Disable creation of classic build pipelines" had to be activated in the organization settings. 
   ![Successful Deployment](../Lab2/img/release-pipeline-configuration.png) 
   
   After this setting, releases were visible under Pipelines
   ![Successful Deployment](../Lab2/img/releases-option-pipeline.png) <br><br>

7. Furthermore the release pipeline could be created 
   ![Successful Deployment](../Lab2/img/release-pipeline-created.png) <br><br>

   Prod Stage Pre Conditions Configuration:
   ![Successful Deployment](../Lab2/img/release-pipeline-prod-pre-deployment-conditions.png) <br><br>

8. Release Pipeline Dev started
   ![Successful Deployment](../Lab2/img/release-pipeline-dev-started.png)

   Release Pipeline Dev succeded
   ![Successful Deployment](../Lab2/img/release-pipeline-dev-succeded.png) 

   Release Pipeline Prod Approve
   ![Successful Deployment](../Lab2/img/pipeline-pending-approval.png) 
   ![Successful Deployment](../Lab2/img/release-pipeline-prod-started.png) 

   Release Pipeline Prod succeded
   ![Successful Deployment](../Lab2/img/release-pipeline-prod-succeded.png) 

9. The release was successful
   ![Successful Release](../Lab2/img/successful-release.png) 