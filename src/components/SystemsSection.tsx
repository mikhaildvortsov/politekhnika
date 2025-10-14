import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';

const SystemsSection: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <section id="systems" className="text-white pt-8 pb-16 relative mx-6 sm:mx-12 lg:mx-16 rounded-3xl" style={{
        background: 'linear-gradient(90deg, rgba(42, 155, 119, 1) 0%, rgba(111, 199, 87, 1) 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <AnimatedElement animationType="fade-up" delay={100}>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Системы автополива</h2>
            <p className="text-lg md:text-xl text-green-100">
              Профессиональные решения для любых объектов
            </p>
          </div>
        </AnimatedElement>
        
        {/* Three Photos Block */}
        <AnimatedElement animationType="scale" delay={200}>
          <div className="bg-white rounded-3xl p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Дом */}
            <Link to="/home-irrigation" className="text-center group cursor-pointer">
              <div className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-lg h-48 md:h-64 mb-4 md:mb-6 flex items-center justify-center overflow-hidden transition-all duration-500 ease-out group-hover:shadow-xl">
                <img 
                  src="/images/photos/house.jpg" 
                  alt="Системы автополива для домов" 
                  className="w-full h-full object-cover rounded-lg transition-all duration-700 ease-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 ease-out rounded-lg"></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 transition-colors duration-300 ease-out group-hover:text-polyteknika-green">Системы автополива для частных домов</h3>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 transition-colors duration-300 ease-out group-hover:text-gray-700">
                Защитите ваш газон знойным Волгоградским летом, по самой доступной цене в Волгограде и области. 
                Узнайте примерную стоимость установки систем автополива, а также посмотрите последние работы из нашего портфолио.
              </p>
            </Link>
            
            {/* Бизнес */}
            <Link to="/business-irrigation" className="text-center group cursor-pointer">
              <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg h-64 mb-6 flex items-center justify-center overflow-hidden transition-all duration-500 ease-out group-hover:shadow-xl">
                <img 
                  src="/images/photos/business.jpg" 
                  alt="Системы автополива для бизнеса" 
                  className="w-full h-full object-cover rounded-lg transition-all duration-700 ease-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 ease-out rounded-lg"></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 transition-colors duration-300 ease-out group-hover:text-polyteknika-green">Системы автополива для домов отдыха и офисных зданий</h3>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 transition-colors duration-300 ease-out group-hover:text-gray-700">
                Сделаем ваш фасад самым зеленым и запоминающимся в Волгограде. 
                Профессиональный подход к озеленению коммерческих объектов с гарантией качества и долговечности.
              </p>
            </Link>
            
            {/* Парки и скверы */}
            <Link to="/parks-irrigation" className="text-center group cursor-pointer">
              <div className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-lg h-48 md:h-64 mb-4 md:mb-6 flex items-center justify-center overflow-hidden transition-all duration-500 ease-out group-hover:shadow-xl">
                <img 
                  src="/images/photos/park.jpg" 
                  alt="Системы автополива для парков и скверов" 
                  className="w-full h-full object-cover rounded-lg transition-all duration-700 ease-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 ease-out rounded-lg"></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 transition-colors duration-300 ease-out group-hover:text-polyteknika-green">Системы автополива для парков и скверов</h3>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 transition-colors duration-300 ease-out group-hover:text-gray-700">
                Мы выполняли такие проекты как установка системы капельного полива в парке Сокольники, г. Москва, 
                установка системы автоматического полива на учебной базе академии МВД, г. Волгоград, 
                санаторий Министерства Обороны, Крым и другие.
              </p>
            </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>
      
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden rounded-b-3xl">
          <svg 
            className="relative block w-full h-10" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 40" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,40 C2.08,39.5 4.17,38.5 8.33,36.5 C10.42,35.5 12.5,36.5 16.67,38.5 C18.75,39 20.83,39.5 25,40 C27.08,39.5 29.17,39 33.33,38 C35.42,37 37.5,36 41.67,35 C43.75,34 45.83,35 50,36 C52.08,37 54.17,38 58.33,39 C60.42,39.5 62.5,39.5 66.67,39 C68.75,38 70.83,37 75,36 C77.08,35 79.17,34 83.33,35 C85.42,36 87.5,37 91.67,38 C93.75,39 95.83,39.5 100,40 C102.08,39.5 104.17,39 108.33,38 C110.42,37 112.5,36 116.67,35 C118.75,34 120.83,35 125,36 C127.08,37 129.17,38 133.33,39 C135.42,39.5 137.5,39.5 141.67,39 C143.75,38 145.83,37 150,36 C152.08,35 154.17,34 158.33,35 C160.42,36 162.5,37 166.67,38 C168.75,39 170.83,39.5 175,40 C177.08,39.5 179.17,39 183.33,38 C185.42,37 187.5,36 191.67,35 C193.75,34 195.83,35 200,36 C202.08,37 204.17,38 208.33,39 C210.42,39.5 212.5,39.5 216.67,39 C218.75,38 220.83,37 225,36 C227.08,35 229.17,34 233.33,35 C235.42,36 237.5,37 241.67,38 C243.75,39 245.83,39.5 250,40 C252.08,39.5 254.17,39 258.33,38 C260.42,37 262.5,36 266.67,35 C268.75,34 270.83,35 275,36 C277.08,37 279.17,38 283.33,39 C285.42,39.5 287.5,39.5 291.67,39 C293.75,38 295.83,37 300,36 C302.08,35 304.17,34 308.33,35 C310.42,36 312.5,37 316.67,38 C318.75,39 320.83,39.5 325,40 C327.08,39.5 329.17,39 333.33,38 C335.42,37 337.5,36 341.67,35 C343.75,34 345.83,35 350,36 C352.08,37 354.17,38 358.33,39 C360.42,39.5 362.5,39.5 366.67,39 C368.75,38 370.83,37 375,36 C377.08,35 379.17,34 383.33,35 C385.42,36 387.5,37 391.67,38 C393.75,39 395.83,39.5 400,40 C402.08,39.5 404.17,39 408.33,38 C410.42,37 412.5,36 416.67,35 C418.75,34 420.83,35 425,36 C427.08,37 429.17,38 433.33,39 C435.42,39.5 437.5,39.5 441.67,39 C443.75,38 445.83,37 450,36 C452.08,35 454.17,34 458.33,35 C460.42,36 462.5,37 466.67,38 C468.75,39 470.83,39.5 475,40 C477.08,39.5 479.17,39 483.33,38 C485.42,37 487.5,36 491.67,35 C493.75,34 495.83,35 500,36 C502.08,37 504.17,38 508.33,39 C510.42,39.5 512.5,39.5 516.67,39 C518.75,38 520.83,37 525,36 C527.08,35 529.17,34 533.33,35 C535.42,36 537.5,37 541.67,38 C543.75,39 545.83,39.5 550,40 C552.08,39.5 554.17,39 558.33,38 C560.42,37 562.5,36 566.67,35 C568.75,34 570.83,35 575,36 C577.08,37 579.17,38 583.33,39 C585.42,39.5 587.5,39.5 591.67,39 C593.75,38 595.83,37 600,36 C602.08,35 604.17,34 608.33,35 C610.42,36 612.5,37 616.67,38 C618.75,39 620.83,39.5 625,40 C627.08,39.5 629.17,39 633.33,38 C635.42,37 637.5,36 641.67,35 C643.75,34 645.83,35 650,36 C652.08,37 654.17,38 658.33,39 C660.42,39.5 662.5,39.5 666.67,39 C668.75,38 670.83,37 675,36 C677.08,35 679.17,34 683.33,35 C685.42,36 687.5,37 691.67,38 C693.75,39 695.83,39.5 700,40 C702.08,39.5 704.17,39 708.33,38 C710.42,37 712.5,36 716.67,35 C718.75,34 720.83,35 725,36 C727.08,37 729.17,38 733.33,39 C735.42,39.5 737.5,39.5 741.67,39 C743.75,38 745.83,37 750,36 C752.08,35 754.17,34 758.33,35 C760.42,36 762.5,37 766.67,38 C768.75,39 770.83,39.5 775,40 C777.08,39.5 779.17,39 783.33,38 C785.42,37 787.5,36 791.67,35 C793.75,34 795.83,35 800,36 C802.08,37 804.17,38 808.33,39 C810.42,39.5 812.5,39.5 816.67,39 C818.75,38 820.83,37 825,36 C827.08,35 829.17,34 833.33,35 C835.42,36 837.5,37 841.67,38 C843.75,39 845.83,39.5 850,40 C852.08,39.5 854.17,39 858.33,38 C860.42,37 862.5,36 866.67,35 C868.75,34 870.83,35 875,36 C877.08,37 879.17,38 883.33,39 C885.42,39.5 887.5,39.5 891.67,39 C893.75,38 895.83,37 900,36 C902.08,35 904.17,34 908.33,35 C910.42,36 912.5,37 916.67,38 C918.75,39 920.83,39.5 925,40 C927.08,39.5 929.17,39 933.33,38 C935.42,37 937.5,36 941.67,35 C943.75,34 945.83,35 950,36 C952.08,37 954.17,38 958.33,39 C960.42,39.5 962.5,39.5 966.67,39 C968.75,38 970.83,37 975,36 C977.08,35 979.17,34 983.33,35 C985.42,36 987.5,37 991.67,38 C993.75,39 995.83,39.5 1000,40 C1002.08,39.5 1004.17,39 1008.33,38 C1010.42,37 1012.5,36 1016.67,35 C1018.75,34 1020.83,35 1025,36 C1027.08,37 1029.17,38 1033.33,39 C1035.42,39.5 1037.5,39.5 1041.67,39 C1043.75,38 1045.83,37 1050,36 C1052.08,35 1054.17,34 1058.33,35 C1060.42,36 1062.5,37 1066.67,38 C1068.75,39 1070.83,39.5 1075,40 C1077.08,39.5 1079.17,39 1083.33,38 C1085.42,37 1087.5,36 1091.67,35 C1093.75,34 1095.83,35 1100,36 C1102.08,37 1104.17,38 1108.33,39 C1110.42,39.5 1112.5,39.5 1116.67,39 C1118.75,38 1120.83,37 1125,36 C1127.08,35 1129.17,34 1133.33,35 C1135.42,36 1137.5,37 1141.67,38 C1143.75,39 1145.83,39.5 1150,40 C1152.08,39.5 1154.17,39 1158.33,38 C1160.42,37 1162.5,36 1166.67,35 C1168.75,34 1170.83,35 1175,36 C1177.08,37 1179.17,38 1183.33,39 C1185.42,39.5 1187.5,39.5 1191.67,39 C1193.75,38 1195.83,37 1200,36 L1200,40 L0,40 Z" 
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default SystemsSection;
