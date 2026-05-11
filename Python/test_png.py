import os
from openai import OpenAI

client = OpenAI(     
    base_url="https://ark.cn-beijing.volces.com/api/v3", # The base URL for model invocation    
    api_key=os.getenv('ARK_API_KEY'),  # Get API Key：https://console.volcengine.com/ark/region:ark+cn-beijing/apikey
) 
 
imagesResponse = client.images.generate( 
    # Replace with Model ID
    model="doubao-seedream-5-0-260128",
    prompt="我在海边看日落，画面温暖，充满诗意，高清晰度，PNG格式，无水印",
    size="2K",
    response_format="url",
    extra_body={
        "watermark": False,
    },
) 
 
print(imagesResponse.data[0].url)