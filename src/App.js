import React, { Component } from 'react';
import Navbar from './Navbar';
import Shopping from './Shopping';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Help from './Help';
import Welcome from './Welcome';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      navbarItems: [
        {
          id: 1,
          link: "",
          text: "",
          iconClass: "fas fa-lemon"
        },
        {
          id: 2,
          link: "/lis",
          text: "Lis",
          iconClass: ""
        },
        {
          id: 3,
          link: "/lslate",
          text: "L-slate",
          iconClass: ""
        },
        {
          id: 4,
          link: "/lhandi",
          text: "L-Handi",
          iconClass: ""
        },
        {
          id: 5,
          link: "/lwrist",
          text: "L-Wrist",
          iconClass: ""
        },
        {
          id: 6,
          link: "/ltv",
          text: "L-TV",
          iconClass: ""
        },
        {
          id: 7,
          link: "/lbeat",
          text: "L-Beat",
          iconClass: ""
        },
        {
          id: 8,
          link: "/support",
          text: "L-Help",
          iconClass: ""
        }
        //, {
        //   id: 9,
        //   link: "./search",
        //   text: "",
        //   iconClass: "fas fa-search"
        // },
        // {
        //   id: 10,
        //   link: "./basket",
        //   text: "",
        //   iconClass: "fas fa-shopping-bag"
        // }
      ],
      shoppingItemsLis: [
        {
          id: 1,
          imgSrc: "https://static.makeuseof.com/wp-content/uploads/2017/09/pinebook-64-featured-1-670x335.jpg",
          name: "LisBook Oxygen",
          display: "800x600 TFT Potato screen",
          processor: "Qualcomm Snapdragon 750",
          ram: "4GB Mobile Onboard",
          storage: "16GB Internal, Compact Flash slot (up to 32GB)",
          graphics: "Graphics: They exist",
          feature1: "Lis OS Stonehenge",
          feature2: "Always-on Microphone",
          ports: "No Ports. At all.",
          price: "€999.99"
        },
        {
          id: 2,
          imgSrc: "https://www.pine64.org/wp-content/uploads/2019/07/Pinebook_July.png",
          name: "LisBook Nitrogen",
          display: "1920x1080 LCD Display",
          processor: "Intel Core 2 Duo @ 1.6GHz",
          ram: "8GB LPDDR3",
          storage: "32GB Internal, Compact Flash slot (up to 32GB)",
          graphics: "NVIDIA don't like us",
          feature1: "Lis OS Stonehenge",
          feature2: "Always-on Webcam & Microphone",
          ports: "No Ports. At all.",
          price: "€1,999.99"
        },
        {
          id: 3,
          imgSrc: "https://images-na.ssl-images-amazon.com/images/I/816YafEbEXL._SX466_.jpg",
          name: "iLis Argon",
          display: "4K LCD Display @ 60Hz",
          processor: "Intel Core i5 @ 2.6GHz",
          ram: "16GB LPDDR3",
          storage: "1TB hybrid drive",
          graphics: "AMD Radeon 123",
          feature1: "Lis OS Stonehenge",
          feature2: "Cannot be Repaired. Ever",
          ports: "Ports! All firewire. For some reason.",
          price: "€2,999.99"
        }
      ],
      shoppingItemsLSlate: [
        {
          id: 1,
          imgSrc: "https://zdnet2.cbsistatic.com/hub/i/r/2014/08/22/cd61ad19-29ac-11e4-9e6a-00505685119a/thumbnail/770x578/da5049d861540c404a09f1ffe69e0724/google-nexus-7-2013-review-improved-spec-great-screen-top-value.jpg",
          name: "L-Slate Mini",
          display: "800x600 Resistive touchscreen",
          processor: "L6 Processor",
          ram: "1GB RAM",
          storage: "16GB Internal",
          graphics: "Graphics: They exist",
          feature1: "L-OS 6",
          feature2: "Free Screen Cleaning Kit!",
          ports: "30-pin dock connector",
          price: "€199.99"
        },
        {
          id: 2,
          imgSrc: "https://i5.walmartimages.com/asr/655549f9-1e5d-4811-a733-3182653b1879_1.8a24e465f0f9db1d163e098c3689352e.jpeg",
          name: "L-Slate Oxygen",
          display: "720p Capacitive Touchscreen",
          processor: "L6 Processor",
          ram: "2GB RAM",
          storage: "32GB Internal, Compact Flash slot (up to 32GB)",
          graphics: "NVIDIA don't like us",
          feature1: "L-OS 6",
          feature2: "Always-on Webcam & Microphone",
          ports: "30-pin dock connector",
          price: "€399.99"
        },
        {
          id: 3,
          imgSrc: "https://cdn.mos.cms.futurecdn.net/8LtwVjsqpUK4Fy7Evjabrj.jpg",
          name: "L-Slate Artist Edition",
          display: "Full HD Display, 10-point Multitouch",
          processor: "L6X Processor",
          ram: "8GB RAM",
          storage: "128GB Flash Storage",
          graphics: "",
          feature1: "L-OS 6",
          feature2: "Lemon Crayon Not Included",
          ports: "USB 1.0",
          price: "€999.99"
        }
      ]
      , shoppingItemsLHandi: [
        {
          id: 1,
          imgSrc: "https://zdnet2.cbsistatic.com/hub/i/r/2014/08/22/cd61ad19-29ac-11e4-9e6a-00505685119a/thumbnail/770x578/da5049d861540c404a09f1ffe69e0724/google-nexus-7-2013-review-improved-spec-great-screen-top-value.jpg",
          name: "L-Slate Mini",
          display: "800x600 Resistive touchscreen",
          processor: "L6 Processor",
          ram: "1GB RAM",
          storage: "16GB Internal",
          graphics: "Graphics: They exist",
          feature1: "L-OS 6",
          feature2: "Free Screen Cleaning Kit!",
          ports: "30-pin dock connector",
          price: "€199.99"
        },
        {
          id: 2,
          imgSrc: "https://i5.walmartimages.com/asr/655549f9-1e5d-4811-a733-3182653b1879_1.8a24e465f0f9db1d163e098c3689352e.jpeg",
          name: "L-Slate Oxygen",
          display: "720p Capacitive Touchscreen",
          processor: "L6 Processor",
          ram: "2GB RAM",
          storage: "32GB Internal, Compact Flash slot (up to 32GB)",
          graphics: "NVIDIA don't like us",
          feature1: "L-OS 6",
          feature2: "Always-on Webcam & Microphone",
          ports: "30-pin dock connector",
          price: "€399.99"
        },
        {
          id: 3,
          imgSrc: "https://cdn.mos.cms.futurecdn.net/8LtwVjsqpUK4Fy7Evjabrj.jpg",
          name: "L-Slate Artist Edition",
          display: "Full HD Display, 10-point Multitouch",
          processor: "L6X Processor",
          ram: "8GB RAM",
          storage: "128GB Flash Storage",
          graphics: "",
          feature1: "L-OS 6",
          feature2: "Lemon Crayon Not Included",
          ports: "USB 1.0",
          price: "€999.99"
        }
      ]
      , shoppingItemsLWrist: [
        {
          id: 1,
          imgSrc: "https://zdnet2.cbsistatic.com/hub/i/r/2014/08/22/cd61ad19-29ac-11e4-9e6a-00505685119a/thumbnail/770x578/da5049d861540c404a09f1ffe69e0724/google-nexus-7-2013-review-improved-spec-great-screen-top-value.jpg",
          name: "L-Slate Mini",
          display: "800x600 Resistive touchscreen",
          processor: "L6 Processor",
          ram: "1GB RAM",
          storage: "16GB Internal",
          graphics: "Graphics: They exist",
          feature1: "L-OS 6",
          feature2: "Free Screen Cleaning Kit!",
          ports: "30-pin dock connector",
          price: "€199.99"
        },
        {
          id: 2,
          imgSrc: "https://i5.walmartimages.com/asr/655549f9-1e5d-4811-a733-3182653b1879_1.8a24e465f0f9db1d163e098c3689352e.jpeg",
          name: "L-Slate Oxygen",
          display: "720p Capacitive Touchscreen",
          processor: "L6 Processor",
          ram: "2GB RAM",
          storage: "32GB Internal, Compact Flash slot (up to 32GB)",
          graphics: "NVIDIA don't like us",
          feature1: "L-OS 6",
          feature2: "Always-on Webcam & Microphone",
          ports: "30-pin dock connector",
          price: "€399.99"
        },
        {
          id: 3,
          imgSrc: "https://cdn.mos.cms.futurecdn.net/8LtwVjsqpUK4Fy7Evjabrj.jpg",
          name: "L-Slate Artist Edition",
          display: "Full HD Display, 10-point Multitouch",
          processor: "L6X Processor",
          ram: "8GB RAM",
          storage: "128GB Flash Storage",
          graphics: "",
          feature1: "L-OS 6",
          feature2: "Lemon Crayon Not Included",
          ports: "USB 1.0",
          price: "€999.99"
        }
      ]
      , shoppingItemsLTV: [
        {
          id: 1,
          imgSrc: "https://zdnet2.cbsistatic.com/hub/i/r/2014/08/22/cd61ad19-29ac-11e4-9e6a-00505685119a/thumbnail/770x578/da5049d861540c404a09f1ffe69e0724/google-nexus-7-2013-review-improved-spec-great-screen-top-value.jpg",
          name: "L-Slate Mini",
          display: "800x600 Resistive touchscreen",
          processor: "L6 Processor",
          ram: "1GB RAM",
          storage: "16GB Internal",
          graphics: "Graphics: They exist",
          feature1: "L-OS 6",
          feature2: "Free Screen Cleaning Kit!",
          ports: "30-pin dock connector",
          price: "€199.99"
        },
        {
          id: 2,
          imgSrc: "https://i5.walmartimages.com/asr/655549f9-1e5d-4811-a733-3182653b1879_1.8a24e465f0f9db1d163e098c3689352e.jpeg",
          name: "L-Slate Oxygen",
          display: "720p Capacitive Touchscreen",
          processor: "L6 Processor",
          ram: "2GB RAM",
          storage: "32GB Internal, Compact Flash slot (up to 32GB)",
          graphics: "NVIDIA don't like us",
          feature1: "L-OS 6",
          feature2: "Always-on Webcam & Microphone",
          ports: "30-pin dock connector",
          price: "€399.99"
        },
        {
          id: 3,
          imgSrc: "https://cdn.mos.cms.futurecdn.net/8LtwVjsqpUK4Fy7Evjabrj.jpg",
          name: "L-Slate Artist Edition",
          display: "Full HD Display, 10-point Multitouch",
          processor: "L6X Processor",
          ram: "8GB RAM",
          storage: "128GB Flash Storage",
          graphics: "",
          feature1: "L-OS 6",
          feature2: "Lemon Crayon Not Included",
          ports: "USB 1.0",
          price: "€999.99"
        }
      ]
      , shoppingItemsLBeat: [
        {
          id: 1,
          imgSrc: "https://zdnet2.cbsistatic.com/hub/i/r/2014/08/22/cd61ad19-29ac-11e4-9e6a-00505685119a/thumbnail/770x578/da5049d861540c404a09f1ffe69e0724/google-nexus-7-2013-review-improved-spec-great-screen-top-value.jpg",
          name: "L-Slate Mini",
          display: "800x600 Resistive touchscreen",
          processor: "L6 Processor",
          ram: "1GB RAM",
          storage: "16GB Internal",
          graphics: "Graphics: They exist",
          feature1: "L-OS 6",
          feature2: "Free Screen Cleaning Kit!",
          ports: "30-pin dock connector",
          price: "€199.99"
        },
        {
          id: 2,
          imgSrc: "https://i5.walmartimages.com/asr/655549f9-1e5d-4811-a733-3182653b1879_1.8a24e465f0f9db1d163e098c3689352e.jpeg",
          name: "L-Slate Oxygen",
          display: "720p Capacitive Touchscreen",
          processor: "L6 Processor",
          ram: "2GB RAM",
          storage: "32GB Internal, Compact Flash slot (up to 32GB)",
          graphics: "NVIDIA don't like us",
          feature1: "L-OS 6",
          feature2: "Always-on Webcam & Microphone",
          ports: "30-pin dock connector",
          price: "€399.99"
        },
        {
          id: 3,
          imgSrc: "https://cdn.mos.cms.futurecdn.net/8LtwVjsqpUK4Fy7Evjabrj.jpg",
          name: "L-Slate Artist Edition",
          display: "Full HD Display, 10-point Multitouch",
          processor: "L6X Processor",
          ram: "8GB RAM",
          storage: "128GB Flash Storage",
          graphics: "",
          feature1: "L-OS 6",
          feature2: "Lemon Crayon Not Included",
          ports: "USB 1.0",
          price: "€999.99"
        }
      ]

    }
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar items={this.state.navbarItems} />
          <Route path="/" component={Welcome} />
          <Route path="/lis" render={(props) => <Shopping items={this.state.shoppingItemsLis} />} />
          <Route path="/lslate" render={(props) => <Shopping items={this.state.shoppingItemsLSlate} />} />
          <Route path="/lhandi" render={(props) => <Shopping items={this.state.shoppingItemsLHandi} />} />
          <Route path="/lwrist" render={(props) => <Shopping items={this.state.shoppingItemsLWrist} />} />
          <Route path="/ltv" render={(props) => <Shopping items={this.state.shoppingItemsLTV} />} />
          <Route path="/lbeat" render={(props) => <Shopping items={this.state.shoppingItemsLBeat} />} />
          <Route path="/lhelp" component={Help} />
        </BrowserRouter>
      </div>

    );
  }
}


