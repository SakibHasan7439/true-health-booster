import { del, get, newPost, post } from "./api";

export const fetchHomeSlider = (data) => get("/sliders", data)
export const fetchHomeFeaturedCategory = (data) => get("/featured-categories", data)
export const fetchSectionProducts = (data) => get("/section-products", data)
export const fetchSectionBanner = (data) => get("/banner", data)
export const fetchSectionPromoVideo = (data) => get("/promo-video", data)