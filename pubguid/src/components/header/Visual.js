import React,{Component} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import MainImg01 from '../../assets/img/main04.jpg';
import MainImg02 from '../../assets/img/main01.jpg';
import MainImg03 from '../../assets/img/main02.jpg';
import MainImg04 from '../../assets/img/main03.jpg';
import './Visual.scss';
SwiperCore.use([Navigation, Pagination])

class Visul extends Component {
  render() { 
    return (
     
      <div className="slider__wrap">
        <div className="slide__text">
            <p className="txt1">React와의 만남</p>
            <p className="txt2">그리고 JAVASCRIPT</p>
        </div>
      <Swiper
        className="banner"        
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 100 }}	// 추가
      >
        <SwiperSlide><img src={ MainImg01} alt="" /></SwiperSlide>
        <SwiperSlide><img src={ MainImg02} alt="" /></SwiperSlide>
        <SwiperSlide><img src={ MainImg03} alt="" /></SwiperSlide>
        <SwiperSlide><img src={ MainImg04} alt="" /></SwiperSlide>
        
      </Swiper>
    </div>  

    )  
  }
}
export default Visul;