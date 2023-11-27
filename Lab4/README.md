# Lab4

## General
- Setup and configuration of an AKS in Azure
- Configuration and deployment of Wordpress incl. MySQL in the AKS cluster.

## Steps Creation/Connection

1. First, we must create a new resource for the azure container registry with azure cli command ```az acr create --resource-group <resource-group-name> --name $ACRNAME --sku Basic```
   After that the created resource is in the Azure Portal available: 
   ![Azure Container Registry](../Lab4/img/azure-container-registry.png)

   Then we build our application with ```docker-compose build``` <br><br>

   Tag the images with ```docker tag <local-image-name> <acr-login-server>/<repository-name>:<tag>```<br><br>

   Login to ACR with ```az acr login --name <acr-name>```<br><br>

   Push images to ACR with ```docker push <acr-login-server>/<repository-name>:<tag>```<br><br>

   After this steps we can see the images in the azure container registry:

   ![Azure Container Registry](../Lab4/img/azure-container-registry-2.png)

2. Now we can create the with the az cli command 
    ```az aks create --resource-group <resource-group-name> --name <aks-cluster-name> --node-count 2 --generate-ssh-keys --attach-acr <acrName> ``` <br><br>
   Then the AKS resource are created:
   ![AKS](../Lab4/img/aks-resource.png)

3. Furthermore we must install the Kubernetes CLI with the command ```az aks install-cli``` <br>
   Test to ensure the version you installed is up-to-date: ```kubectl version --client``` <br><br>

4. In this step we connect to cluster using kubectl ```az aks get-credentials --resource-group <resource-group-name> --name <aks-cluster-name>``` <br>
   Then we verify the connection to our cluster using the kubectl get nodes command, which returns a list of cluster nodes: ```kubectl get nodes``` <br>
   ![AKS Nodes](../Lab4/img/aks-nodes.png)

## Steps Deployment

1. Now we are able to deploy an application to Azure Kubernetes Service (AKS) <br>
   Create the two .yaml-files: **mysql-deployment.yaml** and **wordpress-deployment.yaml** <br><br>

2. Define a password by using the following command: ```kubectl create secret generic mysql-pass --from-literal=password=<passwordhere>``` <br><br>

3. After that we can create pods with ```kubectl apply -f mysql-deployment.yaml``` and ```kubectl apply -f wordpress-deployment.yaml```

4. Then we must check if everything is running correctly with ```kubectl get services```
   ![Running services](../Lab4/img/aks-services.png) <br><br>

5. At the end we can Start/Stop/Delete the Cluster
   Start the cluster with ```az aks start --name <clusterName> --resource-group <resourceGroupName>```<br><br>

   Stop the cluster with ```az aks stop --name <clusterName> --resource-group <resourceGroupName>```<br><br>

   Delete the cluster with ```az group delete --name <resourceGroupName> --yes --no-wait```<br><br>

6. You can access the website with the external IP
   Also we can get the info with ```kubectl get services``` <br>
   ![Running services](../Lab4/img/aks-services.png) <br>
   ![Running wordpress site](../Lab4/img/aks-wordpress-site.png) <br><br>

   After the wordpress setup we can see the wordpress dashboard
   ![Running wordpress dashboard](../Lab4/img/aks-wordpress-dashboard.png) <br><br>



## Used Links
- [Prepare an application for Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/tutorial-kubernetes-prepare-app)
- [Deploy an Azure Kubernetes Service (AKS) cluster using Azure CLI](https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-cli)
- [Deploy an Azure Kubernetes Service (AKS) cluster mysql wordpress](https://kubernetes.io/docs/tutorials/stateful-application/mysql-wordpress-persistent-volume/)


