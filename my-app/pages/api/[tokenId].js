export default function handler(req, res) {
  // get the tokenId from the query params
  const tokenId = req.query.tokenId;
  // As all the images are uploaded on github, we can extract the images from github directly.
  const image_url =
    "https://gateway.pinata.cloud/ipfs/QmdRAAT8kHTVvxxPb4bU3eKft7KuKqK61U68P2CLARJhVU";
  // The api is sending back metadata for a Crypto Dev
  // To make our collection compatible with Opensea, we need to follow some Metadata standards
  // when sending back the response from the api
  // More info can be found here: https://docs.opensea.io/docs/metadata-standards
  res.status(200).json({
    "attributes": [
      {
        "trait_type": "Location",
        "value": "Dessert"
      },
      {
        "trait_type": "Mood",
        "value": "Sad boi"
      }
    ],
    "description": "stars in the sky",
    "image": "https://gateway.pinata.cloud/ipfs/QmdRAAT8kHTVvxxPb4bU3eKft7KuKqK61U68P2CLARJhVU",
    "name": "ARIZONA"
  });
}
