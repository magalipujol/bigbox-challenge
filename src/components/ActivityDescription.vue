<template>
   <div class="container">
            <button type="button" class="btn btn-light btn-back">&lt;-</button>
            <div class="row">
                <div class="col">
                    <img height="150" width="150" src="https://static.bigbox.com.ar/uploads/activity/7d70d0e1-50a7-4395-ad5f-ed3a7a723f2f.jpg" alt="">
                </div>
                <div class="col">
                    <p class="fs-1 activity-description-title">1 player Start!</p>
                    <p class="fs-5 activity-description-description">Una hora de juego ilimitado en tus fichines favoritos en Bar el Destello, con una cerveza y sándwich a elección</p>
                    <p class="fs-5 activity-description-participants">Para 2 personas</p>
                    <p class="fs-5 activity-description-location">CABA</p>
                    <p class="fs-5 activity-description-points">2990 puntos</p>
                </div>
            </div>
            <p class="fs-1">¿Qué incluye?</p>
            <ul class="incluido">
                <li class="fs-5">Un pase libre de 1 hora en Bar el Destello, para jugar a tus fichines retro favoritos. </li>
                <li class="fs-5">Una cerveza, sidra o vermut y sandwich a elección</li>
            </ul>
            <p class="fs-5">
                ay 14 arcades y un flipper en sus muebles originales. Para saber si todavía sos tan bueno como crees en el Tetris, o para terminar de una vez por todas el Wonderboy
            </p>
            <p class="fs-1">Reglas</p>
            <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam soluta voluptatum sapiente maxime autem animi repellendus eveniet, velit aperiam, dolorem numquam unde!</p>
        </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    activity: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  background-color: #e5e5e5;
}

.card-title,
.card-text {
  font-family: Quicksand;
  font-style: normal;
  color: #464646;
}

.card-text {
  font-weight: 400;
  size: 14px;
  line-height: 17.5px;
  text-align: left;
}

.card-title, .activity-participants {
  font-weight: 700;
  size: 18px;
  line-height: 22.5px;
  text-align: left;
}

.container {
  padding: 0;
}

.activity-participants {
  text-align: right;
}

.activity-points {
  font-weight: 600;
  size: 18px;
  line-height: 22.5px;
}

.activity-location {
  color: #000;
}

.place-icon {
  color: #FF6C5E;
}

.card {
  padding: 10px;
  border: none;
}
</style>
