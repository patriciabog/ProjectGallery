 import cover from "../images/cover.jpeg";

 import Card from "./Card";

 function Preview ({data}) {
    return ( 
        <section className='preview'>
          <img className='image' src={data.photo || cover} alt='' />

          {/*   Card -  Almu */}
          <Card
          data={data}
          />
        </section>
    );
 };

 export default Preview;