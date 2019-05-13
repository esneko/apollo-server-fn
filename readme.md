# Apollo 19

> https://apollo-server-fn.azurewebsites.net/graphql?code=kOyQXLcbwLreCJkjRi9HB1qMZi6XwsK0xLhyu8gU/PBZPMHdh2XjYQ==

`Apollo Server` backend exposed as an `Azure Functions` serverless (no subscriptions!)

## Usage

```bash
yarn
yarn start
```

## Deployment

```bash
yarn build
func azure functionapp publish apollo-server-fn --publish-local-settings --nozip
```

## Provision

```bash
az group create --name react-native-offline-poc --location westeurope

az storage account create --name apollo19 --location westeurope --resource-group react-native-offline-poc --sku Standard_LRS

az functionapp create --resource-group react-native-offline-poc --name apollo-server-fn --consumption-plan-location westeurope --runtime node --storage-account apollo19

func azure functionapp publish apollo-server-fn
```
