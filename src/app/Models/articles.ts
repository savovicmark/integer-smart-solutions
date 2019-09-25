import {Card} from './card.model';
import {Section} from './section.model';

export const homeCardsOne: Card[] = [
    {title: 'Porto Montenegro, Tivat',
    image: '../../assets/images/porto.jpg',
    paragraphs: [
      'SKIDATA parking management system with automatic payment.',
      'SKIDATA road barriers with access control for village car entrances...'
    ] },{
      title: 'Porto Montenegro Yacht Club',
      image: '../../assets/images/PMYC.jpg',
      paragraphs: [
        'Crestron smart audio, video and presentation system'
      ]
    },{
      title: 'Platinum Club',
      image: '../../assets/images/platinum.jpg',
      paragraphs: [
        'Smart KNX light control system',
        'LED light dimmers'
      ]
    }
  ]
  export const homeSectionOne : Section = {
    title: 'Integer Smart Solutions',
    image: '../../assets/images/about.jpg',
    text: `Integer Smart Solution always strives for uniqueness, 
    integrity and high quality services, employment of
    young and professional staff and continuing training
    of existing staff. Excellence is first and foremost 
    a result of the initiative, responsibility and professionalism 
    of each and every member of our team. Our company, together with 
    its local engineers with many years of experience and young experts 
    with creative ideas from many different fields has made Integer Smart 
    Solutions what it is today. We achieve success due to individuals  
    but through team work. Integer Smart Solution cultivates the culture 
    of collective achievement.
    We offer broad spectrum of products and services in the field of 
    construction, engineering and real estates including but not limited 
    to design, construction and maintenance of all electrical systems, 
    high and low voltage, smart home systems, yacht services, interior works, 
    landscaping and real estate services including complete turn key 
    construction.`,
    icon: true
  }
  export const homeCardsTwo : Card[] = [
      {
          title: 'Electrical engineering – installations and systems',
          image: '../../assets/images/creston.jpg',
          paragraphs: [
              'Electrical installations for homes and buildings',
              'Lighting protection',
              'Overvoltage protection',
              'Fire detection and fire extinguishing',
              'Toxic and explosive gases detection',
              'Alarm – intrusion detection',
              'IP, SDI and Analog video surveillance',
              'Audio and video intercom',
              'Parking management and billing',
              'IP, digital and analog telecommunications'
          ]
      }, {
          title: 'Smart Home installations and systems',
          image: '../../assets/images/skidata.jpg',
          paragraphs: [
            'Audio and video integration and control',
            'Lighting control',
            'Air condition control',
            'Shutters control',
            'Security systems integration and management',
            'Intercom control',
            'Remote monitoring and control over internet'
          ]
      },{
          title: 'Design and Construction',
          image: '../../assets/images/siemens.jpg',
          paragraphs: [
            'Electrical installations',
            'Fit out',
            'Landscaping',
            'HVAC',
            'Plumbing and sewage',
            'Construction'
          ]
      }
  ]

  export const homeSectionTwo: Section = {
      image: '../../assets/images/donja.jpg',
      icon: false,
      title: 'The Future is Coming',
      text: `The amount of technology in buildings and homes is rapidly growing and changing.
      The most significant change is that everything is now on the network: audio, video,
       voice, data, lighting, security, digital signage, Building Management Systems (BMS)
       , shades, and heating & cooling systems.
      The design and implementation of these technologies, however, is typically 
      done independently. As a result, each one operates on a separate platform,
       adding many layers of complexity and inefﬁciency.

     Crestron builds 
     the technology that integrates all of the disparate systems 
     and devices in buildings and homes on a single open platform so they can 
     communicate and work together intelligently. We provide the only solution that
      enables you to monitor, manage and control everything from one platform, anywhere,
       anytime, using touch screens, remotes, and smart devices.`
  }

