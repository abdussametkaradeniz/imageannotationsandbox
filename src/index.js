import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactImageAnnotate from "react-image-annotate";
import "typeface-roboto";

function App() {
  /* function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|jpg)$/)); */

  /*  const [pageSize, setPageSize] = useState({
     width: window.innerWidth,
     height: window.innerHeight
   });
 
   const onResize = () => {
     setPageSize({ width: window.innerWidth, height: window.innerHeight });
   };
 
  useEffect(() => {
     window.addEventListener('resize', onResize);
     return () => window.removeEventListener('resize', onResize);
   }, []);
 
   const onSelect = selectedId => console.log(selectedId);
   const onChange = data => console.log(data);
    */

  //https://deephisthistologyimages.s3.eu-central-1.amazonaws.com/1_1_3_22_2022%203:18:13%20PM_52ba4.jpeg?X-Amz-Expires=86400&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MFYW7W6ODUTBQEZ/20220509/eu-central-1/s3/aws4_request&X-Amz-Date=20220509T020820Z&X-Amz-SignedHeaders=host&X-Amz-Signature=6bb8a7dcb53c5d9f6e80f8e7c72c12c7fe2f7155772fd4792519ca25e605e6bc

  /* const images = [
    "https://deephisthistologyimages.s3.eu-central-1.amazonaws.com/1_1_3_22_2022%203:18:13%20PM_52ba4.jpeg?X-Amz-Expires=86400&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MFYW7W6ODUTBQEZ/20220509/eu-central-1/s3/aws4_request&X-Amz-Date=20220509T020820Z&X-Amz-SignedHeaders=host&X-Amz-Signature=6bb8a7dcb53c5d9f6e80f8e7c72c12c7fe2f7155772fd4792519ca25e605e6bc",
    "https://deephisthistologyimages.s3.eu-central-1.amazonaws.com/1_1_3_22_2022%203:18:10%20PM_073a8.jpeg?X-Amz-Expires=86400&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MFYW7W6ODUTBQEZ/20220509/eu-central-1/s3/aws4_request&X-Amz-Date=20220509T015618Z&X-Amz-SignedHeaders=host&X-Amz-Signature=cd1e5d47c23404c330d7c4b715f7addb7dc56919c546988fcd885dddb3f1c4f6",
    "https://deephisthistologyimages.s3.eu-central-1.amazonaws.com/1_1016_3_22_2022%203:45:53%20PM_0d224.jpeg?X-Amz-Expires=86400&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MFYW7W6ODUTBQEZ/20220509/eu-central-1/s3/aws4_request&X-Amz-Date=20220509T023804Z&X-Amz-SignedHeaders=host&X-Amz-Signature=ebb8e156e019bcbebd2710ef9dd69815c307aca1831b87869f038a4c4b066760"

      {
       linklists.map((e)=>{
       return(
         <linksAmazonImages />
       )
     })} 
  ] */

  /*  const [Hataalert,setErrorAlert] = React.useState(null);
  const [successAlert,setSuccessAlert] = React.useState(null);

  setErrorAlert(msg,type){
    
  }
 */

  const [regions, setRegions] = React.useState([
    {
      type: "point",
      x: 0.4449648711943794,
      y: 0.28454332552693207,
      highlighted: false,
      editingLabels: false,
      color: "#2196f3",
      id: "16818003531806203",
      cls: "Cat"
    },
    {
      type: "box",
      x: 0.21702838063439064,
      y: 0.4332220367278798,
      w: 0.6210350584307178,
      h: 0.29716193656093487,
      highlighted: true,
      editingLabels: false,
      color: "#2196f3",
      cls: "Cat",
      id: "3946565967728637"
    }
  ]);
  return (
    <div className="App">
      <ReactImageAnnotate
        labelImages
        images={[
          {
            src:
              "https://deephisthistologyimages.s3.eu-central-1.amazonaws.com/1_1_3_22_2022%203:18:13%20PM_52ba4.jpeg?X-Amz-Expires=86400&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MFYW7W6ODUTBQEZ/20220512/eu-central-1/s3/aws4_request&X-Amz-Date=20220512T173816Z&X-Amz-SignedHeaders=host&X-Amz-Signature=85a4e1ee7b53ce5cda522eba4e60e58358bb731bcb26e4272322a62a1e275466",
            name: "image1",
            regions: regions
          },
          {
            src:
              "https://deephisthistologyimages.s3.eu-central-1.amazonaws.com/1_1_3_22_2022%203:18:13%20PM_52ba4.jpeg?X-Amz-Expires=86400&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MFYW7W6ODUTBQEZ/20220512/eu-central-1/s3/aws4_request&X-Amz-Date=20220512T173816Z&X-Amz-SignedHeaders=host&X-Amz-Signature=85a4e1ee7b53ce5cda522eba4e60e58358bb731bcb26e4272322a62a1e275466",
            name: "image2",
            regions: []
          },
          {
            src:
              "https://deephisthistologyimages.s3.eu-central-1.amazonaws.com/1_1_3_22_2022%203:18:13%20PM_52ba4.jpeg?X-Amz-Expires=86400&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MFYW7W6ODUTBQEZ/20220512/eu-central-1/s3/aws4_request&X-Amz-Date=20220512T173816Z&X-Amz-SignedHeaders=host&X-Amz-Signature=85a4e1ee7b53ce5cda522eba4e60e58358bb731bcb26e4272322a62a1e275466",
            name: "image3",
            regions: []
          }
        ]}
        regionClsList={["Dog", "Cat"]}
        allowComments={true}
        onExit={(data) => {
          for (let i in data.images) {
            if (data.images[i].regions.length !== 0) {
              console.log("data " + i, JSON.stringify(data.images[i]));
            }
          }
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
