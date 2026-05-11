import os
from openai import OpenAI

client = OpenAI(
    base_url='https://ark.cn-beijing.volces.com/api/v3',
    api_key=os.getenv('ARK_API_KEY'),
)

response = client.responses.create(
    model="doubao-seed-2-0-pro-260215",
    input="你好吗？", # Replace with your prompt
    extra_body={
         "thinking": {"type": "disabled"}, #  Manually disable deep thinking
    },
)

print(response.output[0].content[0].text)