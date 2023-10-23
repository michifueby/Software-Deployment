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

