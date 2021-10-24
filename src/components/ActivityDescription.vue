<template>
  <!-- TODO mover el titulo, descripcion y las 3 cosas que le siguen al mismo container que la foto
lo demas que quede en otro container -->
  <div class="container">
    <div class="container left">
      <router-link to="/actividades" tag="button">
        <button type="button" class="btn btn-light btn-back">
          <span class="material-icons"> arrow_back </span>
        </button>
      </router-link>
    </div>
    <div class="row">
      <div class="col">
        <img
          width="563"
          height="371" style="border-radius: 15px"
          src="https://static.bigbox.com.ar/uploads/activity/7d70d0e1-50a7-4395-ad5f-ed3a7a723f2f.jpg"
          alt=""
        />
        <p class="fs-1 activity-text activity-subtitle">¿Qué incluye?</p>
        <hr />
        <ul class="incluido">
          <li class="fs-5 activity-text activity-light">
            Un pase libre de 1 hora en Bar el Destello, para jugar a tus
            fichines retro favoritos.
          </li>
          <li class="fs-5 activity-text activity-light">
            Una cerveza, sidra o vermut y sandwich a elección
          </li>
        </ul>
        <p class="fs-5 activity-text activity-light">
          Hay 14 arcades y un flipper en sus muebles originales. Para saber si
          todavía sos tan bueno como crees en el Tetris, o para terminar de una
          vez por todas el Wonderboy
        </p>
        <p class="fs-1 activity-text activity-subtitle">
          <span class="material-icons-outlined"> description </span>Reglas:
        </p>
        <p class="fs-5 activity-text activity-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam soluta
          voluptatum sapiente maxime autem animi repellendus eveniet, velit
          aperiam, dolorem numquam unde!
        </p>
      </div>
      <div class="col activity-text">
        <p class="fs-1 activity-title activity-text activity-title">
          1 player Start!
        </p>
        <p class="fs-5 activity-description activity-text">
          Una hora de juego ilimitado en tus fichines favoritos en Bar el
          Destello, con una cerveza y sándwich a elección
        </p>
        <p class="fs-5 activity-participants activity-text">
          <span class="material-icons-outlined"> person_outline </span> Para 2
          personas
        </p>
        <p class="fs-5 activity-location activity-text">
          <span class="material-icons-outlined place-icon"> place </span>CABA
        </p>
        <p class="fs-5 activity-points activity-text activity-points">
          2990 puntos
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ActivityDescription',
  props: {
    activity: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.activity-text {
  font-family: Quicksand;
  font-style: normal;
  color: #464646;
  text-align: left;
  font-weight: 400;
  size: 16px;
}

.container {
  padding: 0;
}

.activity-points {
  font-weight: 400;
  size: 24px;
  line-height: 30px;
}

.activity-subtitle {
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -1px;
  margin-top: 40px;
}

.activity-location {
  color: #000;
}

.btn-back {
  border: none;
  padding: 7px;
  background: none;
}

.left {
  text-align: left;
}

.activity-light {
  font-weight: 300;
  size: 18px;
  line-height: 22.5px;
}

.activity-title {
  font-weight: 700;
  size: 30px;
  line-height: 37.5px;
  letter-spacing: -1px;
  text-align: left;
}
</style>
