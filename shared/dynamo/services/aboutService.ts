import { ScanCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "../connect";

const TABLE_NAME = "tb-about";

export const getDynamoAbouts = async () => {
  const command = new ScanCommand({
    TableName: TABLE_NAME,
  });

  const response = await docClient.send(command);
  return response.Items || [];
};

export const createDynamoAbout = async (aboutData: any) => {
  const command = new PutCommand({
    TableName: TABLE_NAME,
    Item: aboutData,
  });

  await docClient.send(command);
};
