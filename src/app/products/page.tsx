"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

interface Product {
  id: string;
  title: string;
  image: string;
  link: string;
  category: string;
}

interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  products: Product[];
}

const ProductSectionInner: React.FC = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const BASE_CDN = "https://shopcdnpro.grainajz.com/category/61476/2176/";
  const ALI_CDN = "https://sc04.alicdn.com/kf/";

  const getPagination = (current: number, total: number) => {
    const pages: (number | string)[] = [];

    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - 1 && i <= current + 2)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
  };

  const categories: ProductCategory[] = [
    {
      id: "all",
      name: "ALL PRODUCTS",
      slug: "all",
      products: [],
    },

    // ─────────────────────────────────────────────
    // EV CHARGING STATIONS
    // ─────────────────────────────────────────────
    {
      id: "ev-charging",
      name: "EV Charging Stations",
      slug: "ev-charging-stations",
      products: [
        // ── Page 1 ──

        {
          id: "ev-p1-10",
          title: "DC Electric Vehicle Charging 60kW to 400kW",
          image: `/images/products/p10.jpg`,
          link: "/dc-electric-vehicle-charging-60kw-to-400kw",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p1-11",
          title: "DC Electric Vehicle Charging 60kW to 400kW",
          image: `/images/products/p11.jpg`,
          link: "/wle1213-dc240kw",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p1-12",
          title: "DC Electric Vehicle Charging 60kW to 400kW",
          image: `/images/products/p12.jpg`,
          link: "/dc-electric-vehicle-charging-60kw-to-400kw906",
          category: "EV Charging Stations",
        },

        // ── Page 2 ──
        {
          id: "ev-p2-1",
          title: "DC Electric Vehicle Charging 60kW to 400kW",
          image: `/images/products/p13.jpeg`,
          link: "/dc-electric-vehicle-charging-60kw-to-400kw536",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p2-2",
          title: "DC Electric Vehicle Charging 60kW to 400kW",
          image: `/images/products/p14.jpg`,
          link: "/ev-dc-charging-station-60kwto-400kw",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p2-3",
          title: "DC Electric Vehicle Charging 60kW to 400kW",
          image: `/images/products/p15.jpg`,
          link: "/dc-electric-vehicle-charging-60kw-to-400kw212",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p2-4",
          title: "AD Screen DC Electric Vehicle Charging Station 60kW to 360kW",
          image: `/images/products/p16.jpg`,
          link: "/wle1214-dc120kw",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p2-5",
          title: "AD Screen DC Electric Vehicle Charging Station 60kW to 360kW",
          image: `/images/products/p17.jpg`,
          link: "/ad-screen-dc-electric-vehicle-charging-station-60kw-to-360kw",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p2-6",
          title: "AD Screen DC EV Charging Station 60kW to 360kW",
          image: `/images/products/p18.jpg`,
          link: "/wle1214-dc360kw",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p1-1",
          title: "DC Charging Station 30kW to 40kW",
          image: `/images/products/p1.jpg`,
          link: "/dc-charging-station-30kw-to-40kw",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p1-2",
          title: "DC Charging Station 30kW to 40kW",
          image: `/images/products/p2.jpg`,
          link: "/dc-charging-station-30kw-to-40kw608",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p1-3",
          title: "DC Charging Station 30kW to 40kW",
          image: `/images/products/p3.jpg`,
          link: "/dc-charging-station-30kw-to-40kw935",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p1-4",
          title: "EV DC Charging Station 30kW to 60kW",
          image: `/images/products/p4.jpg`,
          link: "/wle1112-dc30kw",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p1-5",
          title:
            "Home Commercial Use OCPP1.6J RFID Card IP54 DC Car EV Charging Station 20kW to 60kW",
          image: `/images/products/p5.jpg`,
          link: "/home-commercila-use-ocpp16j-rfid-card-ip54-dc-ev-charging-station-20kw-to-60kw",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p1-6",
          title: "EV DC Charging Station 30kW to 60kW",
          image: `/images/products/p6.jpg`,
          link: "/wle1112-dc20kw",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p1-7",
          title: "Without Screen DC Electric Charging Station 120kW",
          image: `/images/products/p7.jpg`,
          link: "/without-screen-dc-electric-charging-station-120kw",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p1-8",
          title: "Without Screen DC Electric Charging Station 120kW",
          image: `/images/products/p8.jpg`,
          link: "/without-screen-dc-electric-charging-station-120kw691",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p1-9",
          title: "Without Screen DC Electric Charging Station 120kW",
          image: `/images/products/p9.jpg`,
          link: "/without-screen-dc-electric-charging-station-120kw855",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p2-7",
          title: "Low Noise DC Electric Charging Station 120kW",
          image: `/images/products/p19.jpg`,
          link: "/low-noise-dc-electric-charging-station-120kw",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p2-8",
          title: "Low Noise DC Electric Charging Station 120kW",
          image: `/images/products/p20.jpg`,
          link: "/low-noise-dc-electric-charging-station-120kw891",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p2-9",
          title: "Low Noise DC Electric Charging Station 120kW",
          image: `/images/products/p21.jpg`,
          link: "/low-noise-dc-electric-charging-station-120kw642",
          category: "EV Charging Stations",
        },

        // ── Page 3 ──
        {
          id: "ev-p3-1",
          title: "Flexible Splitting Power Station 240kW to 960kW",
          image: `/images/products/p22.jpg`,
          link: "/flexible-splitting-power-station-240kw-to-960kw624",
          category: "EV Charging Stations",
        },

        // ── Page 4 (Alibaba product listing) ──
        {
          id: "ev-p4-1",
          title:
            "Customizable 30KW DC Electric Vehicle Charger Wall-Mounted Charging Station (GB/T, CCS2, CHAdeMO)",
          image: `/images/products/p23.jpg`,
          link: "/product-customizable-30kw-dc-electric-vehicle-charger-wall-mounted-charging-station-for-gb/t-ccs2-electric-cars-byd-ev-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p4-2",
          title:
            "2024 Wallbox DC EV Charger 20kW 30kW 40kW — CCS2, GBT, CHAdeMO Commercial DC Charging Station",
          image: `/images/products/p24.jpg`,
          link: "/product-2024-wallbox-dc-ev-charger-manufacturers-20kw-30kw-40kw-rate-power-ccs2-gbt-ccs-chademo-commerical-dc-charging-station",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p4-3",
          title:
            "Advertising Screen 240KW DC Super Fast Charger — CCS2, GB/T, CHAdeMO EV Charging Solution",
          image: `/images/products/p25.jpg`,
          link: "/product-advertising-screen-240kw-dc-super-fast-charger-for-parking-lot-ev-charging-station-ccs2-gb/t-chademo-ev-charging-solution",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p4-4",
          title:
            "240kW to 960kW Large-Scale Commercial EV Charging Station — Split DC Fast Charging System",
          image: `/images/products/p26.jpg`,
          link: "/product-240kw-to-960kw-large-scale-commercial-ev-charging-station-new-split-dc-fast-charging-system-for-ev-charging-unit",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p4-5",
          title:
            "Commercial CE IP54 CCS CHAdeMO OCPP1.6J Multi Standard 90kW 120kW DC EV Charger",
          image: `/images/products/p27.jpg`,
          link: "/product-commercial-public-ce-ip54-ccs-chademo-ocpp16j-multi-standard-90kw-120kw-dc-ev-charger-for-dc-fast-charging-station",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p4-6",
          title:
            "60kW CCS2 / 120kW GB/T CHAdeMO Commercial Outdoor DC Fast EV Charger Station Floor-Mounted",
          image: `/images/products/p28.jpg`,
          link: "/product-60kw-ccs2-120kw-gb/t-chademo-commercial-ev-charging-unit-outdoor-dc-fast-ev-charger-station-floor-mounted-charging-stations",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p4-7",
          title:
            "ev 60kW DC Fast EV Charging Station Dual Unit — CCS2 & GB/T Connector",
          image: `/images/products/p29.jpg`,
          link: "/product-ev-60kw-dc-fast-ev-charging-station-dual-unit-with-ccs2--gb/t-connector-for-efficient-charging-solution",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p4-8",
          title:
            "New 60kW CCS2 / 120kW GB/T CHAdeMO Commercial Outdoor DC Fast EV Charger",
          image: `/images/products/p30.jpg`,
          link: "/product-new-60kw-ccs2-gb/t-chademo-commercial-ev-charging-device-outdoor-dc-fast-ev-charger-120kw-gb/t-chademo-ev-charging-station",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p4-9",
          title:
            "DC EV Charger 20kW 30kW 40kW 60kW — CCS2, CHAdeMO, CE Certified Wall-Mounted Charging Station",
          image: `/images/products/p31.jpg`,
          link: "/product-dc-ev-charger-20kw-30kw-40kw-60kw-ccs2-chademo-interface-ce-certified-wall-mounted-charging-station-ev-charging-solution-factory",
          category: "EV Charging Stations",
        },

        {
          id: "ev-p5-1",
          title:
            "DC 380V EV Charging Station 20KW — CCS2/GB/T Single Connector OCPP 1.6J",
          image: `/images/products/p32.jpg`,
          link: "/product-dc-380v-ev-charging-station-20kw-commercial-charging-20kw-ccs2/gb/t-single-connector-ocpp-16j-protoco-ev-charging-pile",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p5-2",
          title:
            "120KW DC Fast EV Charging Station — CCS2 GB/T, POS Payment, OCPP1.6J",
          image: `/images/products/p33.jpg`,
          link: "/product-120kw-dc-fast-ev-charging-station-with-ccs2-gb/t-interface-new-pos-payment-system-ocpp16j-protocols-charging-solution-provider",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p5-3",
          title:
            "Level 3 Fast Charging Station CCS2 GB/T CHAdeMO 20kW 30kW 40kW Wall-Mounted DC EV Charger",
          image: `/images/products/p34.jpg`,
          link: "/product-factory-price-level-3-fast-charging-station-ccs2-g/bt-chademo-20kw-30kw-40kw-wall-mounted-dc-ev-charger-for-shopping-mall",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p5-4",
          title:
            "240KW DC Fast EV Charging Station Split-type — Power Stack + Charge Post",
          image: `/images/products/p35.jpg`,
          link: "/product-240kw-dc-fast-ev-charging-station-split-type-charging-system-power-stackcharge-post-automotive-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p5-5",
          title:
            "Commercial EV Fast Charging Station 120kW to 400kW CCS DC Charger Level 3",
          image: `/images/products/p36.jpg`,
          link: "/product-commercial-ev-fast-charging-station-120kw-to-400kw-ccs-dc-charger-level-3-electric-car-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p5-6",
          title:
            "CCS2 EV DC Car Charger 30kW 80kW 120kW 240kW — OCPP CE OEM Smart EV Charger",
          image: `/images/products/p37.jpg`,
          link: "/product-wl-ccs2-ev-charging-dc-car-charger-30kw-80kw-120kw-240kw-ev-dc-charger-ocpp-ce-oem-smart-ev-charger-electric-car-charging",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p5-7",
          title:
            "60–240kW Commercial DC EV Fast Charger — 120kW 180kW 240kW OCPP Charging Station",
          image: `/images/products/p38.jpg`,
          link: "/product-60-240kw-commercial-dc-ev-fast-120kw-240-kw-180kw-60kw-ev-charger-ocpp-charging-station",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p5-8",
          title:
            "DC EV Fast Charging Station CCS2 GB/T 80kW–240kW Dual Floor-Mounted EV Charger",
          image: `/images/products/p39.jpg`,
          link: "/product-dc-ev-fast-charging-station-ccs2-gb/t-80kw-240kw-dual-floor-mounted-ev-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p5-9",
          title:
            "Commercial 60kW to 120kW DC Fast EV Charger Station — CCS2, OCPP1.6J",
          image: `/images/products/p40.jpg`,
          link: "/product-commercial-60kw-to120kw-dc-fast-ev-charger-station-electric-car-ccs2-customization-ocpp16j-ev-dc-fast-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p5-10",
          title:
            "Commercial DC Fast Charging Pile 60kW 90kW 120kW 360kW 400kW Floor-Mounted Charging Station",
          image: `/images/products/p41.jpg`,
          link: "/product-commercial-new-energy-vehicle-electric-car-dc-fast-charging-pile-60kw-90kw-120kw-360kw-400kw--floor-mounted-charging-station",
          category: "EV Charging Stations",
        },

        // ── Page 6 ──
        {
          id: "ev-p6-1",
          title:
            "EV Charging Pile CCS GB/T Fast Charging Station IP54 Outdoor EV Charging Device",
          image: `/images/products/p42.jpg`,
          link: "/product-car-charger-ev-commercial-use-vehicle-charging-pile-ccs-gb/t-fast-charging-station-ip54-outdoor-ev-charging-device",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p6-2",
          title:
            "DC Fast EV Charger Station 60kW 120kW 160kW 180kW 240kW EV Charging",
          image: `/images/products/p43.jpg`,
          link: "/product-dc-fast-electric-vehicle-charging-station-ev-charger-station-60kw-240kw-ev-charger-station-120kw-160kw-180kw-ev-charging",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p6-3",
          title:
            "Innovative DC 120kW Fast Charger with Integrated Advertising Screen — CE Certified",
          image: `/images/products/p44.jpg`,
          link: "/product-innovative-dc-120kw-fast-charger-with-integrated-advertising-screen-charging--ce-certified-and-customizable-charging-solutions",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p6-4",
          title:
            "TUV CE EV Car Charger 400kW Credit Card POS Ev Charging Station 120kW",
          image: `/images/products/p45.jpg`,
          link: "/product-tuv-ce-electric-ev-car-charger-supplier-400kw-credit-card-pos-ev-charging-station-120kw-ev-charger537",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p6-5",
          title:
            "GBT DC Fast Charger Advertising Screen EV Charger — Commercial OCPP1.6",
          image: `/images/products/p46.jpg`,
          link: "/product-special-offer-gbt-dc-fast-charger--advertising-screen-ev-charger--commercial-ev-charging-station-ocpp16-ev-charger405",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p6-6",
          title:
            "20kW Columnar DC EV Charger — RFID Card, OCPP1.6J, IP55 DC Fast Charging Station",
          image: `/images/products/p47.jpg`,
          link: "/product-20kw-columnar-dc-ev-charger-manufacturer-rfid-card-with-ocpp16j-ip55--dc-fast-ev-charging-station835",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p6-7",
          title:
            "Columnar DC EV Charger RFID Card OCPP1.6J IP55 Ethernet DC Fast EV Charging Station",
          image: `/images/products/p48.jpg`,
          link: "/product-columnar-dc-ev-charger-manufacturer-rfid-card-with-ocpp16j-ip55-ethernet-dc-fast-ev-charging-station826",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p6-8",
          title:
            "ev DC 120kW Fast EV Charging Station CCS2 GB/T OCPP1.6J Commercial EV Charger",
          image: `/images/products/p49.jpg`,
          link: "/product-ev-dc120kw-fast-ev-charging-station-ccs2-gb/t-ocpp16j-protocols-commerical-ev-charger809",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p6-9",
          title:
            "400kW Credit Card POS EV Charging Station 120kW — TUV CE, OCPP1.6, IP55, 4G Ethernet",
          image: `/images/products/p50.jpg`,
          link: "/product-400kw-credit-card-pos-ev-charging-station-120kw-ev-charger-tuv-ce-electric-ocpp16-ip55--4g-ethernet-ev-car-charger945",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p6-10",
          title:
            "DC 120kW CCS2 GB/T Outdoor Waterproof DC Fast EV Charger 240kW EV Charging Piles",
          image: `/images/products/p51.jpg`,
          link: "/product-hot-selling-dc120kw-ccs2-gb/t-commercial-ev-charging-device-outdoor--waterproof-dc-fast-ev-charger-240kw-ev-charging-piles",
          category: "EV Charging Stations",
        },

        // ── Page 7 ──
        {
          id: "ev-p7-1",
          title:
            "New Commercial 4G Ethernet IP55 120KW DC Fast EV Charger Charging Station GB/T OCPP1.6",
          image: `/images/products/p52.jpg`,
          link: "/product-new-commercial-fast-4g-ethernet-ip55-120kw-dc-fast-electric-ev-charger-charging-station-gb/t-ocpp16-electric-vehicle",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p7-2",
          title:
            "TUV CE EV Car Charger 400kW Credit Card POS Charging Station 120kW",
          image: `/images/products/p53.jpg`,
          link: "/product-tuv-ce-electric-ev-car-charger-supplier-400kw-credit-card-pos-ev-charging-station-120kw-ev-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p7-3",
          title:
            "GBT DC Fast Charger with Advertising Screen — Commercial EV Charging Station OCPP1.6",
          image: `/images/products/p54.jpg`,
          link: "/product-special-offer-gbt-dc-fast-charger--advertising-screen-ev-charger--commercial-ev-charging-station-ocpp16-ev-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p7-4",
          title: "20kW Columnar DC EV Charger — RFID Card, OCPP1.6J, IP55",
          image: `/images/products/p55.jpg`,
          link: "/product-20kw-columnar-dc-ev-charger-manufacturer-rfid-card-with-ocpp16j-ip55--dc-fast-ev-charging-station",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p7-5",
          title:
            "Columnar DC EV Charger RFID Card OCPP1.6J IP55 Ethernet Fast EV Charging Station",
          image: `/images/products/p56.jpg`,
          link: "/product-columnar-dc-ev-charger-manufacturer-rfid-card-with-ocpp16j-ip55-ethernet-dc-fast-ev-charging-station",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p7-6",
          title:
            "ev DC 120kW Fast EV Charging Station CCS2 GB/T OCPP1.6J Commercial EV Charger",
          image: `/images/products/p57.jpg`,
          link: "/product-ev-dc120kw-fast-ev-charging-station-ccs2-gb/t-ocpp16j-protocols-commerical-ev-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p7-7",
          title:
            "400kW Credit Card POS EV Charging Station 120kW — TUV CE OCPP1.6 IP55 4G Ethernet",
          image: `/images/products/p58.jpg`,
          link: "/product-400kw-credit-card-pos-ev-charging-station-120kw-ev-charger-tuv-ce-electric-ocpp16-ip55--4g-ethernet-ev-car-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p7-8",
          title: "AC Electric Vehicle Charger Cabinet 14kW",
          image: `/images/products/p59.jpg`,
          link: "/ac-electric-vehicle-charger-cabinet-14kw652",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p7-9",
          title: "AC Electric Vehicle Charger Cabinet 14kW",
          image: `/images/products/p60.jpg`,
          link: "/ac-electric-vehicle-charger-cabinet-14kw429",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p7-10",
          title: "AC Electric Vehicle Charger Cabinet 14kW",
          image: `/images/products/p61.jpg`,
          link: "/ac-electric-vehicle-charger-cabinet-14kw",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p7-11",
          title: "AC Electric Vehicle Charger 7kW",
          image: `/images/products/p62.jpg`,
          link: "/ac-electric-vehicle-charger-7kw830",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p7-12",
          title: "AC Electric Vehicle Charger 7kW",
          image: `/images/products/p63.jpg`,
          link: "/ac-electric-vehicle-charger-7kw454",
          category: "EV Charging Stations",
        },

        // ── Page 8 ──
        {
          id: "ev-p8-1",
          title: "AC Electric Vehicle Charger 7kW",
          image: `/images/products/p64.jpg`,
          link: "/ac-electric-vehicle-charger-7kw563",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p8-2",
          title: "AC Electric Vehicle Charger 7kW",
          image: `/images/products/p65.jpg`,
          link: "/ac-electric-vehicle-charger-7kw",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p8-3",
          title: "AC Electric Vehicle Charger 7kW",
          image: `/images/products/p66.jpg`,
          link: "/ac-electric-vehicle-charger-7kw841",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p8-4",
          title: "AC Electric Vehicle Charger 7kW",
          image: `/images/products/p67.jpg`,
          link: "/ac-electric-vehicle-charger-7kw-1",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p8-5",
          title:
            "Wall-Mounted 32A OCPP AC App-Controlled EV Charger Station 7kW 11kW 22kW — Type 2, GB/T",
          image: `/images/products/p68.jpg`,
          link: "/product-wall-mounted-32a-ocpp-ac-app-controlled-ev-charger-station-7kw-11kw-22kw-car-charging-chademo-gbt-wall-box-ev-ac-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p8-6",
          title:
            "High Standard 22kW EV Charging Pile — AC Charger Electric Vehicle Charging Station",
          image: `/images/products/p69.jpg`,
          link: "/product-high-standard-22kw-ev-charging-piles-ac-charger-22kw-ac-ev-charger-electric-vehicle-charging-station",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p8-7",
          title:
            "22kW AC Wallbox EV Charging Station 32A RFID Card APP Control Type2 EV Home Charger",
          image: `/images/products/p70.jpg`,
          link: "/product-22kw-ac-wallbox-ev-charging-station-32a-rfid-card-app-control-type2-ev-home-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p8-8",
          title:
            "Solar EV Wallbox 7kW to 22kW Type 2 — OCPP1.6 TUV CE Certificate AC EV Charging",
          image: `/images/products/p71.jpg`,
          link: "/product-solar-ev-wallbox-7kw-to-22kw-type-2-chargers-for-residential-use-car--ocpp16--tuv-ce-certificate-ac-ev-charging758",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p8-9",
          title:
            "ev EV Charger 32A 3-Phase 22kW Fast Home Charging Wallbox EV Charger",
          image: `/images/products/p72.jpg`,
          link: "/product-ev-ev-charger-32a-3phase-22kw-fast-home-charging-ev-charging-stations-wallbox-ev-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p8-10",
          title:
            "ev 60kW Dual Fast Wall-Mounted EV Charger with CCS2 & GB/T Connectors",
          image: `/images/products/p73.jpg`,
          link: "/product-wolun-60kw-dual-fast-wall-mounted-ev-charger-with-ccs2--gb/t-connectors-commercial--private-charging-solution",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p8-11",
          title:
            "32A WiFi 3-Phase 22kW EV Charger OCPP1.6J App Control AC Type 2 Level 2 Station",
          image: `/images/products/p74.jpg`,
          link: "/product-32a-wifi-3-phase-22-kw-car-charging-evse-ocpp16j-app-control-fast-level-2-11kw-ac-type-2-station-22kw-portable-ev-charger",
          category: "EV Charging Stations",
        },

        // ── Page 9 ──
        {
          id: "ev-p9-1",
          title:
            "Factory Direct 22kW Wall-mounted EV Charging Unit 32A WIFI Bluetooth AC EV Charger",
          image: `/images/products/p75.jpg`,
          link: "/product-factory-direct-sales-22kw-wall-mounted-ev-charging-unit-32a-home-commercial-communication-wifi-bluetooth-ac-ev-charger750",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p9-2",
          title:
            "ODM OEM 7kW 11kW 22kW Wallbox Columnar Fast EV Charger — OCPP1.6 GBT TYPE2",
          image: `/images/products/p76.jpg`,
          link: "/product-odm-oem-7kw-11kw--22kw-wallbox-columnar-fast-ev-charger-ocpp16-gbt-type2-electric-vehicle-charging-station",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p9-3",
          title:
            "ev 32A 220V 7kW 11kW 22kW TYPE2 Commercial Electric Vehicle AC Wallbox EV Charger",
          image: `/images/products/p77.jpg`,
          link: "/product-ev-32a-220v-7kw-11kw-22kw-type2-new-energy-commercial-electric-vehicle-ac-car-charging-station-wallbox-ev-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p9-4",
          title:
            "11kW AC EV Charger Wall-Mounted Commercial EV Charging Station OCPP1.6J TUV CE",
          image: `/images/products/p78.jpg`,
          link: "/product-11kw-ac-ev-charger-wall-mounted-commercial-ev-charging-station-ocpp16j-compliant-smart-and-reliable-with-tuv-ce-certificate",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p9-5",
          title:
            "Commercial EV Wallbox 7kW to 22kW Type 2 GBT Chargers for Residential Use",
          image: `/images/products/p79.jpg`,
          link: "/product-commercial-ev-wallbox-7kw-to-22kw-type-2-gbt-chargers-for-residential-use-car-ac-ev-charging-unit344",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p9-6",
          title:
            "EV Wallbox Type 2 7kW to 22kW Charger for Electric Car — SPCC AC New Energy Car Charging Station",
          image: `/images/products/p80.jpg`,
          link: "/product-ev-wallbox-type-2-7kw-to-22kw-charger-for-electric-car-commercial-charging--spcc-ac-new-energy-car-charging-station",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p9-7",
          title:
            "EV Wallbox 7kW to 22kW Type 2 GBT Chargers for Residential Use — AC EV Wall Charger",
          image: `/images/products/p81.jpg`,
          link: "/product-ev-wallbox-7kw-to-22kw-type-2-gbt-chargers-for-residential-use-car-ac-ev-charging-unit-ev--car-wall-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p9-8",
          title:
            "7kW Home Use Wall Charger RFID Card Plug and Charge 32A Wall-mounted AC EV Charger",
          image: `/images/products/p82.jpg`,
          link: "/product-7kw--home-use-charging-wall-charger--rfid-card-plug-and-charge-32a-interface-wall-mounted--ac-car-ev-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p9-9",
          title:
            "Outdoor 22kW AC EV Charger Type2 GB/T Wallbox OCPP1.6J RFID POS Machine Payment",
          image: `/images/products/p83.jpg`,
          link: "/product-outdoor-22kw-ac-ev-charger-type2-gb/t-wallbox-ocpp16j-rfid-pos-machine-payment-supported-wall-mounted-charging-station",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p9-10",
          title:
            "Type 2 AC EV Charger 7kW 11kW 22kW Wallbox Electric Vehicle Fast Charging Pile",
          image: `/images/products/p84.jpg`,
          link: "/product-type-2-ac-ev-charger-7kw-11kw-22kw-wallbox-electric-vehicle-fast-charging-pile",
          category: "EV Charging Stations",
        },

        // ── Page 10 ──
        {
          id: "ev-p10-1",
          title:
            "Charging Station 7kW to 22kW Type 2 GBT Chargers — AC EV Wall Car Charger",
          image: `/images/products/p85.jpg`,
          link: "/product-charging-station-7kw-to-22kw-type-2-gbt-chargers-car-ac-ev-charging-unit--ev-wall-car-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p10-2",
          title:
            "ODM OEM Wallbox 7kW to 22kW Type 2 GBT Chargers for Residential and Commercial Use",
          image: `/images/products/p86.jpg`,
          link: "/product-odm-oem-wallbox-7kw-to-22kw-type-2-gbt-chargers-for-residential-and-commercial-use-car-ac-ev-charging-unit",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p10-3",
          title:
            "EV Charging Station for Cars APP Control Type2 GB/T Connector AC Car Auto Charging",
          image: `/images/products/p87.jpg`,
          link: "/product-ev-charging-station-for-cars-app-control-type2-gb/t-connector-ac-car-auto-charging-station",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p10-4",
          title:
            "Commercial EV Wallbox 7kW to 22kW Type 2 GBT Chargers for Residential Use",
          image: `/images/products/p88.jpg`,
          link: "/product-commercial-ev-wallbox-7kw-to-22kw-type-2-gbt-chargers-for-residential-use-car-ac-ev-charging-unit",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p10-5",
          title:
            "ev EV Charger 7kW to 22kW AC Charger for Electric Cars — TUV CE Certified",
          image: `/images/products/p89.jpg`,
          link: "/product-ev-ev-charger-7kw-to-22kw-ac-charger-for-electric-cars-with-ce-certification-tuv-ce-certified-ac-ev-car-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p10-6",
          title:
            "Home 32A EV Charger 7kW Level 2 IP63 EV Charging Wallbox Station Smart GBT",
          image: `/images/products/p90.jpg`,
          link: "/product-home-32a-ev-charger-7kw-level-2-ip63-ev-charging-wallbox-station-smart-gbt-ev-charge",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p10-7",
          title:
            "CCS2 EV Charger 7kW to 22kW AC Charger for Electric Cars — TUV CE Certified",
          image: `/images/products/p91.jpg`,
          link: "/product-ccs2-ev-charger-7kw-to-22kw-ac-charger-for-electric-cars-with-ce-certification-tuv-ce-certified-ac-ev-car-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p10-8",
          title:
            "Commercial EV Wallbox 7kW GBT Type 1 and Type 2 Chargers for Residential Use",
          image: `/images/products/p92.jpg`,
          link: "/product-commercial-ev-wallbox-7kw-gbt-type-1-and-type-2-chargers-for-residential-use-ac-ev-charging-unit",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p10-9",
          title:
            "Home EV Charging Station APP Control Type2 GB/T Connector TUV CE Certified AC EV Charger",
          image: `/images/products/p93.jpg`,
          link: "/product-home-ev-charging-station-charger-for-cars-app-control-type2-gb/t-connector-tuv-ce-certified-ac-ev-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p10-10",
          title:
            "Commercial Wallbox and Columnar 7kW EV Charger 32A Type 2 AC Charger for Electric Vehicles",
          image: `/images/products/p94.jpg`,
          link: "/product-commercial-wallbox-and-columniation-7kw-to--ev-charger--32a-type-2--ac-charger-for-electric-vehicles",
          category: "EV Charging Stations",
        },

        // ── Page 11 ──
        {
          id: "ev-p11-1",
          title:
            "Waterproof IP64 Wallbox EV Charger 32A Type 2 AC Home Wall-Mounted EV Charging Station",
          image: `/images/products/p95.jpg`,
          link: "/product-waterproof-ip64-wallbox-ev-charger-32a-type-2-ac-ev-charger-home-wall-mounted-ev-charging-station704",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p11-2",
          title:
            "ev Home 32A GBT EV Charger 7kW Level 2 EV Charging Wallbox Pile OCPP1.J IP63",
          image: `/images/products/p96.jpg`,
          link: "/product-ev-home-32a-gbt-ev-charger-7kw-level-2-ev-charging-wallbox-pile-ocpp1j-ip63-gb/t-7kw-ev-charger578",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p11-3",
          title:
            "Factory Direct 22kW Wall-mounted EV Charging Unit 32A WIFI Bluetooth AC EV Charger",
          image: `/images/products/p97.jpg`,
          link: "/product-factory-direct-sales-22kw-wall-mounted-ev-charging-unit-32a-home-commercial-communication-wifi-bluetooth-ac-ev-charger842",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p11-4",
          title: "ev Special Offer GBT 3.5KW EV Portable Car Charger",
          image: `/images/products/p98.jpg`,
          link: "/product-ev-special-offer-new--car-portable-charger-ev-charger-gbt-35kw-ev-portable-charger622",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p11-5",
          title:
            "Affordable Portable EV Charger AC 3.5kW — Factory Direct Sales",
          image: `/images/products/p99.jpg`,
          link: "/product-affordable-portable-ev-chargers-factory-direct-sales-high-quality-ac35kw-private-ev-charger367",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p11-6",
          title:
            "Solar EV Wallbox 7kW to 22kW Type 2 OCPP1.6 TUV CE Certificate AC EV Charging",
          image: `/images/products/p100.jpg`,
          link: "/product-solar-ev-wallbox-7kw-to-22kw-type-2-chargers-for-residential-use-car--ocpp16--tuv-ce-certificate-ac-ev-charging883",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p11-7",
          title:
            "3.5kW to 7kW Portable EV Charger Unit 32A Home Commercial AC Portable EV Charger",
          image: `/images/products/p101.jpg`,
          link: "/product-35kw-to-7kw-portable-ev-charger-unit-32a-home-commercial--home-communication--ac-portable-ev-charger745",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p11-8",
          title:
            "Factory Direct 3.5kW Portable EV Charger Unit 32A Home Commercial Portable AC EV Charger",
          image: `/images/products/p102.jpg`,
          link: "/product-factory-direct-sales-35kw-portable-ev-charger-unit-32a-home-commercial--home-communication-portable--ac-ev-charger541",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p11-9",
          title:
            "Wallbox 7kW to 22kW Type 2 GBT Solar EV Charger OCPP1.6 TUV CE WIFI Bluetooth AC",
          image: `/images/products/p103.jpg`,
          link: "/product-wallbox-7kw-to-22kw-type-2-gbt-solar-ev-charger-use-car--ocpp16--tuv-ce-certificate--wifi-bluetooth-ac-ev-charging406",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p11-10",
          title:
            "32A Home Commercial 3.5kW to 7kW Portable EV Charger Unit AC Portable EV Charger",
          image: `/images/products/p104.jpg`,
          link: "/product-32a-home-commercial--home-communication--35kw-to-7kw-portable-ev-charger-unit-ac-portable-ev-charger470",
          category: "EV Charging Stations",
        },

        // ── Page 12 ──
        {
          id: "ev-p12-1",
          title:
            "Waterproof IP64 Wallbox EV Charger 32A Type 2 AC Home Wall-Mounted EV Charging Station",
          image: `/images/products/p105.jpg`,
          link: "/product-waterproof-ip64-wallbox-ev-charger-32a-type-2-ac-ev-charger-home-wall-mounted-ev-charging-station",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p12-2",
          title:
            "ev Home 32A GBT EV Charger 7kW Level 2 EV Charging Wallbox Pile OCPP1.J IP63 GB/T",
          image: `/images/products/p106.jpg`,
          link: "/product-ev-home-32a-gbt-ev-charger-7kw-level-2-ev-charging-wallbox-pile-ocpp1j-ip63-gb/t-7kw-ev-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p12-3",
          title:
            "Factory Direct 22kW Wall-mounted EV Charging Unit 32A WIFI Bluetooth AC EV Charger",
          image: `/images/products/p107.jpg`,
          link: "/product-factory-direct-sales-22kw-wall-mounted-ev-charging-unit-32a-home-commercial-communication-wifi-bluetooth-ac-ev-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p12-4",
          title: "ev Special Offer GBT 3.5kW EV Portable Car Charger",
          image: `/images/products/p108.jpg`,
          link: "/product-ev-special-offer-new--car-portable-charger-ev-charger-gbt-35kw-ev-portable-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p12-5",
          title: "Affordable Portable EV Charger AC 3.5kW Private EV Charger",
          image: `/images/products/p109.jpg`,
          link: "/product-affordable-portable-ev-chargers-factory-direct-sales-high-quality-ac35kw-private-ev-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p12-6",
          title:
            "Solar EV Wallbox 7kW to 22kW Type 2 OCPP1.6 TUV CE Certificate AC EV Charging",
          image: `/images/products/p110.jpg`,
          link: "/product-solar-ev-wallbox-7kw-to-22kw-type-2-chargers-for-residential-use-car--ocpp16--tuv-ce-certificate-ac-ev-charging",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p12-7",
          title:
            "3.5kW to 7kW Portable EV Charger Unit 32A Home Commercial AC Portable EV Charger",
          image: `/images/products/p111.jpg`,
          link: "/product-35kw-to-7kw-portable-ev-charger-unit-32a-home-commercial--home-communication--ac-portable-ev-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p12-8",
          title:
            "Factory Direct 3.5kW Portable EV Charger Unit 32A Portable AC EV Charger",
          image: `/images/products/p112.jpg`,
          link: "/product-factory-direct-sales-35kw-portable-ev-charger-unit-32a-home-commercial--home-communication-portable--ac-ev-charger",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p12-9",
          title:
            "Wallbox 7kW to 22kW Type 2 GBT Solar EV Charger OCPP1.6 TUV CE WIFI Bluetooth AC",
          image: `/images/products/p113.jpg`,
          link: "/product-wallbox-7kw-to-22kw-type-2-gbt-solar-ev-charger-use-car--ocpp16--tuv-ce-certificate--wifi-bluetooth-ac-ev-charging",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p12-10",
          title:
            "32A Home Commercial 3.5kW to 7kW Portable EV Charger Unit AC Portable EV Charger",
          image: `/images/products/p114.jpg`,
          link: "/product-32a-home-commercial--home-communication--35kw-to-7kw-portable-ev-charger-unit-ac-portable-ev-charger",
          category: "EV Charging Stations",
        },

        // ── Page 13 ──
        {
          id: "ev-p13-1",
          title: "Portable Charger 3.5kW to 7kW",
          image: `/images/products/p115.jpg`,
          link: "/car-charging-plastic-case",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p13-2",
          title: "Smart AC EV Charging 3.5kW to 22kW",
          image: `/images/products/p116.jpg`,
          link: "/smart-ac-ev-charging-35kw-to-22kw",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p13-3",
          title: "GBT 7kW AC Electric Vehicle Charger",
          image: `/images/products/p117.jpg`,
          link: "/colorful-plastic-shell126",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p13-4",
          title: "AC Electric Vehicle Charger 7kW to 22kW",
          image: `/images/products/p118.jpg`,
          link: "/wle112-ac7kw421821",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p13-5",
          title: "Portable Charger 3.5kW to 7kW",
          image: `/images/products/p119.jpg`,
          link: "/car-charging-plastic-case258",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p13-6",
          title: "Smart AC Electric Vehicle Charging 3.5kW to 22kW",
          image: `/images/products/p120.jpg`,
          link: "/plastic-case815",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p13-7",
          title: "GBT 7kW AC Electric Vehicle Charger",
          image: `/images/products/p121.jpg`,
          link: "/colorful-plastic-shell172",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p13-8",
          title: "AC Electric Vehicle Charger 7kW to 22kW",
          image: `/images/products/p122.jpg`,
          link: "/wle112-ac7kw421571",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p13-9",
          title: "Portable Charger 3.5kW to 7kW",
          image: `/images/products/p123.jpg`,
          link: "/car-charging-plastic-case134",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p13-10",
          title: "Smart AC Electric Vehicle Charging 3.5kW to 22kW",
          image: `/images/products/p124.jpg`,
          link: "/ac-electric-vehicle-charging-7kw-to-22kw",
          category: "EV Charging Stations",
        },
        {
          id: "ev-p13-11",
          title: "GBT 7kW AC Electric Vehicle Charger",
          image: `/images/products/p125.jpg`,
          link: "/colorful-plastic-shell",
          category: "EV Charging Stations",
        },
      ],
    },

    // ─────────────────────────────────────────────
    // PHOTOVOLTAIC ENERGY STORAGE SYSTEMS
    // ─────────────────────────────────────────────
    {
      id: "pv-storage",
      name: "Photovoltaic Energy Storage Systems",
      slug: "photovoltaic-energy-storage-systems",
      products: [
        {
          id: "pv-1",
          title: "WL-E-CORE ev Megawatt Energy Storage System",
          image: `/images/products/p126.jpeg`,
          link: "/wl-e-core-wolun-megawatt-energy-storage-system",
          category: "Photovoltaic Energy Storage Systems",
        },
        {
          id: "pv-2",
          title:
            "WL-E-CORE Export-grade Outdoor Cabinet-type Commercial Energy Storage System",
          image: `/images/products/p127.jpg`,
          link: "/wl-e-core-export-grade-outdoor-cabinet-type-commercial-energy-storage-system",
          category: "Photovoltaic Energy Storage Systems",
        },
        {
          id: "pv-3",
          title:
            "15KWh / 30KWh Floor-mounted Mobile Cabinet Energy Storage System",
          image: `/images/products/p128.jpg`,
          link: "/15kwh/30kwh-floor-mounted-mobile-cabinet-energy-storage-system",
          category: "Photovoltaic Energy Storage Systems",
        },
        {
          id: "pv-4",
          title: "Wall-mounted Energy Storage System",
          image: `/images/products/p129.jpg`,
          link: "/wall-mounted-energy-storage-system",
          category: "Photovoltaic Energy Storage Systems",
        },
        {
          id: "pv-5",
          title: "5KWh / 10KWh Battery + Inverter All-in-One Unit",
          image: `/images/products/p130.jpg`,
          link: "/5kwh/10kwh-batteryinverter-all-in-one-unit",
          category: "Photovoltaic Energy Storage Systems",
        },
        {
          id: "pv-6",
          title:
            "Application Fields of High-Performance Lithium-Ion Battery Energy Storage Systems for Residential and Commercial Use",
          image: `/images/products/p131.jpg`,
          link: "/application-fields-of-high-performance-lithium-ion-battery-energy-storage-systems-for-residential-and-commercial-use",
          category: "Photovoltaic Energy Storage Systems",
        },
        {
          id: "pv-7",
          title:
            "51.2V 15KWh (5KWh × 3) Parallel Module Stacked Energy Storage System",
          image: `/images/products/p132.jpg`,
          link: "/512v-15kwh-5kwhx3-parallel-module-stacked-energy-storage-system",
          category: "Photovoltaic Energy Storage Systems",
        },
      ],
    },
  ];

  // Flatten all non-"all" products for the ALL PRODUCTS view
  const allProducts: Product[] = categories
    .filter((cat) => cat.id !== "all")
    .flatMap((cat) => cat.products);

  const currentCategory =
    activeCategory === "all"
      ? { id: "all", name: "ALL PRODUCTS", slug: "all", products: allProducts }
      : categories.find((cat) => cat.id === activeCategory);

  const productsToDisplay = currentCategory?.products || [];

  // Pagination
  const productsPerPage = 9;
  const totalPages = Math.ceil(productsToDisplay.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = productsToDisplay.slice(indexOfFirst, indexOfLast);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* HEADER */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/image.png"
          alt="Company Building"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase">
            PRODUCTS
          </h1>
        </div>
      </section>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 sticky top-8">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-6">
                Categories
              </h3>
              <nav className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      activeCategory === category.id
                        ? "text-green-600 bg-green-50 font-semibold"
                        : "text-slate-700 hover:bg-slate-100 hover:text-green-600"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* PRODUCTS GRID */}
          <div className="lg:col-span-3">
            {/* Product count badge */}
            <p className="text-sm text-slate-500 mb-6">
              Showing {indexOfFirst + 1}–
              {Math.min(indexOfLast, productsToDisplay.length)} of{" "}
              {productsToDisplay.length} products
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-lg transition cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://via.placeholder.com/400x300?text=Image+Not+Found";
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-blue-600 mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-bold text-sm text-slate-800 line-clamp-2">
                      {product.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                {/* PREV */}
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg text-sm font-medium border border-green-200 text-green-700
                             hover:bg-green-50 hover:border-green-400 transition
                             disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  ← Prev
                </button>

                {/* PAGE NUMBERS */}
                {getPagination(currentPage, totalPages).map((page, i) =>
                  page === "..." ? (
                    <span key={i} className="px-2 text-green-300 font-semibold">
                      ...
                    </span>
                  ) : (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(page as number)}
                      className={`w-10 h-10 rounded-lg text-sm font-semibold transition border
                        ${
                          currentPage === page
                            ? "bg-green-600 text-white border-green-600 shadow-md"
                            : "text-green-700 border-green-200 hover:bg-green-50 hover:border-green-400"
                        }`}
                    >
                      {page}
                    </button>
                  ),
                )}

                {/* NEXT */}
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg text-sm font-medium border border-green-200 text-green-700
                             hover:bg-green-50 hover:border-green-400 transition
                             disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 text-xl font-bold"
            >
              ✕
            </button>

            <div className="w-full bg-slate-100 rounded mb-4 flex items-center justify-center overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-auto max-h-[60vh] object-contain rounded"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/400x300?text=Image+Not+Found";
                }}
              />
            </div>

            <h2 className="text-lg font-bold mb-2 text-slate-800">
              {selectedProduct.title}
            </h2>

            <p className="text-sm text-blue-600 mb-5">
              {selectedProduct.category}
            </p>

            <Link href="/contact-us">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded font-medium transition">
                Send Inquiry
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Suspense wrapper (required because useSearchParams needs it) ───
const ProductSection: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-slate-500 text-lg">Loading products...</p>
        </div>
      }
    >
      <ProductSectionInner />
    </Suspense>
  );
};

export default ProductSection;
