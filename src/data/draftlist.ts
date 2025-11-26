import { WishlistItem } from '../types/types';
import { CATEGORIES } from './categories';

interface DraftList {
  items: WishlistItem[];
}

export function getDraftList(): DraftList {
  return {
    items: [
      {
        name: "Park Tool P Handle Set",
        category: CATEGORIES.CYCLING,
        description: "For Bicycle Repair and Maintenance!",
        thoughts: ["Matchy Blue Tools"],
        link: "https://www.parktool.com/en-us/product/p-handle-hex-wrench-set-ph-1-2",
        cost: 120
      },
      {
        name: "Fun yet Tasteful Cycling Socks",
        category: CATEGORIES.CYCLING,
        description: "Length is critical: 6 - 8 inches. Crew/Mid-Calf. No less. No ankle socks.",
        thoughts: ["Defeet, Swiftwick, Sockguy, or AERO SOCKS."],
        link: "https://www.sockguy.com/6-8-1/sgx-happy-faced-socks-x6hapface",
        cost: 17
      },
      {
        name: "Smart Trainer for Indoor Cycling",
        category: CATEGORIES.CYCLING,
        description: "Wahoo Kickr",
        thoughts: ["Ride bike without leaving house"],
        link: "https://www.wahoofitness.com/devices/indoor-cycling/bike-trainers/kickr-buy",
        cost: 1100
      },
      {
        name: "Park Tool Truing Stand",
        category: CATEGORIES.CYCLING,
        description: "A stand for straightening wheels.",
        thoughts: ["I wanna build wheels!"],
        link: "https://www.parktool.com/en-us/product/professional-wheel-truing-stand-ts-2-3?category=Wheel+Truing+Stands",
        cost: 450
      },
      {
        name: "Cycling Nutrition",
        category: CATEGORIES.CYCLING,
        description: "Science Candy",
        thoughts: ["Carbs carbs carbs carbs carbs"],
        link: "https://carbsfuel.com/products/carbs-fuel-energy-gel",
        cost: 36
      },
    //   {
    //     name: "Custom Psychopomp Cycling Socks",
    //     category: CATEGORIES.CYCLING,
    //     description: "",
    //     thoughts: [],
    //     link: "",
    //     cost: 40
    //   },
      {
        name: "Bags for Bike",
        category: CATEGORIES.CYCLING,
        description: "Frame and Handlebar Roll",
        thoughts: ["Fun Colors Preferable"],
        link: "https://www.wizard.works/shop/lil-presto-barrel-bag/",
        cost: 60
      },
      {
        name: "Custom Bicycle Frame Building Course",
        category: CATEGORIES.CYCLING,
        description: "Welding camp.",
        thoughts: ["Bike!"],
        link: "",
        cost: 3500
      },
      {
        name: "Torque Wrench",
        category: CATEGORIES.CYCLING,
        description: "This is an important.",
        thoughts: ["(Torque =/= recommended torque) --> danger"],
        link: "https://www.parktool.com/en-us/product/ratcheting-click-type-torque-wrench-tw-5-2?category=Torque+Tools",
        cost: 100
      },
      {
        name: "Color Poster Printer",
        category: CATEGORIES.CREATIVE_TOOLS,
        description: "Prints, Gloss Covers.",
        thoughts: ["Would like to have a nice large format printer."],
        link: "https://www.usa.canon.com/shop/p/pixma-pro-200s",
        cost: 600
      },
    //   {
    //     name: "Custom Wax Seal Set",
    //     category: CATEGORIES.CREATIVE_TOOLS,
    //     description: "",
    //     thoughts: [],
    //     link: "",
    //     cost: 45
    //   },
      {
        name: "Professional Art Supplies",
        category: CATEGORIES.CREATIVE_TOOLS,
        description: "Art art art art art art",
        thoughts: ["Artist-grade high-pigment Acrylics, White Paint, Ink, a nice good brush, etc. I already have a bunch of paint but more never hurt nobody."],
        link: "https://www.dickblick.com/products/golden-heavy-body-artist-acrylics/",
        cost: 200
      },
      {
        name: "Art Paper and Bristol Board",
        category: CATEGORIES.CREATIVE_TOOLS,
        description: "Nice heavy paper for ink, markers, watercolor, etc.",
        thoughts: ["nice high gsm..."],
        link: "https://www.dickblick.com/categories/drawing/paper/",
        cost: 15
      },
      {
        name: "Strathmore 9x12 Recycled Sketchbooks",
        category: CATEGORIES.CREATIVE_TOOLS,
        description: "Primary notebook for notes and stuff",
        thoughts: ["This is the notebook format I've been using for the past decade."],
        link: "https://www.dickblick.com/products/strathmore-400-series-recycled-paper-pads/",
        cost: 12
      },
      {
        name: "Bambu Labs P2S with AMS",
        category: CATEGORIES.CREATIVE_TOOLS,
        description: "Multicolor Superfast Printer",
        thoughts: ["Critical to Critterspeed Manufacturing"],
        link: "https://us.store.bambulab.com/products/p2s?from=navigation",
        cost: 900
      },
      {
        name: "Pens and Markers",
        category: CATEGORIES.CREATIVE_TOOLS,
        description: "Writing implements of many sorts",
        thoughts: ["Pentel brush pen, calligraphy pens, alcohol markers, felt tips, etc. etc."],
        link: "https://www.pentel.com/products/pocket-brush-pen-refills-black-6-pack-1?variant=9090281177135&country=US&currency=USD&utm_medium=product_sync",
        cost: 5
      },
      {
        name: "Assorted Kitchen Stuff",
        category: CATEGORIES.NEW_PLACE,
        description: "Moving to new place, need kitchen stuff... ",
        thoughts: ["paper towel roll, dish towels, weird mugs, plates, measuring cups, etc. (already got tupperware)"],
        link: "https://pyrexhome.com/collections/pyrex-measuring-cups/products/pyrex-smart-essentials-glass-measuring-cup-set",
        cost: 10
      },
      {
        name: "Power Tools",
        category: CATEGORIES.CREATIVE_TOOLS,
        description: "Drill, Impact, Saw, Sander, etc.",
        thoughts: ["Probably about time to invest in power tools"],
        link: "https://www.dewalt.com/products/power-tools",
        cost: 150
      },
      {
        name: "3D Scanner",
        category: CATEGORIES.CREATIVE_TOOLS,
        description: "Injest into cyberspace",
        thoughts: ["1. sculpt. 2. scan. 3. print."],
        link: "https://www.einstar.com/products/einstar-2",
        cost: 1000
      },
      {
        name: "Sculpture Materials",
        category: CATEGORIES.CREATIVE_TOOLS,
        description: "Tactile Sculpturing",
        thoughts: ["Pliable Modeling Clay compatible with silicon mold and/or scannable"],
        link: "https://www.monstermakers.com/monster-clay/",
        cost: 60
      },
      {
        name: "Clearcoat",
        category: CATEGORIES.CREATIVE_TOOLS,
        description: "Clearcoat and Finishing Materials",
        thoughts: ["Probably also need a respirator mask."],
        link: "https://www.eastwood.com/ew-2k-aerosol-high-gloss-clear.html?wickedsource=google&wickedid=CjwKCAiA55rJBhByEiwAFkY1QK1klPCKiht70l9SLWrHctb_t_7hA81ZHeUqUdNijhbQfFPc9gAzJhoCXakQAvD_BwE&wickedid=730099152401&wcid=22154646643&wv=4&wickedsource=google&wickedid=CjwKCAiA55rJBhByEiwAFkY1QK1klPCKiht70l9SLWrHctb_t_7hA81ZHeUqUdNijhbQfFPc9gAzJhoCXakQAvD_BwE&creativeid=730099152401&wcid=22154646643&wv=4&gad_source=1&gad_campaignid=22154646643&gbraid=0AAAAAD_t6zHV8LnJ0_4x-uYQQinEs1Hl-&gclid=CjwKCAiA55rJBhByEiwAFkY1QK1klPCKiht70l9SLWrHctb_t_7hA81ZHeUqUdNijhbQfFPc9gAzJhoCXakQAvD_BwE",
        cost: 25
      },
      {
        name: "Fiberglass Materials",
        category: CATEGORIES.CREATIVE_TOOLS,
        description: "For strong outdoor sculpture",
        thoughts: ["Went to disneyland, acquired fiberglass fixation."],
        link: "https://fiberglasswarehouse.com/products/fiberglass-warehouse-gallon-resin-supply-kit",
        cost: 140
      },
      {
        name: "Backup Hard Drive",
        category: CATEGORIES.NEW_PLACE,
        description: "For backup of important data.",
        thoughts: ["A couple TB should be sufficient"],
        link: "https://www.amazon.com/Western-Digital-Desktop-External-Drive/dp/B01LQQHL4E?tag=p00935-20&ascsubtag=06dsG5MRR21akXxKn45iFZm&th=1",
        cost: 200
      },
      {
        name: "Grill/Smoker",
        category: CATEGORIES.NEW_PLACE,
        description: "For hosting and grilling and barbeque",
        thoughts: ["I want to cook and smoke things."],
        link: "https://www.weber.com/US/en/wood-pellet/searwood/searwood-xl-600-wood-pellet-grill/1500121.html",
        cost: 1200
      },
      {
        name: "Robot Parts and Electronics",
        category: CATEGORIES.CREATIVE_TOOLS,
        description: "Animatronics?",
        thoughts: ["A lot of work I'm not actively involved in. Maybe a bit out of accessible bandwidth."],
        link: "https://www.servocity.com/",
        cost: 100
      },
      {
        name: "Monochrome Blue Running Shoes",
        category: CATEGORIES.DAILY_LIFE,
        description: "Size 12 Brooks Ghost 17",
        thoughts: ["These are the shoes I wear."],
        link: "https://www.brooksrunning.com/en_us/mens/shoes/road-running-shoes/ghost-17/1104421D432.125.html",
        cost: 140
      },
      {
        name: "Blue Clothes",
        category: CATEGORIES.DAILY_LIFE,
        description: "Blue.",
        thoughts: ["Blue Pants. Blue Shorts. Blue Crew Socks. Blue Shirts. "],
        link: "https://en.wikipedia.org/wiki/Cobalt_blue",
        cost: 80
      },
      {
        name: "Coffee Beans",
        category: CATEGORIES.DAILY_LIFE,
        description: "Pretty normal",
        thoughts: ["Fresh. Fresh beans. Roasty fresh. yessss.... beans...."],
        link: "",
        cost: 20
      },
      {
        name: "Espresso Machine",
        category: CATEGORIES.DAILY_LIFE,
        description: "Gaggia Classic E24",
        thoughts: ["Espresso Good. Coffee good."],
        link: "https://www.wholelattelove.com/products/gaggia-classic-e24?variant=43085101989942",
        cost: 550
      },
      {
        name: "Glassware",
        category: CATEGORIES.DAILY_LIFE,
        description: "Short Stem Tulip Glasses",
        thoughts: ["One-size-fits-all bachelor glassware set."],
        link: "https://www.webstaurantstore.com/libbey-3807-13-oz-customizable-belgian-beer-glass-case/5513807.html",
        cost: 60
      },
      {
        name: "LEGO Sets",
        category: CATEGORIES.EXPERIENCES,
        description: "Castles, Pirates, Hobbits, et al.",
        thoughts: ["I have a whole little medieval wizard tower tableau, so any contributing sets could be cool."],
        link: "https://www.lego.com/en-us/product/the-lord-of-the-rings-the-shire-10354",
        cost: 175
      },
      {
        name: "Books",
        category: CATEGORIES.EXPERIENCES,
        description: "Good things a russell should read.",
        thoughts: ["Joseph Campbell, Italo Calvino, Roald Dahl, Jane Austen, Charlotte Bronte, et al. "],
        link: "https://www.amazon.com/Jonathan-Strange-Mr-Norrell-Novel/dp/1620409909",
        cost: 20
      },
      {
        name: "Art and Reference Books",
        category: CATEGORIES.EXPERIENCES,
        description: "Nice stuff for inspiration and perusal",
        thoughts: ["James Gurney, Larry MacDougall, Karl Kopinski, "],
        link: "https://www.goodreads.com/book/show/125395054-gwelf",
        cost: 60
      },
      {
        name: "Lowes Gift Card",
        category: CATEGORIES.NEW_PLACE,
        description: "Miscellanious Supplies for Home and Workshop",
        thoughts: ["Me want stuff for make stuff."],
        link: "https://www.lowes.com/",
        cost: 50
      },
      {
        name: "Motorcycle License Class",
        category: CATEGORIES.EXPERIENCES,
        description: "Me wanna ride moto",
        thoughts: ["but maybe not the most prudent idea..."],
        link: "",
        cost: 350
      }
    ]
  };
}
