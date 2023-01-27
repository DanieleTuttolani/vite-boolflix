import { reactive } from "vue";

export const store = reactive({
  movieList: [],
  seriesList: [],
  resultTxtValue: "",
  ImgBaseLink: "https://image.tmdb.org/t/p/w342",
});
