const mongoose = require('mongoose');

const superCarSchema = new mongoose.Schema(
  {
    basicInfo: {
      brand: { type: String, required: true },
      model: { type: String, required: true },
      variant: { type: String },
      year: { type: Number, required: true },
      bodyType: { type: String, required: true },
      color: {
        exterior: { type: String },
        interior: { type: String },
        metallic: { type: Boolean, default: false }
      },
      countryOfManufacture: { type: String }
    },
    engine: {
      type: { type: String },
      configuration: { type: String },
      displacement: {
        value: { type: Number },
        unit: { type: String, default: 'cc' }
      },
      turbocharged: { type: Boolean, default: false },
      power: {
        value: { type: Number },
        unit: { type: String, default: 'hp' },
        rpm: { type: Number }
      },
      torque: {
        value: { type: Number },
        unit: { type: String, default: 'Nm' },
        rpm: { type: Number }
      },
      transmission: {
        type: { type: String },
        gears: { type: Number },
        name: { type: String }
      },
      drivetrain: { type: String },
      fuelSystem: {
        injection: { type: String },
        fuelType: { type: String }
      }
    },
    performance: {
      topSpeed: {
        value: { type: Number },
        unit: { type: String, default: 'km/h' }
      },
      acceleration: {
        zeroToHundred: {
          value: { type: Number },
          unit: { type: String, default: 'seconds' }
        },
        zeroToTwoHundred: {
          value: { type: Number },
          unit: { type: String, default: 'seconds' }
        }
      },
      braking: {
        front: {
          type: { type: String },
          diameter: { type: Number },
          unit: { type: String, default: 'mm' }
        },
        rear: {
          type: { type: String },
          diameter: { type: Number },
          unit: { type: String, default: 'mm' }
        }
      },
      handling: {
        steeringType: { type: String },
        steeringRatio: { type: String },
        suspension: {
          front: { type: String },
          rear: { type: String },
          adaptive: { type: Boolean, default: false }
        }
      }
    },
    dimensions: {
      length: { value: { type: Number }, unit: { type: String, default: 'mm' } },
      width: { value: { type: Number }, unit: { type: String, default: 'mm' } },
      height: { value: { type: Number }, unit: { type: String, default: 'mm' } },
      wheelbase: { value: { type: Number }, unit: { type: String, default: 'mm' } },
      groundClearance: { value: { type: Number }, unit: { type: String, default: 'mm' } },
      curbWeight: { value: { type: Number }, unit: { type: String, default: 'kg' } },
      seatingCapacity: { type: Number },
      doors: { type: Number }
    },
    wheels: {
      front: {
        size: { type: String },
        rim: {
          diameter: { type: Number },
          material: { type: String },
          design: { type: String }
        }
      },
      rear: {
        size: { type: String },
        rim: {
          diameter: { type: Number },
          material: { type: String },
          design: { type: String }
        }
      },
      spareWheel: {
        available: { type: Boolean, default: false },
        type: { type: String }
      }
    },
    fuel: {
      tankCapacity: { value: { type: Number }, unit: { type: String, default: 'liters' } },
      fuelType: { type: String },
      mileage: {
        city: { value: { type: Number }, unit: { type: String, default: 'km/l' } },
        highway: { value: { type: Number }, unit: { type: String, default: 'km/l' } },
        combined: { value: { type: Number }, unit: { type: String, default: 'km/l' } }
      },
      emissionStandard: { type: String }
    },
    interior: {
      seats: {
        material: { type: String },
        color: { type: String },
        heated: { type: Boolean, default: false },
        ventilated: { type: Boolean, default: false },
        electricallyAdjustable: { type: Boolean, default: false },
        memoryFunction: { type: Boolean, default: false }
      },
      dashboard: {
        instrumentCluster: {
          type: { type: String },
          size: { value: { type: Number }, unit: { type: String, default: 'inch' } },
          customizable: { type: Boolean, default: true }
        },
        infotainment: {
          screenSize: { value: { type: Number }, unit: { type: String, default: 'inch' } },
          operatingSystem: { type: String },
          touchScreen: { type: Boolean, default: true },
          voiceAssistant: { type: Boolean, default: true },
          navigation: { type: Boolean, default: true }
        }
      },
      comfort: {
        climateControl: {
          type: { type: String },
          zones: { type: Number }
        },
        sunroof: {
          available: { type: Boolean, default: false },
          type: { type: String },
          electric: { type: Boolean, default: false }
        },
        ambientLighting: {
          available: { type: Boolean, default: false },
          colors: [{ type: String }]
        }
      },
      audio: {
        brand: { type: String },
        speakers: { type: Number },
        amplifier: {
          power: { type: Number },
          unit: { type: String, default: 'watts' }
        },
        surroundSound: { type: Boolean, default: false }
      }
    },
    technology: {
      connectivity: {
        bluetooth: { type: Boolean, default: true },
        wifi: { type: Boolean, default: true },
        appleCarPlay: { type: Boolean, default: true },
        androidAuto: { type: Boolean, default: true },
        usbPorts: {
          typeC: { type: Number },
          typeA: { type: Number }
        }
      },
      charging: {
        wirelessCharging: { type: Boolean, default: false },
        usbCharging: { type: Boolean, default: true }
      },
      display: {
        headsUpDisplay: { type: Boolean, default: false },
        digitalInstrumentCluster: { type: Boolean, default: true }
      },
      smartFeatures: {
        keylessEntry: { type: Boolean, default: true },
        pushButtonStart: { type: Boolean, default: true },
        remoteStart: { type: Boolean, default: false },
        mobileAppControl: { type: Boolean, default: false },
        overTheAirUpdates: { type: Boolean, default: false }
      }
    },
    safety: {
      airbags: {
        front: { type: Number },
        side: { type: Number },
        curtain: { type: Number },
        knee: { type: Number },
        total: { type: Number }
      },
      driverAssistance: {
        adaptiveCruiseControl: { type: Boolean, default: false },
        laneKeepAssist: { type: Boolean, default: false },
        laneDepartureWarning: { type: Boolean, default: false },
        blindSpotMonitoring: { type: Boolean, default: false },
        rearCrossTrafficAlert: { type: Boolean, default: false },
        forwardCollisionWarning: { type: Boolean, default: false },
        automaticEmergencyBraking: { type: Boolean, default: false },
        trafficSignRecognition: { type: Boolean, default: false }
      },
      parking: {
        frontSensors: { type: Boolean, default: false },
        rearSensors: { type: Boolean, default: false },
        surroundViewCamera: { type: Boolean, default: false },
        automaticParking: { type: Boolean, default: false },
        parkingAssistant: { type: Boolean, default: false }
      },
      stability: {
        abs: { type: Boolean, default: true },
        tractionControl: { type: Boolean, default: true },
        electronicStabilityControl: { type: Boolean, default: true },
        hillStartAssist: { type: Boolean, default: true }
      }
    },
    exterior: {
      headlights: {
        type: { type: String },
        daytimeRunningLights: { type: Boolean, default: true },
        automaticHighBeam: { type: Boolean, default: false },
        corneringLights: { type: Boolean, default: false }
      },
      mirrors: {
        electricallyAdjustable: { type: Boolean, default: true },
        heated: { type: Boolean, default: false },
        autoDimming: { type: Boolean, default: false },
        folding: { type: Boolean, default: true }
      },
      windows: {
        powerWindows: { type: Boolean, default: true },
        tinted: { type: Boolean, default: false },
        acousticGlass: { type: Boolean, default: false }
      },
      bodyFeatures: {
        spoiler: { type: Boolean, default: false },
        sharkFinAntenna: { type: Boolean, default: false },
        chromeElements: { type: Boolean, default: false },
        aerodynamicKit: { type: Boolean, default: false }
      }
    },
    pricing: {
      currency: { type: String, default: 'INR' },
      exShowroom: { type: Number, required: true },
      onRoad: {
        base: { type: Number },
        insurance: { type: Number },
        registration: { type: Number },
        taxes: { type: Number },
        accessories: { type: Number },
        total: { type: Number }
      },
      variants: [
        {
          name: { type: String },
          price: { type: Number }
        }
      ]
    },
    ownership: {
      warranty: {
        vehicle: {
          duration: { type: Number },
          unit: { type: String, default: 'years' }
        },
        engine: {
          duration: { type: Number },
          unit: { type: String, default: 'years' }
        }
      },
      service: {
        interval: {
          distance: { type: Number },
          unit: { type: String, default: 'km' }
        },
        estimatedAnnualCost: {
          value: { type: Number },
          currency: { type: String, default: 'INR' }
        }
      },
      previousOwners: { type: Number, default: 0 },
      serviceHistory: [
        {
          date: { type: String },
          mileage: { type: Number },
          type: { type: String },
          cost: { type: Number },
          currency: { type: String, default: 'INR' },
          replacedParts: [{ type: String }]
        }
      ]
    },
    features: [{ type: String }],
    availableColors: [
      {
        name: { type: String },
        code: { type: String },
        type: { type: String }
      }
    ],
    ratings: {
      performance: { type: Number },
      comfort: { type: Number },
      safety: { type: Number },
      technology: { type: Number },
      fuelEconomy: { type: Number },
      valueForMoney: { type: Number },
      overall: { type: Number }
    },
    metadata: {
      createdAt: { type: String },
      updatedAt: { type: String },
      source: { type: String, default: 'Car Management System' },
      status: { type: String, default: 'Available' },
      tags: [{ type: String }]
    },
    colour: [{ type: String }]
  },
  {
    collection: 'super_cars',
    timestamps: true
  }
);

// Explicitly set collection name as super_cars as requested in sample shell prompt
module.exports = mongoose.model('SuperCar', superCarSchema);
