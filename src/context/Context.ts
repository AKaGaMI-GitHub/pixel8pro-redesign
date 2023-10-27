type NavbarItem = {
    id: number;
    nameList: string;
    link: string;
};

type ColorPhone = {
    id: number;
    colorName: string;
    colorCode: string;
}

type Photo = {
    id: number;
    title: string;
    description: string;
    img: string;
    imgResponsive: string;
}

type Video = {
    id: number;
    title: string;
    description: string;
    videoURL: string;
    responsiveURL: string;
}

type SecurityDetails = {
    id: number;
    title: string;
    description: string;
}

type Portofolios = {
    id: number;
    title: string;
    tagline: string;
    price: number;
    priceDiscount: number | null;
    cicilanDeskripsi: string;
    img: string;
    linkBuy: string;
}

export const SecurityImage: string = "https://lh3.googleusercontent.com/Tp1907nRPPYpUjsuv3KuDRRNE0n64p0JjsfJC7XRMuGYH8ekvMjGyf4ewoE4g56hdZ1EPb6oF1UpDT9HuqqKiAfObs1c6GQXOA=rw-e365-nu-w1750"
export const SecurityImageResponsive: string = "https://lh3.googleusercontent.com/e2wc1XwmxdxR0ee5RRnPa8LvkiC3-on0UXUCYvpYfRQRUVnhU0_R_NBkTODaPbscISj9DC7jLHbPW4LLYc0DhEeBSHmoubAR1zDw=rw-e365-nu-w1750"
export const SecurityUpdateImage: string = "https://lh3.googleusercontent.com/aJ8Jt17zaOWhJ5Hfz67iyCeptkH3sNrSDk8gnUMWeUZphmXN7N5RcDg3qtqf7T92STUUABI598u6j9_evMljmkbhi9GlHbUBevE=rw-e365-nu-w901"

export const navbarData: NavbarItem[] = [
    {id: 1, nameList: 'Phones', link: 'https://store.google.com/us/category/phones?hl=en-US'},
    {id: 2, nameList: 'Earbuds', link: 'https://store.google.com/us/category/earbuds?hl=en-US'},
    {id: 3, nameList: 'Tablets', link: 'https://store.google.com/us/product/pixel_tablet?hl=en-US'},
    {id: 4, nameList: 'Watches', link: 'https://store.google.com/us/category/watches?hl=en-US'},
    {id: 5, nameList: 'Smart Home', link: 'https://store.google.com/us/category/connected_home?hl=en-US'},
    {id: 6, nameList: 'Accessoris', link: 'https://store.google.com/us/collection/accessories_wall?hl=en-US'},
    {id: 7, nameList: 'Subscriptions', link: 'https://store.google.com/us/category/subscriptions?hl=en-US'},
    {id: 8, nameList: 'Offers', link: 'https://store.google.com/us/collection/offers?hl=en-US'},
]

export const coloPhone: ColorPhone[] = [
    {id: 1, colorName: 'Bay', colorCode: '#8AB4F8'},
    {id: 2, colorName: 'Obsidian', colorCode: '#3C4043'},
    {id: 3, colorName: 'Porcelain', colorCode: '#FCE8E6'},
]

export const photoData: Photo[] = [
    {
        id: 1, 
        title: "50 MP main camera for even more detail.", 
        description: "The upgraded large main sensor with an ƒ/1.65 aperture creates the best low-light photos and videos and 2x optical-quality zoom for the most stunning close-ups.", 
        img: "https://lh3.googleusercontent.com/5SfKY3I-7YQLl00zImCCFNcCYMyvzByxI5rynBfKk5yqgo6oIAadL_uoZsZ91GCTAKGd3IHiNYut2Q18PmygwlDy4U1410bcVeE=rw-e365-nu-w1500",
        imgResponsive: "https://lh3.googleusercontent.com/A3yLRqS2bevkUMrcnmq1GvYkRmj0DQXNdL02SBt6ANoKx-JEt4DPWXkMQQd9x1y8SaPbH7Fnki-KIlAFpNghbR2mWL36OB16OFI=rw-e365-nu-w1938"
    },
    {
        id: 2, 
        title: "48 MP ultrawide camera for improved Macro Focus.", 
        description: "It’s the highest resolution yet from Pixel’s ultrawide camera. Zoom in even closer with enhanced Macro Focus. And zoom out even farther for astrophotography.", 
        img: "https://lh3.googleusercontent.com/dXg9NUCNRuG3oPORphuRZ37SzS_t_VT2dByK-onukT_Ofk-b_x2tl5SQP2GCbOAQmxP8jvhwjCSVN_BT0n5LJ6zakuL8OaFR7RU=rw-e365-nu-w1500",
        imgResponsive: "https://lh3.googleusercontent.com/RrIDoiiaVZGueCHJqXdvQN8Nwz80ijPBMPcmmAooC7OIzD2OHN6UxLqqCYzJB1oDZfHZCMS8PqPgIkwb03XX8dcxuVSkLIGbqto=rw-e365-nu-w1938"
    },
    {
        id: 3, 
        title: "10.5 MP front camera for your sharpest selfies yet.", 
        description: "With over 95° field of view, the new ultrawide camera has dedicated autofocus for the sharpest selfies ever on Pixel.", 
        img: "https://lh3.googleusercontent.com/DYWm5m3lbLrWbjXbxj9H153c0WPyPN5w5W9eZg-veDhnsE_71_QFOP4O6IcAm3FNnFfMPRs4n0BSJd7p7Lbf7Jlpuaugu8ML0Q=rw-e365-nu-w1500",
        imgResponsive: "https://lh3.googleusercontent.com/nk52LX8r0LfVNLUEy_Ql16WsBpB3nQJHxfQTaB0FXpL80VBDYzng6Ul4An6XRGCyV4qP2eWURH4zx0hZyk9q8jRlWwW6YiVPy-4=rw-e365-nu-w1938"
    },
]

export const videoData: Video[] = [
    {
        id: 1,
        title: "Stunning comes standard.",
        description: "The Pixel Camera records sharp, smooth video with rich color and clear audio, even in crowded, dimly lit places. Google AI applies noise reduction to boost video quality in any light.",
        videoURL: "https://storage.googleapis.com/mannequin/blobs/c6ba9880-6a50-4bd9-be9c-64df9c843212.mp4",
        responsiveURL: "https://storage.googleapis.com/mannequin/blobs/735d6bc1-c9da-4fb9-bfd4-da65fa93489c.mp4",
    },
    {
        id: 2,
        title: "Expert video processing.",
        description: "Don’t worry about shaky or imperfect videos. Video Boost automatically adjusts color, lighting, stabilization, and graininess. And it enables Night Sight Video on Pixel 8 Pro.",
        videoURL: "https://storage.googleapis.com/mannequin/blobs/979d7adc-338d-46a7-9d02-251c31d27cba.mp4",
        responsiveURL: "https://storage.googleapis.com/mannequin/blobs/b17322e2-e1ee-4d34-835b-fd65d0b036b4.mp4",
    },
    {
        id: 3,
        title: "Beautifully authentic videos with Real Tone.",
        description: "Real Tone, now in video, represents the nuances of more skin tones accurately. So everyone feels seen.",
        videoURL: "https://storage.googleapis.com/mannequin/blobs/a9e73538-a0bc-4567-81d1-d5eb6090f99c.mp4",
        responsiveURL: "https://storage.googleapis.com/mannequin/blobs/a49eeeb8-0930-4cb8-bb27-955dc09ebf33.mp4",
    },
]

export const securityDetails: SecurityDetails[] = [
    {
        id: 1,
        title: "Crisis alerts keep you a step ahead.",
        description: "Pixel sends proactive alerts so you’re informed of a nearby hazard, like flooding, fire, or a tornado.",
    },
    {
        id: 2,
        title: "Security you candepend on.",
        description: "With Google Tensor G3 and the Titan M2 chip, multiple layers of security help keep you and your personal info safe.",
    },
    {
        id: 3,
        title: "Extra protection when you’re online.",
        description: "With VPN by Google One built in, Pixel helps protect your online activity no matter what app or web browser you use.",
    },
    {
        id: 4,
        title: "Detects a car crash. And calls for help.",
        description: "Pixel can detect if you’ve been in a severe car crash, call emergency services, and share your location if you can’t.",
    },
]

export const portofolioPixel: Portofolios[] = [
    {
        id: 1,
        title: "Google Pixel Tablet",
        tagline: "Help in your hand. And at home.",
        price: 499,
        priceDiscount: 419,
        cicilanDeskripsi: "or $41.58/month with 12-month financing*", 
        img: "https://lh3.googleusercontent.com/grCupaQx6l7b1P6W_Q57aTC4KCBageZ8IYKrwZI69ocYdleh4GK2IG4aCl5Io2n6qex7L6FJ8hPdE3QsKRiO7fCgzgPY81FVl38=rw-e365-nu-w1201",
        linkBuy: "https://store.google.com/us/config/pixel_tablet?hl=en-US&selections=eyJwcm9kdWN0RmFtaWx5IjoiY0dsNFpXeGZkR0ZpYkdWMCJ9",
    },
    {
        id: 2,
        title: "Google Pixel Watch 2",
        tagline: "Help by Google. Health by Fitbit. Made for you.",
        price: 349.99,
        priceDiscount: null,
        cicilanDeskripsi: "or $29.17/month with 12-month financing*",
        img: "https://lh3.googleusercontent.com/-2jmQuZjDRo9MwZUMeXBich3AgCj74MHr_Yx0DZ0reeSiHp1Tzjg365Dm091cQ8bvyV8R_QBNumQC_XJ42K0QHe_5BwuG_o3raQ=rw-e365-nu-w1201",
        linkBuy: "https://store.google.com/us/config/pixel_watch_2?hl=en-US&selections=eyJwcm9kdWN0RmFtaWx5IjoiY0dsNFpXeGZkMkYwWTJoZk1nPT0ifQ%3D%3D",
    },
    {
        id: 3,
        title: "Pixel Buds Pro",
        tagline: "Premium sound, pristine calls.",
        price: 199.99,
        priceDiscount: 99.99,
        cicilanDeskripsi: "or $16.67/month with 12-month financing*",
        img: "https://lh3.googleusercontent.com/9G5VkratxCGLyYy5NLfL2-AMs-BymXE4erYP3_N7LsGGWf439j2Htj1Vf80Dr94nn-Rf4c9k9xRuAMpd0RbYGvH0zgSbU4vqkso=rw-e365-nu-w1201",
        linkBuy: "https://store.google.com/us/config/pixel_buds_pro?hl=en-US&selections=eyJwcm9kdWN0RmFtaWx5IjoiY0dsNFpXeGZZblZrYzE5d2NtOD0ifQ%3D%3D",
    },
]