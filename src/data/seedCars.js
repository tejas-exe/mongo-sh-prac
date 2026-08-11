const seedCars = [
  {
    basicInfo: {
      brand: 'BMW',
      model: 'M340i',
      variant: 'xDrive',
      year: 2026,
      bodyType: 'Sedan',
      color: {
        exterior: 'Alpine White',
        interior: 'Black Vernasca Leather',
        metallic: false
      },
      countryOfManufacture: 'Germany'
    },
    engine: {
      type: 'Petrol',
      configuration: 'Inline-6',
      displacement: { value: 2998, unit: 'cc' },
      turbocharged: true,
      power: { value: 374, unit: 'hp', rpm: 5500 },
      torque: { value: 500, unit: 'Nm', rpm: 1900 },
      transmission: { type: 'Automatic', gears: 8, name: 'Steptronic Sport' },
      drivetrain: 'AWD',
      fuelSystem: { injection: 'Direct Injection', fuelType: 'Petrol' }
    },
    performance: {
      topSpeed: { value: 250, unit: 'km/h' },
      acceleration: {
        zeroToHundred: { value: 4.4, unit: 'seconds' },
        zeroToTwoHundred: { value: 15.2, unit: 'seconds' }
      },
      braking: {
        front: { type: 'Ventilated Disc', diameter: 374, unit: 'mm' },
        rear: { type: 'Ventilated Disc', diameter: 345, unit: 'mm' }
      },
      handling: {
        steeringType: 'Electric Power Steering',
        steeringRatio: 'Variable',
        suspension: {
          front: 'Double Joint Spring Strut',
          rear: 'Five-Link',
          adaptive: true
        }
      }
    },
    dimensions: {
      length: { value: 4794, unit: 'mm' },
      width: { value: 1827, unit: 'mm' },
      height: { value: 1440, unit: 'mm' },
      wheelbase: { value: 2857, unit: 'mm' },
      groundClearance: { value: 130, unit: 'mm' },
      curbWeight: { value: 1800, unit: 'kg' },
      seatingCapacity: 5,
      doors: 4
    },
    wheels: {
      front: {
        size: '225/40 R19',
        rim: { diameter: 19, material: 'Alloy', design: 'Double-Spoke' }
      },
      rear: {
        size: '255/35 R19',
        rim: { diameter: 19, material: 'Alloy', design: 'Double-Spoke' }
      },
      spareWheel: { available: false, type: 'Run-flat tires' }
    },
    fuel: {
      tankCapacity: { value: 59, unit: 'liters' },
      fuelType: 'Petrol',
      mileage: {
        city: { value: 9, unit: 'km/l' },
        highway: { value: 14, unit: 'km/l' },
        combined: { value: 11.5, unit: 'km/l' }
      },
      emissionStandard: 'Euro 6'
    },
    interior: {
      seats: {
        material: 'Vernasca Leather',
        color: 'Black',
        heated: true,
        ventilated: true,
        electricallyAdjustable: true,
        memoryFunction: true
      },
      dashboard: {
        instrumentCluster: {
          type: 'Digital',
          size: { value: 12.3, unit: 'inch' },
          customizable: true
        },
        infotainment: {
          screenSize: { value: 14.9, unit: 'inch' },
          operatingSystem: 'BMW Operating System 8.5',
          touchScreen: true,
          voiceAssistant: true,
          navigation: true
        }
      },
      comfort: {
        climateControl: { type: 'Automatic', zones: 3 },
        sunroof: { available: true, type: 'Panoramic', electric: true },
        ambientLighting: {
          available: true,
          colors: ['Blue', 'White', 'Red', 'Orange', 'Purple']
        }
      },
      audio: {
        brand: 'Harman Kardon',
        speakers: 16,
        amplifier: { power: 464, unit: 'watts' },
        surroundSound: true
      }
    },
    technology: {
      connectivity: {
        bluetooth: true,
        wifi: true,
        appleCarPlay: true,
        androidAuto: true,
        usbPorts: { typeC: 4, typeA: 1 }
      },
      charging: { wirelessCharging: true, usbCharging: true },
      display: { headsUpDisplay: true, digitalInstrumentCluster: true },
      smartFeatures: {
        keylessEntry: true,
        pushButtonStart: true,
        remoteStart: true,
        mobileAppControl: true,
        overTheAirUpdates: true
      }
    },
    safety: {
      airbags: { front: 2, side: 2, curtain: 2, knee: 2, total: 8 },
      driverAssistance: {
        adaptiveCruiseControl: true,
        laneKeepAssist: true,
        laneDepartureWarning: true,
        blindSpotMonitoring: true,
        rearCrossTrafficAlert: true,
        forwardCollisionWarning: true,
        automaticEmergencyBraking: true,
        trafficSignRecognition: true
      },
      parking: {
        frontSensors: true,
        rearSensors: true,
        surroundViewCamera: true,
        automaticParking: true,
        parkingAssistant: true
      },
      stability: {
        abs: true,
        tractionControl: true,
        electronicStabilityControl: true,
        hillStartAssist: true
      }
    },
    exterior: {
      headlights: {
        type: 'Adaptive LED',
        daytimeRunningLights: true,
        automaticHighBeam: true,
        corneringLights: true
      },
      mirrors: {
        electricallyAdjustable: true,
        heated: true,
        autoDimming: true,
        folding: true
      },
      windows: { powerWindows: true, tinted: true, acousticGlass: true },
      bodyFeatures: {
        spoiler: true,
        sharkFinAntenna: true,
        chromeElements: true,
        aerodynamicKit: true
      }
    },
    pricing: {
      currency: 'INR',
      exShowroom: 7290000,
      onRoad: {
        base: 8450000,
        insurance: 310000,
        registration: 510000,
        taxes: 280000,
        accessories: 85000,
        total: 9435000
      },
      variants: [
        { name: '330i', price: 6230000 },
        { name: 'M340i', price: 7290000 },
        { name: 'M340i xDrive', price: 7590000 }
      ]
    },
    ownership: {
      warranty: {
        vehicle: { duration: 2, unit: 'years' },
        engine: { duration: 3, unit: 'years' }
      },
      service: {
        interval: { distance: 10000, unit: 'km' },
        estimatedAnnualCost: { value: 45000, currency: 'INR' }
      },
      previousOwners: 0,
      serviceHistory: [
        {
          date: '2026-03-15',
          mileage: 5000,
          type: 'First Inspection',
          cost: 12000,
          currency: 'INR',
          replacedParts: []
        },
        {
          date: '2026-08-01',
          mileage: 10000,
          type: 'Regular Service',
          cost: 28000,
          currency: 'INR',
          replacedParts: ['Engine Oil', 'Oil Filter', 'Air Filter']
        }
      ]
    },
    features: [
      'Adaptive Cruise Control',
      'Panoramic Sunroof',
      'Wireless Apple CarPlay',
      'Android Auto',
      '360 Degree Camera',
      'Harman Kardon Audio',
      'Adaptive LED Headlights',
      'Heated Seats',
      'Ventilated Seats',
      'Heads-Up Display',
      'Keyless Entry',
      'Automatic Parking'
    ],
    availableColors: [
      { name: 'Alpine White', code: '#F5F5F5', type: 'Solid' },
      { name: 'Black Sapphire', code: '#050505', type: 'Metallic' },
      { name: 'Portimao Blue', code: '#0066A1', type: 'Metallic' }
    ],
    ratings: {
      performance: 4.8,
      comfort: 4.5,
      safety: 4.9,
      technology: 4.7,
      fuelEconomy: 3.8,
      valueForMoney: 4.1,
      overall: 4.6
    },
    metadata: {
      createdAt: '2026-08-08T10:30:00Z',
      updatedAt: '2026-08-08T11:45:00Z',
      source: 'Car Management System',
      status: 'Available',
      tags: ['luxury', 'performance', 'sedan', 'awd', 'petrol']
    },
    colour: ['white', 'black', 'black', 'red', 'teal']
  },
  {
    basicInfo: {
      brand: 'Ferrari',
      model: 'SF90 Stradale',
      variant: 'Assetto Fiorano',
      year: 2025,
      bodyType: 'Coupe',
      color: { exterior: 'Rosso Corsa', interior: ' Nero Alcantara', metallic: false },
      countryOfManufacture: 'Italy'
    },
    engine: {
      type: 'Hybrid',
      configuration: 'V8',
      displacement: { value: 3990, unit: 'cc' },
      turbocharged: true,
      power: { value: 1000, unit: 'hp', rpm: 7500 },
      torque: { value: 800, unit: 'Nm', rpm: 6000 },
      transmission: { type: 'Dual-Clutch', gears: 8, name: 'F1 DCT' },
      drivetrain: 'AWD',
      fuelSystem: { injection: 'Direct Injection', fuelType: 'Petrol-Electric Hybrid' }
    },
    performance: {
      topSpeed: { value: 340, unit: 'km/h' },
      acceleration: {
        zeroToHundred: { value: 2.5, unit: 'seconds' },
        zeroToTwoHundred: { value: 6.7, unit: 'seconds' }
      },
      braking: {
        front: { type: 'Carbon Ceramic', diameter: 398, unit: 'mm' },
        rear: { type: 'Carbon Ceramic', diameter: 360, unit: 'mm' }
      },
      handling: {
        steeringType: 'Electric Power Steering',
        steeringRatio: 'Direct',
        suspension: { front: 'Multilink', rear: 'Multilink', adaptive: true }
      }
    },
    dimensions: {
      length: { value: 4710, unit: 'mm' },
      width: { value: 1972, unit: 'mm' },
      height: { value: 1186, unit: 'mm' },
      wheelbase: { value: 2650, unit: 'mm' },
      groundClearance: { value: 105, unit: 'mm' },
      curbWeight: { value: 1570, unit: 'kg' },
      seatingCapacity: 2,
      doors: 2
    },
    wheels: {
      front: { size: '255/35 ZR20', rim: { diameter: 20, material: 'Forged Alloy', design: '5-Spoke' } },
      rear: { size: '315/30 ZR20', rim: { diameter: 20, material: 'Forged Alloy', design: '5-Spoke' } },
      spareWheel: { available: false, type: 'Tire Repair Kit' }
    },
    fuel: {
      tankCapacity: { value: 68, unit: 'liters' },
      fuelType: 'Hybrid',
      mileage: {
        city: { value: 6, unit: 'km/l' },
        highway: { value: 10, unit: 'km/l' },
        combined: { value: 8, unit: 'km/l' }
      },
      emissionStandard: 'Euro 6d'
    },
    interior: {
      seats: { material: 'Carbon Racing Bucket', color: 'Nero', heated: false, ventilated: false, electricallyAdjustable: false, memoryFunction: false },
      dashboard: {
        instrumentCluster: { type: 'Digital Curved', size: { value: 16, unit: 'inch' }, customizable: true },
        infotainment: { screenSize: { value: 16, unit: 'inch' }, operatingSystem: 'Ferrari Human-Machine Interface', touchScreen: true, voiceAssistant: true, navigation: true }
      },
      comfort: {
        climateControl: { type: 'Automatic', zones: 2 },
        sunroof: { available: false, type: 'None', electric: false },
        ambientLighting: { available: true, colors: ['Red', 'White'] }
      },
      audio: { brand: 'JBL Professional', speakers: 12, amplifier: { power: 1000, unit: 'watts' }, surroundSound: true }
    },
    technology: {
      connectivity: { bluetooth: true, wifi: true, appleCarPlay: true, androidAuto: false, usbPorts: { typeC: 2, typeA: 0 } },
      charging: { wirelessCharging: true, usbCharging: true },
      display: { headsUpDisplay: true, digitalInstrumentCluster: true },
      smartFeatures: { keylessEntry: true, pushButtonStart: true, remoteStart: false, mobileAppControl: true, overTheAirUpdates: true }
    },
    safety: {
      airbags: { front: 2, side: 2, curtain: 0, knee: 0, total: 4 },
      driverAssistance: { adaptiveCruiseControl: false, laneKeepAssist: false, laneDepartureWarning: true, blindSpotMonitoring: false, rearCrossTrafficAlert: false, forwardCollisionWarning: true, automaticEmergencyBraking: false, trafficSignRecognition: false },
      parking: { frontSensors: true, rearSensors: true, surroundViewCamera: true, automaticParking: false, parkingAssistant: false },
      stability: { abs: true, tractionControl: true, electronicStabilityControl: true, hillStartAssist: true }
    },
    exterior: {
      headlights: { type: 'Matrix LED', daytimeRunningLights: true, automaticHighBeam: true, corneringLights: true },
      mirrors: { electricallyAdjustable: true, heated: true, autoDimming: true, folding: true },
      windows: { powerWindows: true, tinted: true, acousticGlass: false },
      bodyFeatures: { spoiler: true, sharkFinAntenna: false, chromeElements: false, aerodynamicKit: true }
    },
    pricing: {
      currency: 'INR',
      exShowroom: 75000000,
      onRoad: { base: 75000000, insurance: 2500000, registration: 7500000, taxes: 3000000, accessories: 500000, total: 88500000 },
      variants: [
        { name: 'Stradale Base', price: 75000000 },
        { name: 'Assetto Fiorano', price: 83000000 }
      ]
    },
    ownership: {
      warranty: { vehicle: { duration: 3, unit: 'years' }, engine: { duration: 3, unit: 'years' } },
      service: { interval: { distance: 20000, unit: 'km' }, estimatedAnnualCost: { value: 350000, currency: 'INR' } },
      previousOwners: 0,
      serviceHistory: [
        { date: '2025-11-10', mileage: 2500, type: 'First Checkup', cost: 45000, currency: 'INR', replacedParts: ['Braking Fluid'] }
      ]
    },
    features: ['Hybrid V8 Powertrain', 'Assetto Fiorano Package', 'Carbon Fiber Aero Wing', 'Carbon Ceramic Brakes', 'Matrix LED Headlights', 'HUD', 'Curved Digital Cluster'],
    availableColors: [
      { name: 'Rosso Corsa', code: '#CC0000', type: 'Solid' },
      { name: 'Giallo Modena', code: '#FFD700', type: 'Solid' },
      { name: 'Nero Daytona', code: '#1A1A1A', type: 'Metallic' }
    ],
    ratings: { performance: 5.0, comfort: 3.9, safety: 4.6, technology: 4.9, fuelEconomy: 2.9, valueForMoney: 3.5, overall: 4.8 },
    metadata: { createdAt: '2026-07-01T08:00:00Z', updatedAt: '2026-08-01T09:30:00Z', source: 'Supercar Catalog', status: 'Available', tags: ['hypercar', 'hybrid', 'ferrari', 'coupe', 'awd'] },
    colour: ['red', 'yellow', 'black']
  },
  {
    basicInfo: {
      brand: 'Porsche',
      model: '911 GT3 RS',
      variant: 'Weissach Package',
      year: 2024,
      bodyType: 'Coupe',
      color: { exterior: 'GT Silver Metallic', interior: 'Black/Guards Red Leather', metallic: true },
      countryOfManufacture: 'Germany'
    },
    engine: {
      type: 'Petrol',
      configuration: 'Flat-6',
      displacement: { value: 3996, unit: 'cc' },
      turbocharged: false,
      power: { value: 525, unit: 'hp', rpm: 8500 },
      torque: { value: 465, unit: 'Nm', rpm: 6300 },
      transmission: { type: 'Automatic', gears: 7, name: 'PDK' },
      drivetrain: 'RWD',
      fuelSystem: { injection: 'Direct Injection', fuelType: 'Petrol' }
    },
    performance: {
      topSpeed: { value: 296, unit: 'km/h' },
      acceleration: {
        zeroToHundred: { value: 3.2, unit: 'seconds' },
        zeroToTwoHundred: { value: 10.6, unit: 'seconds' }
      },
      braking: {
        front: { type: 'PCCB Ceramic', diameter: 410, unit: 'mm' },
        rear: { type: 'PCCB Ceramic', diameter: 390, unit: 'mm' }
      },
      handling: {
        steeringType: 'Rear-Wheel Steering + Electric Power',
        steeringRatio: 'Variable',
        suspension: { front: 'Double Wishbone', rear: 'Multi-Link', adaptive: true }
      }
    },
    dimensions: {
      length: { value: 4572, unit: 'mm' },
      width: { value: 1900, unit: 'mm' },
      height: { value: 1322, unit: 'mm' },
      wheelbase: { value: 2457, unit: 'mm' },
      groundClearance: { value: 100, unit: 'mm' },
      curbWeight: { value: 1450, unit: 'kg' },
      seatingCapacity: 2,
      doors: 2
    },
    wheels: {
      front: { size: '275/35 ZR20', rim: { diameter: 20, material: 'Forged Magnesium', design: 'Center Lock' } },
      rear: { size: '335/30 ZR21', rim: { diameter: 21, material: 'Forged Magnesium', design: 'Center Lock' } },
      spareWheel: { available: false, type: 'Tire Sealer' }
    },
    fuel: {
      tankCapacity: { value: 64, unit: 'liters' },
      fuelType: 'Petrol',
      mileage: { city: { value: 5.5, unit: 'km/l' }, highway: { value: 9.0, unit: 'km/l' }, combined: { value: 7.2, unit: 'km/l' } },
      emissionStandard: 'Euro 6'
    },
    interior: {
      seats: { material: 'Leather & Race-Tex', color: 'Black/Red', heated: false, ventilated: false, electricallyAdjustable: false, memoryFunction: false },
      dashboard: {
        instrumentCluster: { type: 'Analog + Dual Screen', size: { value: 7, unit: 'inch' }, customizable: true },
        infotainment: { screenSize: { value: 10.9, unit: 'inch' }, operatingSystem: 'PCM 6.0', touchScreen: true, voiceAssistant: true, navigation: true }
      },
      comfort: {
        climateControl: { type: 'Automatic', zones: 2 },
        sunroof: { available: false, type: 'None', electric: false },
        ambientLighting: { available: true, colors: ['White', 'Red'] }
      },
      audio: { brand: 'Bose', speakers: 8, amplifier: { power: 150, unit: 'watts' }, surroundSound: false }
    },
    technology: {
      connectivity: { bluetooth: true, wifi: true, appleCarPlay: true, androidAuto: true, usbPorts: { typeC: 2, typeA: 0 } },
      charging: { wirelessCharging: false, usbCharging: true },
      display: { headsUpDisplay: false, digitalInstrumentCluster: true },
      smartFeatures: { keylessEntry: true, pushButtonStart: true, remoteStart: false, mobileAppControl: true, overTheAirUpdates: true }
    },
    safety: {
      airbags: { front: 2, side: 2, curtain: 2, knee: 0, total: 6 },
      driverAssistance: { adaptiveCruiseControl: false, laneKeepAssist: false, laneDepartureWarning: true, blindSpotMonitoring: false, rearCrossTrafficAlert: false, forwardCollisionWarning: false, automaticEmergencyBraking: false, trafficSignRecognition: true },
      parking: { frontSensors: false, rearSensors: true, surroundViewCamera: false, automaticParking: false, parkingAssistant: false },
      stability: { abs: true, tractionControl: true, electronicStabilityControl: true, hillStartAssist: true }
    },
    exterior: {
      headlights: { type: 'LED Matrix System', daytimeRunningLights: true, automaticHighBeam: true, corneringLights: true },
      mirrors: { electricallyAdjustable: true, heated: true, autoDimming: true, folding: false },
      windows: { powerWindows: true, tinted: true, acousticGlass: false },
      bodyFeatures: { spoiler: true, sharkFinAntenna: false, chromeElements: false, aerodynamicKit: true }
    },
    pricing: {
      currency: 'INR',
      exShowroom: 35000000,
      onRoad: { base: 35000000, insurance: 1200000, registration: 3500000, taxes: 1400000, accessories: 400000, total: 41500000 },
      variants: [
        { name: 'GT3 Standard', price: 27500000 },
        { name: 'GT3 RS Weissach', price: 35000000 }
      ]
    },
    ownership: {
      warranty: { vehicle: { duration: 4, unit: 'years' }, engine: { duration: 4, unit: 'years' } },
      service: { interval: { distance: 15000, unit: 'km' }, estimatedAnnualCost: { value: 180000, currency: 'INR' } },
      previousOwners: 0,
      serviceHistory: [
        { date: '2025-05-12', mileage: 12000, type: 'Track Prep Service', cost: 65000, currency: 'INR', replacedParts: ['Brake Pads', 'Tires'] }
      ]
    },
    features: ['DRS Active Wing', 'Weissach Carbon Roof', 'Roll Cage', 'Rear-Wheel Steering', 'PCCB Brakes', 'Launch Control'],
    availableColors: [
      { name: 'GT Silver Metallic', code: '#A5A9B0', type: 'Metallic' },
      { name: 'Python Green', code: '#00AA44', type: 'Special' },
      { name: 'White', code: '#FFFFFF', type: 'Solid' }
    ],
    ratings: { performance: 5.0, comfort: 3.5, safety: 4.7, technology: 4.6, fuelEconomy: 2.8, valueForMoney: 4.4, overall: 4.9 },
    metadata: { createdAt: '2026-06-15T12:00:00Z', updatedAt: '2026-08-05T14:20:00Z', source: 'Porsche Dealer', status: 'Available', tags: ['track-weapon', 'naturally-aspirated', 'rwd', 'porsche'] },
    colour: ['silver', 'green', 'white']
  },
  {
    basicInfo: {
      brand: 'Lamborghini',
      model: 'Revuelto',
      variant: 'V12 Hybrid',
      year: 2026,
      bodyType: 'Coupe',
      color: { exterior: 'Arancio Apodis', interior: 'Nero Ade & Arancio Dryope', metallic: true },
      countryOfManufacture: 'Italy'
    },
    engine: {
      type: 'Hybrid',
      configuration: 'V12',
      displacement: { value: 6498, unit: 'cc' },
      turbocharged: false,
      power: { value: 1015, unit: 'hp', rpm: 9250 },
      torque: { value: 725, unit: 'Nm', rpm: 6750 },
      transmission: { type: 'Dual-Clutch', gears: 8, name: 'E-DCT' },
      drivetrain: 'AWD',
      fuelSystem: { injection: 'Multi-Point Injection', fuelType: 'Petrol-Electric Hybrid' }
    },
    performance: {
      topSpeed: { value: 350, unit: 'km/h' },
      acceleration: {
        zeroToHundred: { value: 2.5, unit: 'seconds' },
        zeroToTwoHundred: { value: 7.0, unit: 'seconds' }
      },
      braking: {
        front: { type: 'CCB Plus Carbon Ceramic', diameter: 410, unit: 'mm' },
        rear: { type: 'CCB Plus Carbon Ceramic', diameter: 390, unit: 'mm' }
      },
      handling: {
        steeringType: 'Four-Wheel Steering',
        steeringRatio: 'Dynamic',
        suspension: { front: 'Double Wishbone Pushrod', rear: 'Double Wishbone Pushrod', adaptive: true }
      }
    },
    dimensions: {
      length: { value: 4947, unit: 'mm' },
      width: { value: 2033, unit: 'mm' },
      height: { value: 1160, unit: 'mm' },
      wheelbase: { value: 2779, unit: 'mm' },
      groundClearance: { value: 110, unit: 'mm' },
      curbWeight: { value: 1772, unit: 'kg' },
      seatingCapacity: 2,
      doors: 2
    },
    wheels: {
      front: { size: '265/35 ZRF20', rim: { diameter: 20, material: 'Alloy', design: 'Y-Spoke' } },
      rear: { size: '345/30 ZRF21', rim: { diameter: 21, material: 'Alloy', design: 'Y-Spoke' } },
      spareWheel: { available: false, type: 'Kit' }
    },
    fuel: {
      tankCapacity: { value: 72, unit: 'liters' },
      fuelType: 'Hybrid',
      mileage: { city: { value: 5.0, unit: 'km/l' }, highway: { value: 8.5, unit: 'km/l' }, combined: { value: 6.8, unit: 'km/l' } },
      emissionStandard: 'Euro 6d'
    },
    interior: {
      seats: { material: 'Leather & Alcantara', color: 'Nero/Arancio', heated: true, ventilated: false, electricallyAdjustable: true, memoryFunction: true },
      dashboard: {
        instrumentCluster: { type: 'Digital', size: { value: 12.3, unit: 'inch' }, customizable: true },
        infotainment: { screenSize: { value: 8.4, unit: 'inch' }, operatingSystem: 'Lamborghini Infotainment', touchScreen: true, voiceAssistant: true, navigation: true }
      },
      comfort: {
        climateControl: { type: 'Automatic', zones: 2 },
        sunroof: { available: false, type: 'None', electric: false },
        ambientLighting: { available: true, colors: ['Orange', 'Red', 'White', 'Blue'] }
      },
      audio: { brand: 'Sonus Faber', speakers: 10, amplifier: { power: 750, unit: 'watts' }, surroundSound: true }
    },
    technology: {
      connectivity: { bluetooth: true, wifi: true, appleCarPlay: true, androidAuto: true, usbPorts: { typeC: 3, typeA: 0 } },
      charging: { wirelessCharging: true, usbCharging: true },
      display: { headsUpDisplay: false, digitalInstrumentCluster: true },
      smartFeatures: { keylessEntry: true, pushButtonStart: true, remoteStart: true, mobileAppControl: true, overTheAirUpdates: true }
    },
    safety: {
      airbags: { front: 2, side: 2, curtain: 2, knee: 0, total: 6 },
      driverAssistance: { adaptiveCruiseControl: true, laneKeepAssist: true, laneDepartureWarning: true, blindSpotMonitoring: true, rearCrossTrafficAlert: true, forwardCollisionWarning: true, automaticEmergencyBraking: true, trafficSignRecognition: true },
      parking: { frontSensors: true, rearSensors: true, surroundViewCamera: true, automaticParking: false, parkingAssistant: true },
      stability: { abs: true, tractionControl: true, electronicStabilityControl: true, hillStartAssist: true }
    },
    exterior: {
      headlights: { type: 'Y-Shape Matrix LED', daytimeRunningLights: true, automaticHighBeam: true, corneringLights: true },
      mirrors: { electricallyAdjustable: true, heated: true, autoDimming: true, folding: true },
      windows: { powerWindows: true, tinted: true, acousticGlass: true },
      bodyFeatures: { spoiler: true, sharkFinAntenna: true, chromeElements: false, aerodynamicKit: true }
    },
    pricing: {
      currency: 'INR',
      exShowroom: 88900000,
      onRoad: { base: 88900000, insurance: 3000000, registration: 8900000, taxes: 3500000, accessories: 700000, total: 105000000 },
      variants: [{ name: 'V12 HPEV', price: 88900000 }]
    },
    ownership: {
      warranty: { vehicle: { duration: 3, unit: 'years' }, engine: { duration: 3, unit: 'years' } },
      service: { interval: { distance: 12000, unit: 'km' }, estimatedAnnualCost: { value: 400000, currency: 'INR' } },
      previousOwners: 0,
      serviceHistory: []
    },
    features: ['V12 Tri-Motor Hybrid', 'Scissor Doors', 'Four-Wheel Steering', 'Carbon Monofuselage', 'Active Rear Aerodynamics', 'Sonus Faber Audio'],
    availableColors: [
      { name: 'Arancio Apodis', code: '#FF5500', type: 'Metallic' },
      { name: 'Verde Shock', code: '#76FF03', type: 'Pearl' },
      { name: 'Grigio Titans', code: '#555555', type: 'Matte' }
    ],
    ratings: { performance: 5.0, comfort: 4.2, safety: 4.8, technology: 4.8, fuelEconomy: 3.1, valueForMoney: 3.8, overall: 4.9 },
    metadata: { createdAt: '2026-08-01T10:00:00Z', updatedAt: '2026-08-08T11:00:00Z', source: 'Lamborghini Dealer', status: 'Available', tags: ['v12', 'lamborghini', 'flagship', 'hybrid'] },
    colour: ['orange', 'green', 'grey']
  },
  {
    basicInfo: {
      brand: 'Mercedes-AMG',
      model: 'GT Black Series',
      variant: 'Track Edition',
      year: 2023,
      bodyType: 'Coupe',
      color: { exterior: 'AMG Magmabeam', interior: 'Exclusive Nappa Leather / DINAMICA', metallic: true },
      countryOfManufacture: 'Germany'
    },
    engine: {
      type: 'Petrol',
      configuration: 'V8',
      displacement: { value: 3982, unit: 'cc' },
      turbocharged: true,
      power: { value: 730, unit: 'hp', rpm: 6700 },
      torque: { value: 800, unit: 'Nm', rpm: 2000 },
      transmission: { type: 'Automatic', gears: 7, name: 'AMG SPEEDSHIFT DCT 7G' },
      drivetrain: 'RWD',
      fuelSystem: { injection: 'Direct Injection', fuelType: 'Petrol' }
    },
    performance: {
      topSpeed: { value: 325, unit: 'km/h' },
      acceleration: {
        zeroToHundred: { value: 3.2, unit: 'seconds' },
        zeroToTwoHundred: { value: 9.0, unit: 'seconds' }
      },
      braking: {
        front: { type: 'AMG Ceramic High-Performance', diameter: 402, unit: 'mm' },
        rear: { type: 'AMG Ceramic High-Performance', diameter: 360, unit: 'mm' }
      },
      handling: {
        steeringType: 'Speed-Sensitive Sports Steering',
        steeringRatio: 'Variable',
        suspension: { front: 'Double Wishbone', rear: 'Double Wishbone', adaptive: true }
      }
    },
    dimensions: {
      length: { value: 4604, unit: 'mm' },
      width: { value: 2075, unit: 'mm' },
      height: { value: 1280, unit: 'mm' },
      wheelbase: { value: 2630, unit: 'mm' },
      groundClearance: { value: 115, unit: 'mm' },
      curbWeight: { value: 1540, unit: 'kg' },
      seatingCapacity: 2,
      doors: 2
    },
    wheels: {
      front: { size: '285/35 ZR19', rim: { diameter: 19, material: 'Forged 10-Spoke', design: 'Matte Black' } },
      rear: { size: '335/30 ZR20', rim: { diameter: 20, material: 'Forged 10-Spoke', design: 'Matte Black' } },
      spareWheel: { available: false, type: 'TIREFIT' }
    },
    fuel: {
      tankCapacity: { value: 75, unit: 'liters' },
      fuelType: 'Petrol',
      mileage: { city: { value: 5.2, unit: 'km/l' }, highway: { value: 8.8, unit: 'km/l' }, combined: { value: 7.0, unit: 'km/l' } },
      emissionStandard: 'Euro 6'
    },
    interior: {
      seats: { material: 'AMG Bucket Seats in Carbon', color: 'Black/Orange', heated: false, ventilated: false, electricallyAdjustable: false, memoryFunction: false },
      dashboard: {
        instrumentCluster: { type: 'Digital', size: { value: 12.3, unit: 'inch' }, customizable: true },
        infotainment: { screenSize: { value: 10.25, unit: 'inch' }, operatingSystem: 'COMAND Online', touchScreen: true, voiceAssistant: true, navigation: true }
      },
      comfort: {
        climateControl: { type: 'Automatic', zones: 2 },
        sunroof: { available: false, type: 'None', electric: false },
        ambientLighting: { available: true, colors: ['Orange', 'Yellow'] }
      },
      audio: { brand: 'Burmester High-End 3D', speakers: 11, amplifier: { power: 1000, unit: 'watts' }, surroundSound: true }
    },
    technology: {
      connectivity: { bluetooth: true, wifi: true, appleCarPlay: true, androidAuto: true, usbPorts: { typeC: 2, typeA: 1 } },
      charging: { wirelessCharging: false, usbCharging: true },
      display: { headsUpDisplay: false, digitalInstrumentCluster: true },
      smartFeatures: { keylessEntry: true, pushButtonStart: true, remoteStart: false, mobileAppControl: true, overTheAirUpdates: true }
    },
    safety: {
      airbags: { front: 2, side: 2, curtain: 2, knee: 1, total: 7 },
      driverAssistance: { adaptiveCruiseControl: true, laneKeepAssist: true, laneDepartureWarning: true, blindSpotMonitoring: true, rearCrossTrafficAlert: true, forwardCollisionWarning: true, automaticEmergencyBraking: true, trafficSignRecognition: true },
      parking: { frontSensors: true, rearSensors: true, surroundViewCamera: true, automaticParking: false, parkingAssistant: false },
      stability: { abs: true, tractionControl: true, electronicStabilityControl: true, hillStartAssist: true }
    },
    exterior: {
      headlights: { type: 'LED High Performance', daytimeRunningLights: true, automaticHighBeam: true, corneringLights: true },
      mirrors: { electricallyAdjustable: true, heated: true, autoDimming: true, folding: true },
      windows: { powerWindows: true, tinted: true, acousticGlass: true },
      bodyFeatures: { spoiler: true, sharkFinAntenna: false, chromeElements: false, aerodynamicKit: true }
    },
    pricing: {
      currency: 'INR',
      exShowroom: 55000000,
      onRoad: { base: 55000000, insurance: 2000000, registration: 5500000, taxes: 2200000, accessories: 300000, total: 65000000 },
      variants: [{ name: 'Black Series', price: 55000000 }]
    },
    ownership: {
      warranty: { vehicle: { duration: 3, unit: 'years' }, engine: { duration: 3, unit: 'years' } },
      service: { interval: { distance: 10000, unit: 'km' }, estimatedAnnualCost: { value: 250000, currency: 'INR' } },
      previousOwners: 1,
      serviceHistory: [
        { date: '2024-04-10', mileage: 8000, type: 'Annual Service', cost: 120000, currency: 'INR', replacedParts: ['Engine Oil', 'Spark Plugs'] }
      ]
    },
    features: ['Flat-Plane V8 Crankshaft', 'Two-Stage Carbon Rear Wing', 'AMG Traction Control 9-Stage', 'Burmester 3D Surround', 'AMG Track Pace'],
    availableColors: [
      { name: 'AMG Magmabeam', code: '#E65100', type: 'Special' },
      { name: 'High-Tech Silver', code: '#D0D0D0', type: 'Metallic' },
      { name: 'Obsidian Black', code: '#111111', type: 'Metallic' }
    ],
    ratings: { performance: 4.9, comfort: 3.7, safety: 4.8, technology: 4.5, fuelEconomy: 2.7, valueForMoney: 4.0, overall: 4.7 },
    metadata: { createdAt: '2026-05-10T14:00:00Z', updatedAt: '2026-07-20T16:00:00Z', source: 'AMG Center', status: 'Available', tags: ['track-focused', 'v8', 'amg', 'rwd'] },
    colour: ['orange', 'silver', 'black']
  },
  {
    basicInfo: {
      brand: 'Audi',
      model: 'R8 V10 Performance',
      variant: 'decapotable Spyder',
      year: 2024,
      bodyType: 'Convertible',
      color: { exterior: 'Kemora Gray Metallic', interior: 'Express Red Nappa Leather', metallic: true },
      countryOfManufacture: 'Germany'
    },
    engine: {
      type: 'Petrol',
      configuration: 'V10',
      displacement: { value: 5204, unit: 'cc' },
      turbocharged: false,
      power: { value: 620, unit: 'hp', rpm: 8000 },
      torque: { value: 580, unit: 'Nm', rpm: 6500 },
      transmission: { type: 'Automatic', gears: 7, name: 'S tronic' },
      drivetrain: 'AWD',
      fuelSystem: { injection: 'Direct & Port Injection', fuelType: 'Petrol' }
    },
    performance: {
      topSpeed: { value: 329, unit: 'km/h' },
      acceleration: {
        zeroToHundred: { value: 3.2, unit: 'seconds' },
        zeroToTwoHundred: { value: 10.1, unit: 'seconds' }
      },
      braking: {
        front: { type: 'Ceramic Disc', diameter: 380, unit: 'mm' },
        rear: { type: 'Ceramic Disc', diameter: 356, unit: 'mm' }
      },
      handling: {
        steeringType: 'Dynamic Steering',
        steeringRatio: 'Variable',
        suspension: { front: 'Double Wishbone', rear: 'Double Wishbone', adaptive: true }
      }
    },
    dimensions: {
      length: { value: 4429, unit: 'mm' },
      width: { value: 1940, unit: 'mm' },
      height: { value: 1242, unit: 'mm' },
      wheelbase: { value: 2650, unit: 'mm' },
      groundClearance: { value: 120, unit: 'mm' },
      curbWeight: { value: 1695, unit: 'kg' },
      seatingCapacity: 2,
      doors: 2
    },
    wheels: {
      front: { size: '245/30 R20', rim: { diameter: 20, material: 'Alloy', design: '5-V-Spoke' } },
      rear: { size: '305/30 R20', rim: { diameter: 20, material: 'Alloy', design: '5-V-Spoke' } },
      spareWheel: { available: false, type: 'Tire Repair Kit' }
    },
    fuel: {
      tankCapacity: { value: 83, unit: 'liters' },
      fuelType: 'Petrol',
      mileage: { city: { value: 6.0, unit: 'km/l' }, highway: { value: 10.2, unit: 'km/l' }, combined: { value: 7.8, unit: 'km/l' } },
      emissionStandard: 'Euro 6'
    },
    interior: {
      seats: { material: 'Fine Nappa Leather', color: 'Express Red', heated: true, ventilated: false, electricallyAdjustable: true, memoryFunction: false },
      dashboard: {
        instrumentCluster: { type: 'Audi Virtual Cockpit', size: { value: 12.3, unit: 'inch' }, customizable: true },
        infotainment: { screenSize: { value: 12.3, unit: 'inch' }, operatingSystem: 'MMI Navigation Plus', touchScreen: false, voiceAssistant: true, navigation: true }
      },
      comfort: {
        climateControl: { type: 'Automatic', zones: 2 },
        sunroof: { available: false, type: 'Soft-top convertible', electric: true },
        ambientLighting: { available: true, colors: ['White', 'Red', 'Blue'] }
      },
      audio: { brand: 'Bang & Olufsen', speakers: 13, amplifier: { power: 550, unit: 'watts' }, surroundSound: true }
    },
    technology: {
      connectivity: { bluetooth: true, wifi: true, appleCarPlay: true, androidAuto: true, usbPorts: { typeC: 2, typeA: 0 } },
      charging: { wirelessCharging: true, usbCharging: true },
      display: { headsUpDisplay: false, digitalInstrumentCluster: true },
      smartFeatures: { keylessEntry: true, pushButtonStart: true, remoteStart: false, mobileAppControl: true, overTheAirUpdates: false }
    },
    safety: {
      airbags: { front: 2, side: 2, curtain: 0, knee: 2, total: 6 },
      driverAssistance: { adaptiveCruiseControl: false, laneKeepAssist: false, laneDepartureWarning: true, blindSpotMonitoring: true, rearCrossTrafficAlert: true, forwardCollisionWarning: false, automaticEmergencyBraking: false, trafficSignRecognition: true },
      parking: { frontSensors: true, rearSensors: true, surroundViewCamera: true, automaticParking: false, parkingAssistant: false },
      stability: { abs: true, tractionControl: true, electronicStabilityControl: true, hillStartAssist: true }
    },
    exterior: {
      headlights: { type: 'Laser Light + LED', daytimeRunningLights: true, automaticHighBeam: true, corneringLights: true },
      mirrors: { electricallyAdjustable: true, heated: true, autoDimming: true, folding: true },
      windows: { powerWindows: true, tinted: true, acousticGlass: false },
      bodyFeatures: { spoiler: true, sharkFinAntenna: false, chromeElements: true, aerodynamicKit: false }
    },
    pricing: {
      currency: 'INR',
      exShowroom: 27200000,
      onRoad: { base: 27200000, insurance: 950000, registration: 2700000, taxes: 1100000, accessories: 250000, total: 32200000 },
      variants: [
        { name: 'Coupe V10', price: 25000000 },
        { name: 'Spyder V10 Performance', price: 27200000 }
      ]
    },
    ownership: {
      warranty: { vehicle: { duration: 2, unit: 'years' }, engine: { duration: 2, unit: 'years' } },
      service: { interval: { distance: 15000, unit: 'km' }, estimatedAnnualCost: { value: 120000, currency: 'INR' } },
      previousOwners: 0,
      serviceHistory: [
        { date: '2025-02-18', mileage: 15000, type: 'Regular Service', cost: 78000, currency: 'INR', replacedParts: ['Engine Oil', 'Cabin Filter'] }
      ]
    },
    features: ['V10 Engine', 'quattro AWD System', 'Bang & Olufsen Audio', 'Laser Headlights', 'Virtual Cockpit', 'Soft Top Convertible'],
    availableColors: [
      { name: 'Kemora Gray', code: '#607D8B', type: 'Metallic' },
      { name: 'Mythos Black', code: '#0A0A0A', type: 'Metallic' },
      { name: 'Tango Red', code: '#D32F2F', type: 'Metallic' }
    ],
    ratings: { performance: 4.7, comfort: 4.6, safety: 4.5, technology: 4.6, fuelEconomy: 3.3, valueForMoney: 4.5, overall: 4.6 },
    metadata: { createdAt: '2026-04-12T09:00:00Z', updatedAt: '2026-07-11T12:00:00Z', source: 'Audi Center', status: 'Available', tags: ['v10', 'audi', 'convertible', 'awd'] },
    colour: ['grey', 'black', 'red']
  },
  {
    basicInfo: {
      brand: 'McLaren',
      model: '720S',
      variant: 'Performance Spider',
      year: 2024,
      bodyType: 'Convertible',
      color: { exterior: 'McLaren Orange', interior: 'Black Alcantara with Orange Stitching', metallic: false },
      countryOfManufacture: 'United Kingdom'
    },
    engine: {
      type: 'Petrol',
      configuration: 'V8',
      displacement: { value: 3994, unit: 'cc' },
      turbocharged: true,
      power: { value: 720, unit: 'hp', rpm: 7500 },
      torque: { value: 770, unit: 'Nm', rpm: 5500 },
      transmission: { type: 'Automatic', gears: 7, name: 'SSG 7-Speed' },
      drivetrain: 'RWD',
      fuelSystem: { injection: 'Port Injection', fuelType: 'Petrol' }
    },
    performance: {
      topSpeed: { value: 341, unit: 'km/h' },
      acceleration: {
        zeroToHundred: { value: 2.9, unit: 'seconds' },
        zeroToTwoHundred: { value: 7.9, unit: 'seconds' }
      },
      braking: {
        front: { type: 'Carbon Ceramic', diameter: 390, unit: 'mm' },
        rear: { type: 'Carbon Ceramic', diameter: 380, unit: 'mm' }
      },
      handling: {
        steeringType: 'Electro-Hydraulic Power Steering',
        steeringRatio: 'Quick',
        suspension: { front: 'Proactive Chassis Control II', rear: 'Proactive Chassis Control II', adaptive: true }
      }
    },
    dimensions: {
      length: { value: 4543, unit: 'mm' },
      width: { value: 2161, unit: 'mm' },
      height: { value: 1196, unit: 'mm' },
      wheelbase: { value: 2670, unit: 'mm' },
      groundClearance: { value: 107, unit: 'mm' },
      curbWeight: { value: 1468, unit: 'kg' },
      seatingCapacity: 2,
      doors: 2
    },
    wheels: {
      front: { size: '245/35 R19', rim: { diameter: 19, material: 'Forged Alloy', design: '10-Spoke' } },
      rear: { size: '305/30 R20', rim: { diameter: 20, material: 'Forged Alloy', design: '10-Spoke' } },
      spareWheel: { available: false, type: 'Repair Kit' }
    },
    fuel: {
      tankCapacity: { value: 72, unit: 'liters' },
      fuelType: 'Petrol',
      mileage: { city: { value: 5.5, unit: 'km/l' }, highway: { value: 9.5, unit: 'km/l' }, combined: { value: 7.5, unit: 'km/l' } },
      emissionStandard: 'Euro 6'
    },
    interior: {
      seats: { material: 'Alcantara', color: 'Black/Orange', heated: true, ventilated: false, electricallyAdjustable: true, memoryFunction: true },
      dashboard: {
        instrumentCluster: { type: 'Folding Digital Driver Display', size: { value: 8, unit: 'inch' }, customizable: true },
        infotainment: { screenSize: { value: 8, unit: 'inch' }, operatingSystem: 'McLaren Infotainment System', touchScreen: true, voiceAssistant: true, navigation: true }
      },
      comfort: {
        climateControl: { type: 'Automatic', zones: 2 },
        sunroof: { available: true, type: 'Retractable Hardtop Electrochromic Glass', electric: true },
        ambientLighting: { available: true, colors: ['Orange', 'White'] }
      },
      audio: { brand: 'Bowers & Wilkins', speakers: 12, amplifier: { power: 1280, unit: 'watts' }, surroundSound: true }
    },
    technology: {
      connectivity: { bluetooth: true, wifi: true, appleCarPlay: false, androidAuto: false, usbPorts: { typeC: 0, typeA: 2 } },
      charging: { wirelessCharging: false, usbCharging: true },
      display: { headsUpDisplay: false, digitalInstrumentCluster: true },
      smartFeatures: { keylessEntry: true, pushButtonStart: true, remoteStart: false, mobileAppControl: false, overTheAirUpdates: false }
    },
    safety: {
      airbags: { front: 2, side: 2, curtain: 0, knee: 0, total: 4 },
      driverAssistance: { adaptiveCruiseControl: false, laneKeepAssist: false, laneDepartureWarning: false, blindSpotMonitoring: false, rearCrossTrafficAlert: false, forwardCollisionWarning: false, automaticEmergencyBraking: false, trafficSignRecognition: false },
      parking: { frontSensors: true, rearSensors: true, surroundViewCamera: true, automaticParking: false, parkingAssistant: false },
      stability: { abs: true, tractionControl: true, electronicStabilityControl: true, hillStartAssist: true }
    },
    exterior: {
      headlights: { type: 'Static Adaptive LED', daytimeRunningLights: true, automaticHighBeam: true, corneringLights: false },
      mirrors: { electricallyAdjustable: true, heated: true, autoDimming: true, folding: true },
      windows: { powerWindows: true, tinted: true, acousticGlass: false },
      bodyFeatures: { spoiler: true, sharkFinAntenna: false, chromeElements: false, aerodynamicKit: true }
    },
    pricing: {
      currency: 'INR',
      exShowroom: 46500000,
      onRoad: { base: 46500000, insurance: 1800000, registration: 4650000, taxes: 1850000, accessories: 350000, total: 55150000 },
      variants: [
        { name: '720S Luxury', price: 44000000 },
        { name: '720S Performance Spider', price: 46500000 }
      ]
    },
    ownership: {
      warranty: { vehicle: { duration: 3, unit: 'years' }, engine: { duration: 3, unit: 'years' } },
      service: { interval: { distance: 15000, unit: 'km' }, estimatedAnnualCost: { value: 280000, currency: 'INR' } },
      previousOwners: 0,
      serviceHistory: [
        { date: '2025-08-20', mileage: 14000, type: 'Annual Service', cost: 145000, currency: 'INR', replacedParts: ['Oil Filter', 'Brake Fluid'] }
      ]
    },
    features: ['Dihedral Doors', 'Proactive Chassis Control II', 'Bowers & Wilkins Audio', 'Folding Driver Display', 'Electrochromic Roof'],
    availableColors: [
      { name: 'McLaren Orange', code: '#FF6600', type: 'Solid' },
      { name: 'Belize Blue', code: '#0088CC', type: 'Special' },
      { name: 'Silica White', code: '#F0F0F0', type: 'Pearl' }
    ],
    ratings: { performance: 4.9, comfort: 4.1, safety: 4.4, technology: 4.2, fuelEconomy: 2.8, valueForMoney: 4.2, overall: 4.7 },
    metadata: { createdAt: '2026-03-20T11:00:00Z', updatedAt: '2026-07-25T15:00:00Z', source: 'McLaren UK', status: 'Available', tags: ['dihedral-doors', 'mclaren', 'v8-turbo', 'uk'] },
    colour: ['orange', 'blue', 'white']
  },
  {
    basicInfo: {
      brand: 'Koenigsegg',
      model: 'Jesko',
      variant: 'Attack',
      year: 2026,
      bodyType: 'Coupe',
      color: { exterior: 'Crystal White with Carbon Fiber', interior: 'Deserter Yellow Leather', metallic: false },
      countryOfManufacture: 'Sweden'
    },
    engine: {
      type: 'Petrol',
      configuration: 'V8',
      displacement: { value: 5000, unit: 'cc' },
      turbocharged: true,
      power: { value: 1600, unit: 'hp', rpm: 7800 },
      torque: { value: 1500, unit: 'Nm', rpm: 5100 },
      transmission: { type: 'Automatic', gears: 9, name: 'LST Light Speed Transmission' },
      drivetrain: 'RWD',
      fuelSystem: { injection: 'Direct & Port E85 Compatible', fuelType: 'E85/Petrol' }
    },
    performance: {
      topSpeed: { value: 480, unit: 'km/h' },
      acceleration: {
        zeroToHundred: { value: 2.5, unit: 'seconds' },
        zeroToTwoHundred: { value: 5.0, unit: 'seconds' }
      },
      braking: {
        front: { type: 'Ventilated Ceramic', diameter: 410, unit: 'mm' },
        rear: { type: 'Ventilated Ceramic', diameter: 395, unit: 'mm' }
      },
      handling: {
        steeringType: 'Rack and Pinion Hydro-Electric',
        steeringRatio: 'Direct',
        suspension: { front: 'Triplex Suspension', rear: 'Triplex Suspension', adaptive: true }
      }
    },
    dimensions: {
      length: { value: 4610, unit: 'mm' },
      width: { value: 2030, unit: 'mm' },
      height: { value: 1210, unit: 'mm' },
      wheelbase: { value: 2700, unit: 'mm' },
      groundClearance: { value: 90, unit: 'mm' },
      curbWeight: { value: 1420, unit: 'kg' },
      seatingCapacity: 2,
      doors: 2
    },
    wheels: {
      front: { size: '245/35 R20', rim: { diameter: 20, material: 'Aircore Carbon Fiber', design: 'Single Nut' } },
      rear: { size: '325/30 R21', rim: { diameter: 21, material: 'Aircore Carbon Fiber', design: 'Single Nut' } },
      spareWheel: { available: false, type: 'None' }
    },
    fuel: {
      tankCapacity: { value: 72, unit: 'liters' },
      fuelType: 'Petrol',
      mileage: { city: { value: 4.0, unit: 'km/l' }, highway: { value: 7.0, unit: 'km/l' }, combined: { value: 5.5, unit: 'km/l' } },
      emissionStandard: 'Euro 6'
    },
    interior: {
      seats: { material: 'Memory Foam Leather', color: 'Yellow/Black', heated: true, ventilated: false, electricallyAdjustable: true, memoryFunction: true },
      dashboard: {
        instrumentCluster: { type: 'SmartCluster Mounted on Steering Wheel', size: { value: 5, unit: 'inch' }, customizable: true },
        infotainment: { screenSize: { value: 9, unit: 'inch' }, operatingSystem: 'SmartCenter', touchScreen: true, voiceAssistant: false, navigation: true }
      },
      comfort: {
        climateControl: { type: 'Automatic', zones: 1 },
        sunroof: { available: false, type: 'Removable Hardtop', electric: false },
        ambientLighting: { available: true, colors: ['White', 'Gold'] }
      },
      audio: { brand: 'Custom Precision Audio', speakers: 6, amplifier: { power: 400, unit: 'watts' }, surroundSound: false }
    },
    technology: {
      connectivity: { bluetooth: true, wifi: true, appleCarPlay: true, androidAuto: false, usbPorts: { typeC: 2, typeA: 0 } },
      charging: { wirelessCharging: true, usbCharging: true },
      display: { headsUpDisplay: false, digitalInstrumentCluster: true },
      smartFeatures: { keylessEntry: true, pushButtonStart: true, remoteStart: false, mobileAppControl: true, overTheAirUpdates: true }
    },
    safety: {
      airbags: { front: 2, side: 2, curtain: 0, knee: 0, total: 4 },
      driverAssistance: { adaptiveCruiseControl: false, laneKeepAssist: false, laneDepartureWarning: false, blindSpotMonitoring: false, rearCrossTrafficAlert: false, forwardCollisionWarning: false, automaticEmergencyBraking: false, trafficSignRecognition: false },
      parking: { frontSensors: true, rearSensors: true, surroundViewCamera: true, automaticParking: false, parkingAssistant: false },
      stability: { abs: true, tractionControl: true, electronicStabilityControl: true, hillStartAssist: true }
    },
    pricing: {
      currency: 'INR',
      exShowroom: 250000000,
      onRoad: { base: 250000000, insurance: 8000000, registration: 25000000, taxes: 10000000, accessories: 1500000, total: 294500000 },
      variants: [
        { name: 'Jesko Attack', price: 250000000 },
        { name: 'Jesko Absolut', price: 265000000 }
      ]
    },
    ownership: {
      warranty: { vehicle: { duration: 3, unit: 'years' }, engine: { duration: 3, unit: 'years' } },
      service: { interval: { distance: 10000, unit: 'km' }, estimatedAnnualCost: { value: 800000, currency: 'INR' } },
      previousOwners: 0,
      serviceHistory: []
    },
    features: ['1600 HP Twin Turbo V8', '9-Speed Light Speed Transmission (LST)', 'Triplex Dampers', 'Synchrohelix Doors', 'Aircore Carbon Fiber Wheels'],
    availableColors: [
      { name: 'Crystal White', code: '#FAFAFA', type: 'Pearl' },
      { name: 'Tang Orange', code: '#FF8800', type: 'Pearl' },
      { name: 'Clear Carbon', code: '#222222', type: 'Special' }
    ],
    ratings: { performance: 5.0, comfort: 3.8, safety: 4.5, technology: 4.9, fuelEconomy: 2.1, valueForMoney: 3.7, overall: 4.9 },
    metadata: { createdAt: '2026-08-05T09:00:00Z', updatedAt: '2026-08-08T10:00:00Z', source: 'Koenigsegg Factory', status: 'Available', tags: ['megacar', '1600hp', 'sweden', 'extreme-downforce'] },
    colour: ['white', 'orange', 'black']
  },
  {
    basicInfo: {
      brand: 'Bugatti',
      model: 'Chiron Super Sport',
      variant: '300+',
      year: 2025,
      bodyType: 'Coupe',
      color: { exterior: 'Black Carbon with Jet Orange Accent', interior: 'Beluga Black Leather & Carbon', metallic: false },
      countryOfManufacture: 'France'
    },
    engine: {
      type: 'Petrol',
      configuration: 'W16',
      displacement: { value: 7993, unit: 'cc' },
      turbocharged: true,
      power: { value: 1600, unit: 'hp', rpm: 7050 },
      torque: { value: 1600, unit: 'Nm', rpm: 2250 },
      transmission: { type: 'Dual-Clutch', gears: 7, name: 'DSG 7-Speed' },
      drivetrain: 'AWD',
      fuelSystem: { injection: 'Direct Injection Quad Turbo', fuelType: 'Petrol' }
    },
    performance: {
      topSpeed: { value: 440, unit: 'km/h' },
      acceleration: {
        zeroToHundred: { value: 2.4, unit: 'seconds' },
        zeroToTwoHundred: { value: 5.8, unit: 'seconds' }
      },
      braking: {
        front: { type: 'Carbon Ceramic Titanium', diameter: 420, unit: 'mm' },
        rear: { type: 'Carbon Ceramic Titanium', diameter: 400, unit: 'mm' }
      },
      handling: {
        steeringType: 'Electric Power Steering',
        steeringRatio: 'Variable Speed-sensitive',
        suspension: { front: 'Double Wishbone Carbon Fiber', rear: 'Double Wishbone Carbon Fiber', adaptive: true }
      }
    },
    dimensions: {
      length: { value: 4544, unit: 'mm' },
      width: { value: 2038, unit: 'mm' },
      height: { value: 1212, unit: 'mm' },
      wheelbase: { value: 2711, unit: 'mm' },
      groundClearance: { value: 115, unit: 'mm' },
      curbWeight: { value: 1995, unit: 'kg' },
      seatingCapacity: 2,
      doors: 2
    },
    wheels: {
      front: { size: '285/30 R20', rim: { diameter: 20, material: 'Forged Aluminum', design: 'Special High-Speed' } },
      rear: { size: '355/25 R21', rim: { diameter: 21, material: 'Forged Aluminum', design: 'Special High-Speed' } },
      spareWheel: { available: false, type: 'None' }
    },
    fuel: {
      tankCapacity: { value: 100, unit: 'liters' },
      fuelType: 'Petrol',
      mileage: { city: { value: 3.5, unit: 'km/l' }, highway: { value: 6.5, unit: 'km/l' }, combined: { value: 4.8, unit: 'km/l' } },
      emissionStandard: 'Euro 6'
    },
    interior: {
      seats: { material: 'Comfort Leather Bucket', color: 'Beluga Black', heated: true, ventilated: true, electricallyAdjustable: true, memoryFunction: true },
      dashboard: {
        instrumentCluster: { type: 'Analog Speedometer + Dual TFT Screens', size: { value: 6, unit: 'inch' }, customizable: true },
        infotainment: { screenSize: { value: 0, unit: 'inch' }, operatingSystem: 'Bugatti Custom Audio System', touchScreen: false, voiceAssistant: false, navigation: false }
      },
      comfort: {
        climateControl: { type: 'Automatic', zones: 2 },
        sunroof: { available: true, type: 'Sky View Glass Roof', electric: false },
        ambientLighting: { available: true, colors: ['Blue', 'White'] }
      },
      audio: { brand: 'Accuton Diamond Diaphragm', speakers: 4, amplifier: { power: 300, unit: 'watts' }, surroundSound: false }
    },
    technology: {
      connectivity: { bluetooth: true, wifi: false, appleCarPlay: false, androidAuto: false, usbPorts: { typeC: 1, typeA: 1 } },
      charging: { wirelessCharging: false, usbCharging: true },
      display: { headsUpDisplay: false, digitalInstrumentCluster: false },
      smartFeatures: { keylessEntry: true, pushButtonStart: true, remoteStart: false, mobileAppControl: true, overTheAirUpdates: true }
    },
    safety: {
      airbags: { front: 2, side: 2, curtain: 2, knee: 0, total: 6 },
      driverAssistance: { adaptiveCruiseControl: false, laneKeepAssist: false, laneDepartureWarning: false, blindSpotMonitoring: false, rearCrossTrafficAlert: false, forwardCollisionWarning: false, automaticEmergencyBraking: false, trafficSignRecognition: false },
      parking: { frontSensors: true, rearSensors: true, surroundViewCamera: true, automaticParking: false, parkingAssistant: false },
      stability: { abs: true, tractionControl: true, electronicStabilityControl: true, hillStartAssist: true }
    },
    pricing: {
      currency: 'INR',
      exShowroom: 284000000,
      onRoad: { base: 284000000, insurance: 9000000, registration: 28000000, taxes: 11000000, accessories: 2000000, total: 334000000 },
      variants: [
        { name: 'Chiron Pur Sport', price: 260000000 },
        { name: 'Chiron Super Sport 300+', price: 284000000 }
      ]
    },
    ownership: {
      warranty: { vehicle: { duration: 4, unit: 'years' }, engine: { duration: 4, unit: 'years' } },
      service: { interval: { distance: 16000, unit: 'km' }, estimatedAnnualCost: { value: 1200000, currency: 'INR' } },
      previousOwners: 0,
      serviceHistory: [
        { date: '2026-01-20', mileage: 5000, type: 'Annual Maintenance', cost: 450000, currency: 'INR', replacedParts: ['Tires', 'Engine Oil'] }
      ]
    },
    features: ['Quad-Turbo W16 Engine', 'Diamond Membrane Audio', 'Top Speed Key Unlock', 'Carbon Monocoque Chassis', 'Sky View Glass Roof'],
    availableColors: [
      { name: 'Black Carbon', code: '#0F0F0F', type: 'Special' },
      { name: 'French Racing Blue', code: '#0055A5', type: 'Solid' },
      { name: 'Nocturne Black', code: '#000000', type: 'Metallic' }
    ],
    ratings: { performance: 5.0, comfort: 4.7, safety: 4.8, technology: 4.5, fuelEconomy: 1.8, valueForMoney: 3.6, overall: 4.9 },
    metadata: { createdAt: '2026-02-14T08:00:00Z', updatedAt: '2026-08-01T12:00:00Z', source: 'Bugatti Molsheim', status: 'Available', tags: ['w16', 'bugatti', 'quad-turbo', 'top-speed'] },
    colour: ['black', 'blue', 'orange']
  },
  {
    basicInfo: {
      brand: 'Aston Martin',
      model: 'DB12',
      variant: 'V8 Coupe',
      year: 2025,
      bodyType: 'Grand Tourer',
      color: { exterior: 'Iridescent Emerald', interior: 'Onyx Black Haircell Leather', metallic: true },
      countryOfManufacture: 'United Kingdom'
    },
    engine: {
      type: 'Petrol',
      configuration: 'V8',
      displacement: { value: 3982, unit: 'cc' },
      turbocharged: true,
      power: { value: 680, unit: 'hp', rpm: 6000 },
      torque: { value: 800, unit: 'Nm', rpm: 2750 },
      transmission: { type: 'Automatic', gears: 8, name: 'ZF 8-Speed' },
      drivetrain: 'RWD',
      fuelSystem: { injection: 'Direct Injection', fuelType: 'Petrol' }
    },
    performance: {
      topSpeed: { value: 325, unit: 'km/h' },
      acceleration: {
        zeroToHundred: { value: 3.6, unit: 'seconds' },
        zeroToTwoHundred: { value: 11.2, unit: 'seconds' }
      },
      braking: {
        front: { type: 'Cast Iron Ventilated', diameter: 400, unit: 'mm' },
        rear: { type: 'Cast Iron Ventilated', diameter: 360, unit: 'mm' }
      },
      handling: {
        steeringType: 'Electronic Power Assisted Steering',
        steeringRatio: 'Speed-Sensitive',
        suspension: { front: 'Independent Double Wishbone', rear: 'Multi-Link', adaptive: true }
      }
    },
    dimensions: {
      length: { value: 4725, unit: 'mm' },
      width: { value: 2135, unit: 'mm' },
      height: { value: 1295, unit: 'mm' },
      wheelbase: { value: 2805, unit: 'mm' },
      groundClearance: { value: 120, unit: 'mm' },
      curbWeight: { value: 1685, unit: 'kg' },
      seatingCapacity: 4,
      doors: 2
    },
    wheels: {
      front: { size: '275/35 R21', rim: { diameter: 21, material: 'Forged Alloy', design: 'Y-Spoke' } },
      rear: { size: '315/30 R21', rim: { diameter: 21, material: 'Forged Alloy', design: 'Y-Spoke' } },
      spareWheel: { available: false, type: 'Tire Kit' }
    },
    fuel: {
      tankCapacity: { value: 78, unit: 'liters' },
      fuelType: 'Petrol',
      mileage: { city: { value: 7.0, unit: 'km/l' }, highway: { value: 11.5, unit: 'km/l' }, combined: { value: 9.1, unit: 'km/l' } },
      emissionStandard: 'Euro 6'
    },
    interior: {
      seats: { material: 'Bridge of Weir Leather', color: 'Onyx Black', heated: true, ventilated: true, electricallyAdjustable: true, memoryFunction: true },
      dashboard: {
        instrumentCluster: { type: 'Digital', size: { value: 10.25, unit: 'inch' }, customizable: true },
        infotainment: { screenSize: { value: 10.25, unit: 'inch' }, operatingSystem: 'Aston Martin Next-Gen Infotainment', touchScreen: true, voiceAssistant: true, navigation: true }
      },
      comfort: {
        climateControl: { type: 'Automatic', zones: 2 },
        sunroof: { available: true, type: 'Panoramic Glass', electric: false },
        ambientLighting: { available: true, colors: ['Green', 'Blue', 'White', 'Amber'] }
      },
      audio: { brand: 'Bowers & Wilkins', speakers: 15, amplifier: { power: 1170, unit: 'watts' }, surroundSound: true }
    },
    technology: {
      connectivity: { bluetooth: true, wifi: true, appleCarPlay: true, androidAuto: true, usbPorts: { typeC: 2, typeA: 2 } },
      charging: { wirelessCharging: true, usbCharging: true },
      display: { headsUpDisplay: false, digitalInstrumentCluster: true },
      smartFeatures: { keylessEntry: true, pushButtonStart: true, remoteStart: true, mobileAppControl: true, overTheAirUpdates: true }
    },
    safety: {
      airbags: { front: 2, side: 2, curtain: 2, knee: 2, total: 8 },
      driverAssistance: { adaptiveCruiseControl: true, laneKeepAssist: true, laneDepartureWarning: true, blindSpotMonitoring: true, rearCrossTrafficAlert: true, forwardCollisionWarning: true, automaticEmergencyBraking: true, trafficSignRecognition: true },
      parking: { frontSensors: true, rearSensors: true, surroundViewCamera: true, automaticParking: true, parkingAssistant: true },
      stability: { abs: true, tractionControl: true, electronicStabilityControl: true, hillStartAssist: true }
    },
    exterior: {
      headlights: { type: 'Matrix LED', daytimeRunningLights: true, automaticHighBeam: true, corneringLights: true },
      mirrors: { electricallyAdjustable: true, heated: true, autoDimming: true, folding: true },
      windows: { powerWindows: true, tinted: true, acousticGlass: true },
      bodyFeatures: { spoiler: false, sharkFinAntenna: true, chromeElements: true, aerodynamicKit: true }
    },
    pricing: {
      currency: 'INR',
      exShowroom: 45900000,
      onRoad: { base: 45900000, insurance: 1600000, registration: 4600000, taxes: 1800000, accessories: 300000, total: 54200000 },
      variants: [{ name: 'DB12 Coupe', price: 45900000 }, { name: 'DB12 Volante', price: 49900000 }]
    },
    ownership: {
      warranty: { vehicle: { duration: 3, unit: 'years' }, engine: { duration: 3, unit: 'years' } },
      service: { interval: { distance: 16000, unit: 'km' }, estimatedAnnualCost: { value: 160000, currency: 'INR' } },
      previousOwners: 0,
      serviceHistory: []
    },
    features: ['680HP Twin Turbo V8', 'Bowers & Wilkins Audio', 'Aston Martin In-House Touchscreen', 'Electronic Rear Differential', 'Matrix LED Headlights'],
    availableColors: [
      { name: 'Iridescent Emerald', code: '#004B23', type: 'Metallic' },
      { name: 'Aston Martin Racing Green', code: '#002E1F', type: 'Solid' },
      { name: 'Xenon Grey', code: '#4A4E51', type: 'Metallic' }
    ],
    ratings: { performance: 4.8, comfort: 4.8, safety: 4.7, technology: 4.6, fuelEconomy: 3.5, valueForMoney: 4.2, overall: 4.7 },
    metadata: { createdAt: '2026-06-01T10:00:00Z', updatedAt: '2026-07-30T14:00:00Z', source: 'Aston Martin UK', status: 'Available', tags: ['grand-tourer', 'aston-martin', 'v8', 'luxury'] },
    colour: ['green', 'grey', 'black']
  },
  {
    basicInfo: {
      brand: 'Chevrolet',
      model: 'Corvette Z06',
      variant: '3LZ Z07 Performance Package',
      year: 2024,
      bodyType: 'Coupe',
      color: { exterior: 'Torch Red', interior: 'Adrenaline Red Dipped Leather', metallic: false },
      countryOfManufacture: 'United States'
    },
    engine: {
      type: 'Petrol',
      configuration: 'V8',
      displacement: { value: 5463, unit: 'cc' },
      turbocharged: false,
      power: { value: 670, unit: 'hp', rpm: 8400 },
      torque: { value: 624, unit: 'Nm', rpm: 6300 },
      transmission: { type: 'Dual-Clutch', gears: 8, name: 'Tremec 8-Speed' },
      drivetrain: 'RWD',
      fuelSystem: { injection: 'Direct Injection', fuelType: 'Petrol' }
    },
    performance: {
      topSpeed: { value: 314, unit: 'km/h' },
      acceleration: {
        zeroToHundred: { value: 2.7, unit: 'seconds' },
        zeroToTwoHundred: { value: 9.8, unit: 'seconds' }
      },
      braking: {
        front: { type: 'Brembo Carbon Ceramic', diameter: 398, unit: 'mm' },
        rear: { type: 'Brembo Carbon Ceramic', diameter: 391, unit: 'mm' }
      },
      handling: {
        steeringType: 'Electronic Power Steering',
        steeringRatio: 'Direct',
        suspension: { front: 'Short/Long Arm Double Wishbone', rear: 'Short/Long Arm Double Wishbone', adaptive: true }
      }
    },
    dimensions: {
      length: { value: 4688, unit: 'mm' },
      width: { value: 2025, unit: 'mm' },
      height: { value: 1234, unit: 'mm' },
      wheelbase: { value: 2722, unit: 'mm' },
      groundClearance: { value: 110, unit: 'mm' },
      curbWeight: { value: 1561, unit: 'kg' },
      seatingCapacity: 2,
      doors: 2
    },
    wheels: {
      front: { size: '275/30 ZR20', rim: { diameter: 20, material: 'Carbon Fiber', design: '5-Spoke' } },
      rear: { size: '345/25 ZR21', rim: { diameter: 21, material: 'Carbon Fiber', design: '5-Spoke' } },
      spareWheel: { available: false, type: 'Inflator Kit' }
    },
    fuel: {
      tankCapacity: { value: 70, unit: 'liters' },
      fuelType: 'Petrol',
      mileage: { city: { value: 5.0, unit: 'km/l' }, highway: { value: 8.5, unit: 'km/l' }, combined: { value: 6.5, unit: 'km/l' } },
      emissionStandard: 'EPA Tier 3'
    },
    interior: {
      seats: { material: 'Competition Sport Bucket Leather', color: 'Red', heated: true, ventilated: true, electricallyAdjustable: true, memoryFunction: true },
      dashboard: {
        instrumentCluster: { type: 'Digital Reconfigurable', size: { value: 12, unit: 'inch' }, customizable: true },
        infotainment: { screenSize: { value: 8, unit: 'inch' }, operatingSystem: 'Chevrolet Infotainment 3 Plus', touchScreen: true, voiceAssistant: true, navigation: true }
      },
      comfort: {
        climateControl: { type: 'Automatic', zones: 2 },
        sunroof: { available: true, type: 'Removable Roof Panel', electric: false },
        ambientLighting: { available: true, colors: ['Red', 'White'] }
      },
      audio: { brand: 'Bose Performance Series', speakers: 14, amplifier: { power: 600, unit: 'watts' }, surroundSound: true }
    },
    technology: {
      connectivity: { bluetooth: true, wifi: true, appleCarPlay: true, androidAuto: true, usbPorts: { typeC: 1, typeA: 1 } },
      charging: { wirelessCharging: true, usbCharging: true },
      display: { headsUpDisplay: true, digitalInstrumentCluster: true },
      smartFeatures: { keylessEntry: true, pushButtonStart: true, remoteStart: true, mobileAppControl: true, overTheAirUpdates: true }
    },
    safety: {
      airbags: { front: 2, side: 2, curtain: 0, knee: 0, total: 4 },
      driverAssistance: { adaptiveCruiseControl: false, laneKeepAssist: true, laneDepartureWarning: true, blindSpotMonitoring: true, rearCrossTrafficAlert: true, forwardCollisionWarning: true, automaticEmergencyBraking: true, trafficSignRecognition: false },
      parking: { frontSensors: false, rearSensors: true, surroundViewCamera: true, automaticParking: false, parkingAssistant: false },
      stability: { abs: true, tractionControl: true, electronicStabilityControl: true, hillStartAssist: true }
    },
    pricing: {
      currency: 'INR',
      exShowroom: 21500000,
      onRoad: { base: 21500000, insurance: 800000, registration: 2150000, taxes: 900000, accessories: 200000, total: 25550000 },
      variants: [{ name: 'Z06 1LZ', price: 17500000 }, { name: 'Z06 3LZ Z07', price: 21500000 }]
    },
    ownership: {
      warranty: { vehicle: { duration: 3, unit: 'years' }, engine: { duration: 5, unit: 'years' } },
      service: { interval: { distance: 12000, unit: 'km' }, estimatedAnnualCost: { value: 75000, currency: 'INR' } },
      previousOwners: 0,
      serviceHistory: [
        { date: '2025-06-14', mileage: 10000, type: 'First Service', cost: 25000, currency: 'INR', replacedParts: ['Engine Oil', 'Oil Filter'] }
      ]
    },
    features: ['Flat-Plane V8 LT6 Engine', 'Z07 Aero Package', 'Carbon Fiber Wheels', 'HUD', 'Bose 14 Speaker Audio', 'Removable Targa Top'],
    availableColors: [
      { name: 'Torch Red', code: '#D50000', type: 'Solid' },
      { name: 'Amplify Orange Tintcoat', code: '#FF6D00', type: 'Metallic' },
      { name: 'Hypersonic Gray', code: '#424242', type: 'Metallic' }
    ],
    ratings: { performance: 4.9, comfort: 4.2, safety: 4.5, technology: 4.5, fuelEconomy: 2.8, valueForMoney: 4.8, overall: 4.7 },
    metadata: { createdAt: '2026-05-01T08:00:00Z', updatedAt: '2026-07-15T11:00:00Z', source: 'US Import', status: 'Available', tags: ['flat-plane-v8', 'corvette', 'usa', 'track'] },
    colour: ['red', 'orange', 'grey']
  },
  {
    basicInfo: {
      brand: 'Nissan',
      model: 'GT-R Nismo',
      variant: 'Special Edition',
      year: 2024,
      bodyType: 'Coupe',
      color: { exterior: 'Nismo Stealth Gray', interior: 'Nismo Recaro Carbon Seats', metallic: false },
      countryOfManufacture: 'Japan'
    },
    engine: {
      type: 'Petrol',
      configuration: 'V6',
      displacement: { value: 3799, unit: 'cc' },
      turbocharged: true,
      power: { value: 600, unit: 'hp', rpm: 6800 },
      torque: { value: 652, unit: 'Nm', rpm: 3600 },
      transmission: { type: 'Dual-Clutch', gears: 6, name: 'BorgWarner 6-Speed' },
      drivetrain: 'AWD',
      fuelSystem: { injection: 'Sequential Multi-Port', fuelType: 'Petrol' }
    },
    performance: {
      topSpeed: { value: 315, unit: 'km/h' },
      acceleration: {
        zeroToHundred: { value: 2.8, unit: 'seconds' },
        zeroToTwoHundred: { value: 10.5, unit: 'seconds' }
      },
      braking: {
        front: { type: 'Brembo Carbon Ceramic', diameter: 410, unit: 'mm' },
        rear: { type: 'Brembo Carbon Ceramic', diameter: 390, unit: 'mm' }
      },
      handling: {
        steeringType: 'Speed-Sensitive Power Steering',
        steeringRatio: 'Quick',
        suspension: { front: 'Double Wishbone', rear: 'Multi-Link', adaptive: true }
      }
    },
    dimensions: {
      length: { value: 4690, unit: 'mm' },
      width: { value: 1895, unit: 'mm' },
      height: { value: 1370, unit: 'mm' },
      wheelbase: { value: 2780, unit: 'mm' },
      groundClearance: { value: 105, unit: 'mm' },
      curbWeight: { value: 1720, unit: 'kg' },
      seatingCapacity: 4,
      doors: 2
    },
    wheels: {
      front: { size: '255/40 ZRF20', rim: { diameter: 20, material: 'RAYS Forged Alloy', design: '9-Spoke Nismo Red Trim' } },
      rear: { size: '285/35 ZRF20', rim: { diameter: 20, material: 'RAYS Forged Alloy', design: '9-Spoke Nismo Red Trim' } },
      spareWheel: { available: false, type: 'Run-flat' }
    },
    fuel: {
      tankCapacity: { value: 74, unit: 'liters' },
      fuelType: 'Petrol',
      mileage: { city: { value: 6.0, unit: 'km/l' }, highway: { value: 9.5, unit: 'km/l' }, combined: { value: 7.4, unit: 'km/l' } },
      emissionStandard: 'Euro 6'
    },
    interior: {
      seats: { material: 'Recaro Carbon Backed Alcantara', color: 'Black/Red', heated: true, ventilated: false, electricallyAdjustable: true, memoryFunction: false },
      dashboard: {
        instrumentCluster: { type: 'Analog + Digital Multi-Function', size: { value: 7, unit: 'inch' }, customizable: true },
        infotainment: { screenSize: { value: 8, unit: 'inch' }, operatingSystem: 'NissanConnect', touchScreen: true, voiceAssistant: true, navigation: true }
      },
      comfort: {
        climateControl: { type: 'Automatic', zones: 2 },
        sunroof: { available: false, type: 'None', electric: false },
        ambientLighting: { available: false, colors: [] }
      },
      audio: { brand: 'Bose', speakers: 11, amplifier: { power: 400, unit: 'watts' }, surroundSound: true }
    },
    technology: {
      connectivity: { bluetooth: true, wifi: false, appleCarPlay: true, androidAuto: false, usbPorts: { typeC: 0, typeA: 2 } },
      charging: { wirelessCharging: false, usbCharging: true },
      display: { headsUpDisplay: false, digitalInstrumentCluster: false },
      smartFeatures: { keylessEntry: true, pushButtonStart: true, remoteStart: false, mobileAppControl: true, overTheAirUpdates: false }
    },
    safety: {
      airbags: { front: 2, side: 2, curtain: 2, knee: 0, total: 6 },
      driverAssistance: { adaptiveCruiseControl: false, laneKeepAssist: false, laneDepartureWarning: false, blindSpotMonitoring: false, rearCrossTrafficAlert: false, forwardCollisionWarning: false, automaticEmergencyBraking: false, trafficSignRecognition: false },
      parking: { frontSensors: true, rearSensors: true, surroundViewCamera: true, automaticParking: false, parkingAssistant: false },
      stability: { abs: true, tractionControl: true, electronicStabilityControl: true, hillStartAssist: true }
    },
    pricing: {
      currency: 'INR',
      exShowroom: 24500000,
      onRoad: { base: 24500000, insurance: 850000, registration: 2450000, taxes: 1000000, accessories: 200000, total: 29000000 },
      variants: [{ name: 'GT-R Premium', price: 19500000 }, { name: 'GT-R Nismo', price: 24500000 }]
    },
    ownership: {
      warranty: { vehicle: { duration: 3, unit: 'years' }, engine: { duration: 3, unit: 'years' } },
      service: { interval: { distance: 10000, unit: 'km' }, estimatedAnnualCost: { value: 95000, currency: 'INR' } },
      previousOwners: 0,
      serviceHistory: [
        { date: '2025-09-05', mileage: 9000, type: 'Nismo Certified Service', cost: 42000, currency: 'INR', replacedParts: ['Engine Oil', 'Differential Oil'] }
      ]
    },
    features: ['Hand-Built VR38DETT Engine', 'ATTESA E-TS AWD System', 'Nismo Carbon Bonnet', 'Brembo Carbon Brakes', 'RAYS Forged Wheels'],
    availableColors: [
      { name: 'Nismo Stealth Gray', code: '#4F565D', type: 'Solid' },
      { name: 'Pearl White', code: '#F4F4F0', type: 'Pearl' },
      { name: 'Super Silver', code: '#B2B2B2', type: 'Metallic' }
    ],
    ratings: { performance: 4.8, comfort: 4.0, safety: 4.5, technology: 4.1, fuelEconomy: 3.2, valueForMoney: 4.3, overall: 4.6 },
    metadata: { createdAt: '2026-04-01T10:00:00Z', updatedAt: '2026-07-10T14:00:00Z', source: 'Nissan Japan', status: 'Available', tags: ['godzilla', 'gtr', 'japan', 'awd', 'nismo'] },
    colour: ['grey', 'white', 'silver']
  }
];

module.exports = seedCars;
