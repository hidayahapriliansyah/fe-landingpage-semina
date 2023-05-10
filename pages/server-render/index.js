export default function Page({ data }) {
  console.log(data);

  return (
    <div>Hello Data</div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://http://localhost:9000/cms/categories`);
  // const data = await res.json();

  // Pass data to the page via props
  // mereturn props yang akan langsung diterima oleh function component di file yang sama 
  // kalau props isi nya objek bernama data
  // maka function component dapat memasukkan props { data } ke sebagai argumen function
  return {
    props: {
      data: [{
        id: 1,
        name: 'Adi',
      },
      {
        id: 2,
        name: 'Hidayah',
      }],
    },
  };
};
