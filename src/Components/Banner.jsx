const Banner = () => {
    return ( 
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class=" carousal carousel-item active">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/Survey/R01_Spkrs_Survey_1500x300.jpg" class="d-block w-100 h-50" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/G/31/img21/audio/boat/priceupdated/1500x300-SN._CB630001822_.gif" class="d-block w-100 h-50" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Sabeer/TVCLP_BAU/Mi_1500x300_3.jpg" class="d-block w-100 h-50" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div>
   <div>
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Unrec/D62631965_IN-CEPC_UnrecPage_BAU_1500.jpg" alt="" className="w-100"/>
   </div>
</div>
        </div>
     );
}
 
export default Banner;