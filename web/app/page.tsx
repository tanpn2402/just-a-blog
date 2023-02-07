import { classNames } from '@/utils/utils'
import { Inter } from '@next/font/google'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const posts = [
  {
    "_createdAt": "2022-05-20T10:09:06Z",
    "_id": "61f6f518-14bb-4f1e-b9cc-bb7e290cb2c1",
    "_rev": "gRGoUIxCh2CGKUqx0IalOf",
    "_type": "post",
    "_updatedAt": "2022-10-20T15:48:57Z",
    "author": {
      "_createdAt": "2022-05-11T13:17:13Z",
      "_id": "290948c1-9a04-41a4-9b07-960131320993",
      "_rev": "L1x6OoCeBFQajmzrxwelTR",
      "_type": "author",
      "_updatedAt": "2022-05-20T12:50:25Z",
      "bio": [
        {
          "_key": "49decc02f4f6",
          "_type": "block",
          "children": [
            {
              "_key": "add99fe1bf81",
              "_type": "span",
              "marks": [],
              "text": "Mario is a Staff Engineer specialising in Frontend at "
            },
            {
              "_key": "08c2faf2f982",
              "_type": "span",
              "marks": [
                "8fb88fe0431f"
              ],
              "text": "Vercel"
            },
            {
              "_key": "e9332a10a47c",
              "_type": "span",
              "marks": [],
              "text": ", as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple."
            }
          ],
          "markDefs": [
            {
              "_key": "8fb88fe0431f",
              "_type": "link",
              "href": "https://vercel.com/"
            }
          ],
          "style": "normal"
        }
      ],
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "image-4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648-jpg",
          "_type": "reference"
        }
      },
      "name": "Mario Sanchez",
      "slug": {
        "_type": "slug",
        "current": "mario-sanchez"
      }
    },
    "body": [
      {
        "_key": "475712b3aaff",
        "_type": "block",
        "children": [
          {
            "_key": "b141ba0dd0ea0",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limelight."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "357b32ac6724",
        "_type": "block",
        "children": [
          {
            "_key": "e962329b089e0",
            "_type": "span",
            "marks": [],
            "text": "Simply understood, brand architecture is the art and science of structuring the portfolio to meet your strategic goals, defining the brand number, scope, and relationships needed to compete. Just as Modern Architecture prioritized function, a Brand Architecture is only as good as it is well-suited for the purpose it strives to achieve. Given the disruption observed today across industries and segments, it’s no wonder that companies are considering structural rather than topical solutions to the challenges they face."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "9f47e3fe304f",
        "_type": "block",
        "children": [
          {
            "_key": "520c166f19680",
            "_type": "span",
            "marks": [],
            "text": "Yet the context in which brand architecture decisions are being made has changed. Gone are the days of “competitive strategy”, with the military-inspired view of competition as a zero-sum game, where market share needs to be stolen from competitors, often in a street-by-street battle to win over each individual segment. The type of brand architecture required to win in this game demanded a dogged focus on each segment, and a sniper-like collection of individual brands sharply focused on each one. While there was always a place for a variety of architectures — see Joachimsthaler’s brand relationship spectrum — houses of brands were favored, as it enabled segment-by-segment competition and risk protection. P&G was the king of houses of brands, slicing and dicing the market not just by products and demographics, but also by psychographics, price range, buying patterns or attitudes. In B2B, houses of brands were omnipresent, with a product-driven logic that led to branding new features meant to provide short-term competitive advantage."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "dcf1f8538f11",
        "_type": "block",
        "children": [
          {
            "_key": "2d222e3d03b20",
            "_type": "span",
            "marks": [],
            "text": "In today’s day and age, companies like Google or Amazon do not pursue growth through incremental market share gains; rather, they focus on understanding their customers’ needs and creating entirely new markets to answer them. Creating a house of brands for these markets would be folly — not only would each brand need to be created from scratch, increasing the already significant investment, but the new category itself often needs to be explained to consumers, compounding the cost."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "bcd7b6fa9e4b",
        "_type": "block",
        "children": [
          {
            "_key": "bf56428c95aa0",
            "_type": "span",
            "marks": [],
            "text": "Instead, investing in a strong master brand-led architecture and putting multiple if not all brands under the leadership of a strong brand, presents numerous advantages. First, mergers and acquisitions, or partnerships, are making it necessary to bring multiple market participants to “the same page” — and this common ground often involves a master brand recognized by all. Second, the risk profile of a “branded house” architecture has changed: the master brand can create an aura of innovation and risk-taking, supporting the launch of new products. Third, investments can be streamlined, as a strong master brand can be leveraged across markets and product launches. Finally, a track record of success in creating new categories can create goodwill, creating a virtual circle of success. To achieve this, brand architecture does not need to be a pure “branded house” — in many cases, a strong master brand creates substantial leverage and a much cleaner portfolio, even as a few particularly strong brands can continue existing as sub-brands. An example of this is Salesforce, that leverages its master brand consistently — yet allows more independence to a few specific sub-brands, such as Pardot."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "f763ab14fe08",
        "_type": "block",
        "children": [
          {
            "_key": "6decfd059ce80",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "There are 3 key imperatives to build this type of brand architecture — to be clear, meaningful and stretchable."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "d4bfd80df0bb",
        "_type": "block",
        "children": [
          {
            "_key": "0bdafd38e8bd0",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Clear"
          },
          {
            "_key": "0bdafd38e8bd1",
            "_type": "span",
            "marks": [],
            "text": ": Just as modern architecture thrives on clear and clean lines, so does brand architecture. In the age of micro-segmentation, micro-targeting, information overload and digital fragmentation, you need a clear and loud voice in order to stand out. In the context of short attention spans where specific moments and needstates need to be targeted in addition to consumer/customer profiles, multiple brands often lead to confusion. The technology space understood this early, where clear and simple architectures that bring together simple design, as Apple, with complex technology, as SAP — always under the discipline of a rigorously simple way to organize."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "767a5ce2139e",
        "_type": "block",
        "children": [
          {
            "_key": "508ee1101a210",
            "_type": "span",
            "marks": [],
            "text": "In addition, one of the key reasons for the regained popularity of clean, streamlined architectures, often organized around a single master brand, has been the emergence of platforms, or 2-way marketplaces structured around mutual value creation. By definition, bringing various stakeholder groups to one "
          },
          {
            "_key": "508ee1101a211",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "platform"
          },
          {
            "_key": "508ee1101a212",
            "_type": "span",
            "marks": [],
            "text": " requires building a "
          },
          {
            "_key": "508ee1101a213",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "single brand"
          },
          {
            "_key": "508ee1101a214",
            "_type": "span",
            "marks": [],
            "text": ", in order to enable network effects so critical for building scale. As Uber expands into different marketplaces and “uberizes” different industries, leveraging the power of its master brand is likely to lead to faster expansion than building a targeted brand for each industry from scratch."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "9f1241f498fd",
        "_type": "block",
        "children": [
          {
            "_key": "ecdd9d52e5cb0",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Meaningful"
          },
          {
            "_key": "ecdd9d52e5cb1",
            "_type": "span",
            "marks": [],
            "text": ": Just as modern architecture prioritizes function over embellishments, a solid brand architecture is founded on brands and values meaningful to consumers (or customers), rather than product feature distinctions. Brand architecture needs to be re-organized around brands that have a “reason for being” compelling enough to elicit passion, and introducing a clear distinction between brands that merit air time with consumers vs. “clutter”. The “decluttering” trend is gaining traction in brand architecture — just as in the popular consumer “decluttering” technique, only brands that “bring joy” to consumers get the spotlight. TED, for example, leverages the powerful TED master brand, positioned around “ideas worth spreading”, in a set of sub-brands that target meaningful occasions and contexts for intellectual exploration (TED Talks, TEDx, TED-Ed, TED Prize, TED Fellows, TED Institute, TED Radio Hour)."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "4785981be5ae",
        "_type": "block",
        "children": [
          {
            "_key": "6daa5e6cc0a90",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Stretchable"
          },
          {
            "_key": "6daa5e6cc0a91",
            "_type": "span",
            "marks": [],
            "text": ": Modern architecture is dynamic — it finds its force in the midst of usage; movement is often embedded into its very bones. In today’s fast-changing world, brand architecture is a moving target — clients increasingly ask to design architectures that fit their growth ambitions, thinking through future growth scenarios and architecting space for the future product pipeline. In particular in industries undergoing disruption, where next generation products aim to upset the status quo, their addition to any brand architecture may require a fundamental rethink."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "5d5afb07e0a3",
        "_type": "block",
        "children": [
          {
            "_key": "725d4296c8a30",
            "_type": "span",
            "marks": [],
            "text": "Much as strategy has become “real time” as the window for strategic planning has shortened, brand architecture is also becoming more “real time”, requiring more frequent reassessment, adaptations and flexibility as markets change. Witness the frequency with which Uber readjusts its portfolio. WeWork, the popular co-working space, also exploits the strength of the master brand to stretch into near-in categories such as hospitality with WeLive or the ventures space with WeWork Labs."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "5461c8a0b882",
        "_type": "block",
        "children": [
          {
            "_key": "69d9429eb5750",
            "_type": "span",
            "marks": [],
            "text": "Traditionally, companies considered a house of brands architecture as a risk management tool — a way not to put all your eggs in one basket. It turns out, in the age of platforms and digital disruption, a masterbrand-led architecture can help you build a bigger basket, to hold more eggs."
          }
        ],
        "markDefs": [],
        "style": "normal"
      }
    ],
    "categories": [
      {
        "_createdAt": "2022-05-11T13:19:54Z",
        "_id": "d6dae217-c9ca-466c-a6b6-45a76bd5aed0",
        "_rev": "O6BCyrheCnoszLth8lZdDq",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:12:40Z",
        "color": "blue",
        "slug": {
          "_type": "slug",
          "current": "technology"
        },
        "title": "Technology"
      }
    ],
    "excerpt": "Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades",
    "featured": false,
    "mainImage": {
      "_type": "image",
      "asset": {
        "_ref": "image-05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764-png",
        "_type": "reference"
      },
      "crop": {
        "_type": "sanity.imageCrop",
        "bottom": 0.38745907770025956,
        "left": 0,
        "right": 0,
        "top": 0
      },
      "hotspot": {
        "_type": "sanity.imageHotspot",
        "height": 0.6125409222997404,
        "width": 1,
        "x": 0.5,
        "y": 0.3062704611498702
      }
    },
    "publishedAt": "2022-10-21T15:48:00.000Z",
    "slug": {
      "_type": "slug",
      "current": "architectural-engineering-wonders-of-the-modern-era-for-your-inspiration"
    },
    "title": "Architectural Engineering Wonders of the modern era for your Inspiration"
  },
  {
    "_createdAt": "2022-05-20T09:58:43Z",
    "_id": "d10dfacf-5044-4537-961d-2d18dc84a5bc",
    "_rev": "p2efkKuWHrteZK2KTCGB0E",
    "_type": "post",
    "_updatedAt": "2022-10-20T15:50:42Z",
    "author": {
      "_createdAt": "2022-05-11T13:23:45Z",
      "_id": "621402af-4c79-4728-9fbd-19b17e6256bc",
      "_rev": "O6BCyrheCnoszLth8lfUkA",
      "_type": "author",
      "_updatedAt": "2022-05-20T12:49:09Z",
      "bio": [
        {
          "_key": "26377e41356f",
          "_type": "block",
          "children": [
            {
              "_key": "ba1d24e6bafb",
              "_type": "span",
              "marks": [],
              "text": "Joshua is a Microsoft Azure Certified Cloud Professional and a Google Certified Associate Cloud Engineer. A Data Analytics at Acme, specializing in the use of cloud infrastructure for Machine Learning and Deep Learning operation at scale."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "image-cd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415-jpg",
          "_type": "reference"
        },
        "crop": {
          "_type": "sanity.imageCrop",
          "bottom": 0.4139017543859651,
          "left": 0,
          "right": 0,
          "top": 0
        },
        "hotspot": {
          "_type": "sanity.imageHotspot",
          "height": 0.5860982456140349,
          "width": 1,
          "x": 0.5,
          "y": 0.29304912280701745
        }
      },
      "name": "Joshua Wood",
      "slug": {
        "_type": "slug",
        "current": "joshua-wood"
      }
    },
    "body": [
      {
        "_key": "7dc594f71b5e",
        "_type": "block",
        "children": [
          {
            "_key": "fe3be0e1476e0",
            "_type": "span",
            "marks": [],
            "text": "In a world of back-to-back meetings, hellish commutes, and cramped workspaces, we have normalized serious issues like burnout, depression, and anxiety."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "1b6b2c284107",
        "_type": "block",
        "children": [
          {
            "_key": "0b36fc7e19e10",
            "_type": "span",
            "marks": [],
            "text": "Our reasons? Productivity and hustle. But the irony—it’s "
          },
          {
            "_key": "0b36fc7e19e11",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "precisely"
          },
          {
            "_key": "0b36fc7e19e12",
            "_type": "span",
            "marks": [],
            "text": " by taking care of our minds that we become manifold effective and keep burnout at bay. To quote "
          },
          {
            "_key": "0b36fc7e19e13",
            "_type": "span",
            "marks": [
              "a89b6ff8e0bb"
            ],
            "text": "Psychology Today"
          },
          {
            "_key": "0b36fc7e19e14",
            "_type": "span",
            "marks": [],
            "text": ","
          }
        ],
        "markDefs": [
          {
            "_key": "a89b6ff8e0bb",
            "_type": "link",
            "href": "https://www.psychologytoday.com/us/blog/the-science-fandom/202109/why-leisure-is-never-waste-time#:~:text=The%20Benefits%20of%20Leisure&text=There%20are%20both%20physical%20and,blood%20pressure%2C%20and%20heart%20rate."
          }
        ],
        "style": "normal"
      },
      {
        "_key": "e9c044eebbb0",
        "_type": "block",
        "children": [
          {
            "_key": "a7ca9042c6d00",
            "_type": "span",
            "marks": [],
            "text": "“There are both physical and psychological benefits of leisure time, with reduced levels of stress, anxiety, and depression; improved mood; and higher levels of positive emotion. They also lower cortisol levels, blood pressure, and heart rate.”"
          }
        ],
        "markDefs": [],
        "style": "blockquote"
      },
      {
        "_key": "7a93dd0434fd",
        "_type": "block",
        "children": [
          {
            "_key": "80b61bbf290f0",
            "_type": "span",
            "marks": [],
            "text": "I want to share 5 such activities — but unlike the cliché ones, I won’t tell you to meditate or stroll. I’ll give you rarely-talked-about ones."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "662b2c7e9e28",
        "_type": "block",
        "children": [
          {
            "_key": "1b30b3b085dd0",
            "_type": "span",
            "marks": [],
            "text": "Sinking Into Your Chair and Relishing the Setting Sun"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "1207dbbd0a27",
        "_type": "block",
        "children": [
          {
            "_key": "bce2a507965a0",
            "_type": "span",
            "marks": [],
            "text": "There’s something soul-stirring about the orange sun receding into the horizon — the setting of the mighty "
          },
          {
            "_key": "bce2a507965a1",
            "_type": "span",
            "marks": [
              "2aba16f15a60"
            ],
            "text": "burning gas ball"
          },
          {
            "_key": "bce2a507965a2",
            "_type": "span",
            "marks": [],
            "text": " signals closure and reminds you to rest."
          }
        ],
        "markDefs": [
          {
            "_key": "2aba16f15a60",
            "_type": "link",
            "href": "https://www.space.com/17170-what-is-the-sun-made-of.html#:~:text=The%20sun%20is%20a%20big,system%20as%20heat%20and%20light."
          }
        ],
        "style": "normal"
      },
      {
        "_key": "3249b42fa6b6",
        "_type": "block",
        "children": [
          {
            "_key": "5086e06137180",
            "_type": "span",
            "marks": [],
            "text": "Add a lean-back chair into the mix and you’ve got a treat. Whenever I shut my laptop and relish this, time screeches to a standstill — peace, calm, and the ever-present beauty of the "
          },
          {
            "_key": "5086e06137181",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "present"
          },
          {
            "_key": "5086e06137182",
            "_type": "span",
            "marks": [],
            "text": "."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "73d4a167d7cd",
        "_type": "block",
        "children": [
          {
            "_key": "bf3863dc81550",
            "_type": "span",
            "marks": [],
            "text": "As my solar buddy disappears and I return to work, I brim with positivity, focus, and energy."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "618369f342bb",
        "_type": "block",
        "children": [
          {
            "_key": "4636f05a32430",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Don’t worry if you don’t have a sun view."
          },
          {
            "_key": "4636f05a32431",
            "_type": "span",
            "marks": [],
            "text": " "
          }
        ],
        "markDefs": [
          {
            "_key": "6a3b056df03f",
            "_type": "link",
            "href": "https://www.sciencedaily.com/releases/2018/07/180702120514.htm"
          }
        ],
        "style": "h2"
      },
      {
        "_key": "2fa0459629cd",
        "_type": "block",
        "children": [
          {
            "_key": "07b0fe6752a7",
            "_type": "span",
            "marks": [],
            "text": "Star-gazing, admiring the shifting clouds, or even observing the barking mongrels, passing vehicles, and chirping birds will work. As time-management expert Selin Malkoc says,"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "dfb53ffbec42",
        "_type": "block",
        "children": [
          {
            "_key": "8a280d9a16fb0",
            "_type": "span",
            "marks": [],
            "text": "“The key to enjoying your leisure activities is to live in the moment as much as possible.”"
          }
        ],
        "markDefs": [],
        "style": "blockquote"
      },
      {
        "_key": "6a352b6f322b",
        "_type": "block",
        "children": [
          {
            "_key": "0bfd3aa8474e0",
            "_type": "span",
            "marks": [],
            "text": "A Steamy Shower with A Scented Body Wash"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "060c20572183",
        "_type": "block",
        "children": [
          {
            "_key": "7d331cdf1d7b0",
            "_type": "span",
            "marks": [],
            "text": "May God bless the person who invented the showerhead — a hot shower is my omnipotent “reset” button."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "bb8ef1ea4991",
        "_type": "block",
        "children": [
          {
            "_key": "b75e3212a1290",
            "_type": "span",
            "marks": [],
            "text": "Procrastinated for 2 hours? Lacking the motivation to write? Feeling lethargic? No matter what, post a hot shower, I’m a "
          },
          {
            "_key": "b75e3212a1291",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "machine."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "56e1e8ef0a04",
        "_type": "block",
        "children": [
          {
            "_key": "1fbebaf43ee30",
            "_type": "span",
            "marks": [],
            "text": "Hot showers have a "
          },
          {
            "_key": "1fbebaf43ee33",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "ton"
          },
          {
            "_key": "1fbebaf43ee34",
            "_type": "span",
            "marks": [],
            "text": " of benefits — better sleep, healthier skin, reduced headaches, relieved bodily tension, and stress evaporation. With a scented body wash or oil, this climbs up another notch."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "6953ae4fd656",
        "_type": "block",
        "children": [
          {
            "_key": "52262811ad820",
            "_type": "span",
            "marks": [],
            "text": "If you’re looking for a jolt of mental energy and alertness rather than a calm mind recharge, go for a cold shower instead."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "24ecdeb30a23",
        "_type": "block",
        "children": [
          {
            "_key": "7e09a9f65809",
            "_type": "span",
            "marks": [],
            "text": ""
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "694a0030d8b1",
        "_type": "image",
        "asset": {
          "_ref": "image-5bdbf693a065af7d96335ae20cc1ee770c9633fe-4096x3112-jpg",
          "_type": "reference"
        }
      },
      {
        "_key": "d7737febb8c7",
        "_type": "block",
        "children": [
          {
            "_key": "1d7472c965b90",
            "_type": "span",
            "marks": [],
            "text": "Photo by "
          },
          {
            "_key": "1d7472c965b91",
            "_type": "span",
            "marks": [
              "600e512b16bb"
            ],
            "text": "Chewy"
          },
          {
            "_key": "1d7472c965b92",
            "_type": "span",
            "marks": [],
            "text": " on "
          },
          {
            "_key": "1d7472c965b93",
            "_type": "span",
            "marks": [
              "742178e62bf4"
            ],
            "text": "Unsplash"
          }
        ],
        "markDefs": [
          {
            "_key": "600e512b16bb",
            "_type": "link",
            "href": "https://unsplash.com/@chewy?utm_source=medium&utm_medium=referral"
          },
          {
            "_key": "742178e62bf4",
            "_type": "link",
            "href": "https://unsplash.com/?utm_source=medium&utm_medium=referral"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "c14e6781c978",
        "_type": "block",
        "children": [
          {
            "_key": "1482228e97f00",
            "_type": "span",
            "marks": [],
            "text": "Banter with Your Family"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "23e50ee54854",
        "_type": "block",
        "children": [
          {
            "_key": "abb633b8f8f50",
            "_type": "span",
            "marks": [],
            "text": "It’s been over a year since I stopped watching TV, streaming platforms, and anime. But now and then, I’ll land on the sofa and bear through some TV just for the family time."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "1d90e7d78507",
        "_type": "block",
        "children": [
          {
            "_key": "85571036ae2f0",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Most often, the TV becomes a background noise"
          },
          {
            "_key": "85571036ae2f1",
            "_type": "span",
            "marks": [],
            "text": " — thanks to our chatter and laughter filling the living room. If it gets silent, I’ll get back and even a small such interlude leaves me burning with energy."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "e0a0e71cb9fb",
        "_type": "block",
        "children": [
          {
            "_key": "0c6c1adda9f80",
            "_type": "span",
            "marks": [],
            "text": "“At the end of your life, you’ll never regret not having passed one more test or not closing one more deal. You will regret time not spent with a husband, a friend, a child, a parent.”\n"
          },
          {
            "_key": "0c6c1adda9f81",
            "_type": "span",
            "marks": [
              "629a1be97c7d"
            ],
            "text": "— Barbara Bush"
          }
        ],
        "markDefs": [
          {
            "_key": "629a1be97c7d",
            "_type": "link",
            "href": "https://www.brainyquote.com/quotes/barbara_bush_121743"
          }
        ],
        "style": "blockquote"
      },
      {
        "_key": "27cfc29ed7ee",
        "_type": "block",
        "children": [
          {
            "_key": "7c15a9ef115b0",
            "_type": "span",
            "marks": [],
            "text": "You don’t even need full-blown family time — crossing over to your brother’s room for 5 minutes, visiting your mom in the kitchen, or checking on your half-dozing half-reading grandma is enough."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "a6dd44daef95",
        "_type": "block",
        "children": [
          {
            "_key": "9f4cf801d71a0",
            "_type": "span",
            "marks": [],
            "text": "A short positive circuit breaker is all you need."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "94db3baaf09c",
        "_type": "block",
        "children": [
          {
            "_key": "4514bb759c300",
            "_type": "span",
            "marks": [],
            "text": "Reading Light Fiction"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "d27ee9092098",
        "_type": "block",
        "children": [
          {
            "_key": "db7e19de8b180",
            "_type": "span",
            "marks": [],
            "text": "Reading has become synonymous with non-fiction, mainly self-help. But fiction is as if not "
          },
          {
            "_key": "db7e19de8b181",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "more"
          },
          {
            "_key": "db7e19de8b182",
            "_type": "span",
            "marks": [],
            "text": " beneficial."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "b31a04df1214",
        "_type": "block",
        "children": [
          {
            "_key": "0b2e7febc6330",
            "_type": "span",
            "marks": [],
            "text": "While powerful characters and storylines with profound messages transform you from deep within, light-upbeat stories cure the darkest of moods and worries."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "1bc7a9daefdf",
        "_type": "block",
        "children": [
          {
            "_key": "f3954761f3f90",
            "_type": "span",
            "marks": [],
            "text": "So much so that “"
          },
          {
            "_key": "f3954761f3f91",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "Bibliotherapy"
          },
          {
            "_key": "f3954761f3f92",
            "_type": "span",
            "marks": [],
            "text": "” or reading therapy is actively used to reduce mental health issues."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "809bd955d576",
        "_type": "block",
        "children": [
          {
            "_key": "3a1c834ee73c0",
            "_type": "span",
            "marks": [],
            "text": "My go-to is fantasy fiction — when you’re teleported to surreal worlds, mundane earth’s vagaries disappear. My top 4 picks would be The Emperor’s Soul, The Final Empire, Assassin’s Apprentice, and Lord Of The Rings."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "53d680b63f2f",
        "_type": "block",
        "children": [
          {
            "_key": "87be49226e320",
            "_type": "span",
            "marks": [],
            "text": "“A reader lives a thousand lives before he dies. The man who never reads lives only one.”\n— "
          },
          {
            "_key": "87be49226e321",
            "_type": "span",
            "marks": [
              "f834b3e9ef8d"
            ],
            "text": "George R.R Martin"
          }
        ],
        "markDefs": [
          {
            "_key": "f834b3e9ef8d",
            "_type": "link",
            "href": "https://www.goodreads.com/quotes/408441-a-reader-lives-a-thousand-lives-before-he-dies-said"
          }
        ],
        "style": "blockquote"
      },
      {
        "_key": "21c3f6933492",
        "_type": "block",
        "children": [
          {
            "_key": "cd898edea0d40",
            "_type": "span",
            "marks": [],
            "text": "Strumming Your Guitar"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "c27df9ce4f6e",
        "_type": "block",
        "children": [
          {
            "_key": "2a4687f7aa4b0",
            "_type": "span",
            "marks": [],
            "text": "Don’t have one? Go for the keyboard. Classical much? The flute’s waiting for you. Have a lot of space to spare? A piano won’t complain."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "74d96fb71a23",
        "_type": "block",
        "children": [
          {
            "_key": "94ad881b82bd0",
            "_type": "span",
            "marks": [],
            "text": "Listening to music is widely recommended as a leisure activity, but playing music puts it to shame — deeper empathy, higher self-esteem, better memory, sharper focus, and protection against age-related brain degeneration."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "fbc2060aee26",
        "_type": "block",
        "children": [
          {
            "_key": "85ad4b3776fa0",
            "_type": "span",
            "marks": [],
            "text": "One 6-month study whose subjects started learning the drums found white matter tract improvements—the brain parts that control the speed of neural transmission. Another linked long-term playing to significant positive neural changes. There are tons of other studies as well."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "87210a22591d",
        "_type": "block",
        "children": [
          {
            "_key": "efac65665f6a0",
            "_type": "span",
            "marks": [],
            "text": "This is as much a reminder to brush the dust off my guitar as it is a piece of advice for you. Now that I’m done with this article, let me go strum some strings."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "f56b62d1d5d1",
        "_type": "block",
        "children": [
          {
            "_key": "81f5933f2ba90",
            "_type": "span",
            "marks": [],
            "text": "“Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.”"
          }
        ],
        "markDefs": [],
        "style": "blockquote"
      }
    ],
    "categories": [
      {
        "_createdAt": "2022-05-11T13:25:04Z",
        "_id": "f4c59db9-b221-4ba0-87b8-4d0bdb467ece",
        "_rev": "O6BCyrheCnoszLth8lZdkw",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:12:57Z",
        "color": "purple",
        "slug": {
          "_type": "slug",
          "current": "lifestyle"
        },
        "title": "Lifestyle"
      }
    ],
    "excerpt": "No wonder mental health issues are at an all-time high. As my friend John called it, we’re already in the third world war — and the battlegrounds are our heads.",
    "featured": false,
    "mainImage": {
      "_type": "image",
      "alt": "Graphics",
      "asset": {
        "_ref": "image-2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481-png",
        "_type": "reference"
      },
      "crop": {
        "_type": "sanity.imageCrop",
        "bottom": 0.40155882352941163,
        "left": 0,
        "right": 0,
        "top": 0.18853676470588243
      },
      "hotspot": {
        "_type": "sanity.imageHotspot",
        "height": 0.40990441176470593,
        "width": 0.9926470588235294,
        "x": 0.5,
        "y": 0.3934889705882354
      }
    },
    "publishedAt": "2022-10-21T10:50:00.000Z",
    "slug": {
      "_type": "slug",
      "current": "5-effective-brain-recharging-activities-no-one-is-talking-about"
    },
    "title": "5 Effective Brain Recharging Activities No One is Talking About"
  },
  {
    "_createdAt": "2022-10-20T13:35:27Z",
    "_id": "b7cfe91d-e13e-422b-9206-1e6771f486f7",
    "_rev": "eFI6ND3ujPcLPxMdXEtHZT",
    "_type": "post",
    "_updatedAt": "2022-12-08T06:24:19Z",
    "author": {
      "_createdAt": "2022-05-11T13:17:13Z",
      "_id": "290948c1-9a04-41a4-9b07-960131320993",
      "_rev": "L1x6OoCeBFQajmzrxwelTR",
      "_type": "author",
      "_updatedAt": "2022-05-20T12:50:25Z",
      "bio": [
        {
          "_key": "49decc02f4f6",
          "_type": "block",
          "children": [
            {
              "_key": "add99fe1bf81",
              "_type": "span",
              "marks": [],
              "text": "Mario is a Staff Engineer specialising in Frontend at "
            },
            {
              "_key": "08c2faf2f982",
              "_type": "span",
              "marks": [
                "8fb88fe0431f"
              ],
              "text": "Vercel"
            },
            {
              "_key": "e9332a10a47c",
              "_type": "span",
              "marks": [],
              "text": ", as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple."
            }
          ],
          "markDefs": [
            {
              "_key": "8fb88fe0431f",
              "_type": "link",
              "href": "https://vercel.com/"
            }
          ],
          "style": "normal"
        }
      ],
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "image-4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648-jpg",
          "_type": "reference"
        }
      },
      "name": "Mario Sanchez",
      "slug": {
        "_type": "slug",
        "current": "mario-sanchez"
      }
    },
    "body": [
      {
        "_key": "20d98a11e024",
        "_type": "block",
        "children": [
          {
            "_key": "36dba863d21c0",
            "_type": "span",
            "marks": [],
            "text": "“What’s the meaning of life?” is a cliche philosophical question, but it touches on something fundamental about how humans relate to the world around them. People want to know that there’s significance to their lives, but not necessarily in any grandiose sense. Most of us just want to feel that there’s value in getting up and being active each day. We search for signs that our existence is a net good in the world, even if only on a minuscule scale in the grander scheme of the universe."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "cda4fa9e46b5",
        "_type": "block",
        "children": [
          {
            "_key": "b90cec3b72c00",
            "_type": "span",
            "marks": [],
            "text": "In the past, researchers have identified "
          },
          {
            "_key": "b90cec3b72c01",
            "_type": "span",
            "marks": [
              "9a609a769450"
            ],
            "text": "three important constructs"
          },
          {
            "_key": "b90cec3b72c02",
            "_type": "span",
            "marks": [],
            "text": " underlying “meaning in life”. The first is "
          },
          {
            "_key": "b90cec3b72c03",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "coherence"
          },
          {
            "_key": "b90cec3b72c04",
            "_type": "span",
            "marks": [],
            "text": ", which refers to an ability to make sense of what’s happening in our lives as we build a personal story. The second is "
          },
          {
            "_key": "b90cec3b72c05",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "purpose"
          },
          {
            "_key": "b90cec3b72c06",
            "_type": "span",
            "marks": [],
            "text": ", which is the feeling that we’re working toward important life goals. The third is "
          },
          {
            "_key": "b90cec3b72c07",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "mattering"
          },
          {
            "_key": "b90cec3b72c08",
            "_type": "span",
            "marks": [],
            "text": ", which is the belief that our lives matter in the wider context of the world around us."
          }
        ],
        "markDefs": [
          {
            "_key": "9a609a769450",
            "_type": "link",
            "href": "https://pubmed.ncbi.nlm.nih.gov/30614732/"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "50c9ae937569",
        "_type": "block",
        "children": [
          {
            "_key": "3a16a5bf20740",
            "_type": "span",
            "marks": [],
            "text": "However, new evidence is revealing an overlooked construct, and it may be the most crucial one of all. Researchers are calling it “experiential appreciation”, and it refers to enjoying and appreciating sensations as you experience them — a concept that you may already recognize if you’re familiar with mindfulness."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "7a2857df3daf",
        "_type": "block",
        "children": [
          {
            "_key": "1a0c6b8a1a6c0",
            "_type": "span",
            "marks": [],
            "text": ""
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "fa1b48835ffd",
        "_type": "image",
        "asset": {
          "_ref": "image-4b0860eea675e1ebbb0bf25fbff6db2534cfb611-5184x3348-jpg",
          "_type": "reference"
        }
      },
      {
        "_key": "1c988fb8e7b0",
        "_type": "block",
        "children": [
          {
            "_key": "23313620b6360",
            "_type": "span",
            "marks": [],
            "text": "The fourth construct of meaning in life"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "c56852088700",
        "_type": "block",
        "children": [
          {
            "_key": "64b41b6055230",
            "_type": "span",
            "marks": [],
            "text": "In a "
          },
          {
            "_key": "64b41b6055231",
            "_type": "span",
            "marks": [
              "f1732d03a67d"
            ],
            "text": "recently published paper"
          },
          {
            "_key": "64b41b6055232",
            "_type": "span",
            "marks": [],
            "text": " (February 2022), researchers probed what it means to experience meaning in life. In their first study, they analyzed past survey data from over 11,000 people across 30 countries. These surveys were originally designed to assess coping strategies during the COVID-19 pandemic, but the researchers plucked out individual questions linked to meaning-in-life constructs. Here’s an example for each construct; participants had to rate their agreement with each statement or question below:"
          }
        ],
        "markDefs": [
          {
            "_key": "f1732d03a67d",
            "_type": "link",
            "href": "https://www.nature.com/articles/s41562-021-01283-6.pdf"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "b4a20669b20e",
        "_type": "block",
        "children": [
          {
            "_key": "014f9abd7f120",
            "_type": "span",
            "marks": [],
            "text": "Coherence: “I’ve been looking for something good in what is happening”"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "6e45bb19a09c",
        "_type": "block",
        "children": [
          {
            "_key": "a7e1995cb0660",
            "_type": "span",
            "marks": [],
            "text": "Purpose: “I do something productive every day”"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "e3830248af43",
        "_type": "block",
        "children": [
          {
            "_key": "4fb166b550b00",
            "_type": "span",
            "marks": [],
            "text": "Mattering: “I’m doing what is good for our society”"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "315669a9940e",
        "_type": "block",
        "children": [
          {
            "_key": "11e19d9af96a0",
            "_type": "span",
            "marks": [],
            "text": "Experiential appreciation: “I appreciate my life as it is right now regardless of the circumstances”"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "49bceefd3c7f",
        "_type": "block",
        "children": [
          {
            "_key": "4e066f973f3e0",
            "_type": "span",
            "marks": [],
            "text": "Meaning in life: “In general, to what extent do you feel that what you do in your life is valuable and worthwhile?”"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "dd14fac50c8b",
        "_type": "block",
        "children": [
          {
            "_key": "0ecf3db3acb50",
            "_type": "span",
            "marks": [],
            "text": "The researchers analyzed the survey data, testing how each construct predicted people’s scores in the overall meaning-in-life measure. Consistent with previous research, the three traditional constructs (coherence, purpose, and mattering) all individually predicted meaning in life to some extent. The interesting part was that after accounting for those three constructs, the new fourth construct of experiential appreciation explained another significant portion of people’s meaning in life. In other words, a major ingredient in the meaning-in-life formula had been missed by previous researchers."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "89b9488bef2a",
        "_type": "block",
        "children": [
          {
            "_key": "8ebf6afe7a8a0",
            "_type": "span",
            "marks": [],
            "text": "In a second study, the researchers developed their own way to measure experiential appreciation. For the three older constructs, they pulled specialized survey questions from previously published studies. But since experiential appreciation was a newcomer, they had to formalize its meaning and how to measure it. After some careful analysis, they ended up with five survey items. Anyone who scores highly on these items is high in experiential appreciation:"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "804c52d4456b",
        "_type": "block",
        "children": [
          {
            "_key": "9cb569bbdba70",
            "_type": "span",
            "marks": [],
            "text": "“I have great appreciation for the beauty of life.”"
          }
        ],
        "level": 1,
        "listItem": "number",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "db0d27c4cbe6",
        "_type": "block",
        "children": [
          {
            "_key": "e574531a9f640",
            "_type": "span",
            "marks": [],
            "text": "“I take great interest in my daily activities.”"
          }
        ],
        "level": 1,
        "listItem": "number",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "b9387d9e3bef",
        "_type": "block",
        "children": [
          {
            "_key": "6f17b18845ef0",
            "_type": "span",
            "marks": [],
            "text": "“I appreciate a wide variety of experiences.”"
          }
        ],
        "level": 1,
        "listItem": "number",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "965bda0fdf24",
        "_type": "block",
        "children": [
          {
            "_key": "4402e0a805440",
            "_type": "span",
            "marks": [],
            "text": "“I appreciate the little things in life.”"
          }
        ],
        "level": 1,
        "listItem": "number",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "12c4ccd647d3",
        "_type": "block",
        "children": [
          {
            "_key": "94a39cb4a3ea0",
            "_type": "span",
            "marks": [],
            "text": "“I tend to find myself deeply engaged in conversations with other people.”"
          }
        ],
        "level": 1,
        "listItem": "number",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "d36f0dc7755a",
        "_type": "block",
        "children": [
          {
            "_key": "cc6f9b65b7990",
            "_type": "span",
            "marks": [],
            "text": "Using these new measures together with the standard measures for the other three constructs, the researchers sent surveys to over 1500 people in the US and China. Instead of relying on indirect questions as they did in the previous COVID survey analysis, they collected dedicated data using well-tested measures for each construct."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "8553d01c71c0",
        "_type": "block",
        "children": [
          {
            "_key": "e15a97c0b64c",
            "_type": "span",
            "marks": [],
            "text": "Bulletted List"
          }
        ],
        "markDefs": [],
        "style": "h4"
      },
      {
        "_key": "f41e92d48dc7",
        "_type": "block",
        "children": [
          {
            "_key": "0f0b81704730",
            "_type": "span",
            "marks": [],
            "text": "Consistently predicted"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "df89919aed06",
        "_type": "block",
        "children": [
          {
            "_key": "055de744c371",
            "_type": "span",
            "marks": [],
            "text": "Coherence was a little"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "d8c8ddb7a56c",
        "_type": "block",
        "children": [
          {
            "_key": "25b2554f9a1f",
            "_type": "span",
            "marks": [],
            "text": "Experiential appreciation "
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "b7de8c203475",
        "_type": "block",
        "children": [
          {
            "_key": "76b09a93e6e9",
            "_type": "span",
            "marks": [],
            "text": "Deserving place "
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "287c9a384e2f",
        "_type": "block",
        "children": [
          {
            "_key": "7178f75f320c0",
            "_type": "span",
            "marks": [],
            "text": "Once again, higher purpose, higher mattering, and higher experiential appreciation all consistently predicted higher meaning in life. The effects of coherence were a little weaker, showing significant predictive power in the Chinese sample but not the American sample. While coherence was a little shaky, experiential appreciation certainly wasn’t."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "1d8f0732ea78",
        "_type": "block",
        "children": [
          {
            "_key": "61617683078d0",
            "_type": "span",
            "marks": [],
            "text": "So at least when "
          },
          {
            "_key": "9cdcd7acde75",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "analyzing"
          },
          {
            "_key": "f83f5e947b85",
            "_type": "span",
            "marks": [],
            "text": " the connections between all of these "
          },
          {
            "_key": "54c4f2a76917",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "concepts"
          },
          {
            "_key": "37db7b058e55",
            "_type": "span",
            "marks": [],
            "text": ", experiential appreciation wins a deserving place in the fight for meaning in life. But could you actually boost meaning in life by boosting experiential appreciation?"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "289aed36587d",
        "_type": "block",
        "children": [
          {
            "_key": "7278f2a0ee470",
            "_type": "span",
            "marks": [],
            "text": "To answer this, the "
          },
          {
            "_key": "2a4aee6db0b7",
            "_type": "span",
            "marks": [],
            "text": "researchers"
          },
          {
            "_key": "34b4433e1445",
            "_type": "span",
            "marks": [],
            "text": " came up with a way to stimulate people’s experiential appreciation: they showed everyone an awe-inspiring 2-min video from the nature documentary, “Planet Earth”. Few things in life "
          },
          {
            "_key": "1af9bf6ecb3b",
            "_type": "span",
            "marks": [],
            "text": "give"
          },
          {
            "_key": "2116bb6ed8dc",
            "_type": "span",
            "marks": [],
            "text": " us a deeper connection to the present moment than sights of hypnotic oceans, lush forests, and David Attenborough "
          },
          {
            "_key": "9a7359676922",
            "_type": "span",
            "marks": [],
            "text": "documentaries"
          },
          {
            "_key": "fb74a411bc4e",
            "_type": "span",
            "marks": [],
            "text": "."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "80f91b76f562",
        "_type": "block",
        "children": [
          {
            "_key": "d4e490c542590",
            "_type": "span",
            "marks": [],
            "text": "The nature manipulation worked. Following the video, people reported higher levels of experiential appreciation. More importantly, by boosting their experiential appreciation, the video also indirectly raised how much people reported feeling a sense of meaning in their life. The researchers now had evidence of a causal connection between appreciating the moment and feeling that life is valuable."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "531ca0d50582",
        "_type": "block",
        "children": [
          {
            "_key": "cbaca01ede440",
            "_type": "span",
            "marks": [],
            "text": "Takeaway tips"
          }
        ],
        "markDefs": [],
        "style": "h1"
      },
      {
        "_key": "d2864c9d5321",
        "_type": "block",
        "children": [
          {
            "_key": "cc9dff14cbe20",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "The four elements of meaning in life:"
          },
          {
            "_key": "cc9dff14cbe21",
            "_type": "span",
            "marks": [],
            "text": " Here’s a simple wheel I’ve made to visualize the four elements associated with meaning in life according to the latest evidence. Think about how each of them applies to your own life. Feelings like “meaning in life” are incredibly subjective, but model-based thinking makes them less abstract and more practical. At difficult moments, work out where your problems might lie on this wheel. Where are your strengths and where are your weaknesses?"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "381a6a85789e",
        "_type": "block",
        "children": [
          {
            "_key": "a7a00db9adf80",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Practice experiential awareness:"
          },
          {
            "_key": "a7a00db9adf81",
            "_type": "span",
            "marks": [],
            "text": " The studies above show that experiential awareness is an important component of meaning in life. Here are two ways to practice it in your own life:"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "53b5d2b1a793",
        "_type": "block",
        "children": [
          {
            "_key": "88d3d131d15a0",
            "_type": "span",
            "marks": [
              "strong",
              "em"
            ],
            "text": "Spend time in nature"
          },
          {
            "_key": "88d3d131d15a1",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": ":"
          },
          {
            "_key": "88d3d131d15a2",
            "_type": "span",
            "marks": [],
            "text": " Whether it’s a short walk through your local park or a bigger trip out into the wilderness, make regular time for interacting with nature. And when you can’t get out of the house, nature documentaries are a great fallback! Although the mechanisms are still unclear, there are several ways nature might benefit emotional wellbeing. For example, observing nature’s breathtaking beauty is like visiting the best art gallery on Earth. There’s a reason so many paintings represent natural scenes and landscapes. Since we evolved in the natural world, our psychology reacts to it in a profoundly positive way. Nature’s immensity also makes you feel connected to something bigger outside yourself. When you’re immersed in nature, you realize the grand world that you’re a part of. This puts some of your smaller daily problems into perspective. Finally, in nature, you’re exposed to calm and natural sensory stimulation. For city dwellers, this is a refreshing experience because the sensory stimulation you experience in a city is hectic and exhausting. Glaring ads grab your attention from the left, a pushy pedestrian grabs your attention from the right, and car horns grab your attention from everywhere else. Nature allows you to be more voluntary and relaxed about how your attention is drifting"
          }
        ],
        "level": 1,
        "listItem": "number",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "cf69ed458170",
        "_type": "block",
        "children": [
          {
            "_key": "2d7c4a572a880",
            "_type": "span",
            "marks": [
              "strong",
              "em"
            ],
            "text": "Learn to be mindful:"
          },
          {
            "_key": "2d7c4a572a881",
            "_type": "span",
            "marks": [],
            "text": " Experiential appreciation is all about living in the moment and focusing your attention on enjoying sensations as they happen. You can practice this ability with mindfulness techniques. If you’re interested in a good meditation guide, I enjoy the "
          },
          {
            "_key": "2d7c4a572a882",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "Waking Up"
          },
          {
            "_key": "2d7c4a572a883",
            "_type": "span",
            "marks": [],
            "text": " meditation app. If you’re looking for a short read or listen, here’s a "
          },
          {
            "_key": "2d7c4a572a884",
            "_type": "span",
            "marks": [
              "eec281a4fa48"
            ],
            "text": "helpful NPR feature on Jon Kabat-Zinn"
          },
          {
            "_key": "2d7c4a572a885",
            "_type": "span",
            "marks": [],
            "text": " — a pioneer in science-based mindfulness. Here’s a great quote from the piece: “The real meditation practice is the 24 hours itself — it’s life itself. It’s not sitting on a cushion in the cross-legged posture or lying in a yoga pose called the corpse pose or anything like that… we’re cultivating "
          },
          {
            "_key": "2d7c4a572a886",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "that"
          },
          {
            "_key": "2d7c4a572a887",
            "_type": "span",
            "marks": [],
            "text": " so that we get more comfortable with living out "
          },
          {
            "_key": "2d7c4a572a888",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "all"
          },
          {
            "_key": "2d7c4a572a889",
            "_type": "span",
            "marks": [],
            "text": " our moments as if they really mattered and therefore being there for them — the good ones, the bad ones, the ugly ones, the stressful ones, the difficult ones, the painful ones.”"
          }
        ],
        "level": 1,
        "listItem": "number",
        "markDefs": [
          {
            "_key": "eec281a4fa48",
            "_type": "link",
            "href": "https://www.npr.org/2021/12/21/1066585316/mindfulness-meditation-with-john-kabat-zinn"
          }
        ],
        "style": "normal"
      }
    ],
    "categories": [
      {
        "_createdAt": "2022-05-20T09:24:42Z",
        "_id": "b8d3f123-2ee7-4357-911a-aa61b2244395",
        "_rev": "O6BCyrheCnoszLth8lZotK",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:24:42Z",
        "color": "blue",
        "slug": {
          "_type": "slug",
          "current": "design"
        },
        "title": "Design"
      },
      {
        "_createdAt": "2022-05-11T13:25:04Z",
        "_id": "f4c59db9-b221-4ba0-87b8-4d0bdb467ece",
        "_rev": "O6BCyrheCnoszLth8lZdkw",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:12:57Z",
        "color": "purple",
        "slug": {
          "_type": "slug",
          "current": "lifestyle"
        },
        "title": "Lifestyle"
      }
    ],
    "excerpt": "It is a cliche philosophical question, but it touches on something fundamental about how humans relate to the world around them. ",
    "featured": true,
    "mainImage": {
      "_type": "image",
      "asset": {
        "_ref": "image-12301f301772ed723724302aef7c70c5c1c0151f-4500x8000-jpg",
        "_type": "reference"
      },
      "crop": {
        "_type": "sanity.imageCrop",
        "bottom": 0.19878602620087327,
        "left": 0,
        "right": 0,
        "top": 0.1349781659388646
      },
      "hotspot": {
        "_type": "sanity.imageHotspot",
        "height": 0.5729781659388646,
        "width": 1,
        "x": 0.5,
        "y": 0.5147248908296944
      }
    },
    "publishedAt": "2022-10-21T06:05:00.000Z",
    "slug": {
      "_type": "slug",
      "current": "14-architectural-design-ideas-for-spacious-interior"
    },
    "title": "14 Architectural Design Ideas for a Spacious Interior"
  },
  {
    "_createdAt": "2022-10-20T12:26:04Z",
    "_id": "1f7abbac-cae1-40db-b6de-8a89e6e013cd",
    "_rev": "gRGoUIxCh2CGKUqx0IJVXn",
    "_type": "post",
    "_updatedAt": "2022-10-20T15:21:14Z",
    "author": {
      "_createdAt": "2022-05-11T13:17:13Z",
      "_id": "290948c1-9a04-41a4-9b07-960131320993",
      "_rev": "L1x6OoCeBFQajmzrxwelTR",
      "_type": "author",
      "_updatedAt": "2022-05-20T12:50:25Z",
      "bio": [
        {
          "_key": "49decc02f4f6",
          "_type": "block",
          "children": [
            {
              "_key": "add99fe1bf81",
              "_type": "span",
              "marks": [],
              "text": "Mario is a Staff Engineer specialising in Frontend at "
            },
            {
              "_key": "08c2faf2f982",
              "_type": "span",
              "marks": [
                "8fb88fe0431f"
              ],
              "text": "Vercel"
            },
            {
              "_key": "e9332a10a47c",
              "_type": "span",
              "marks": [],
              "text": ", as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple."
            }
          ],
          "markDefs": [
            {
              "_key": "8fb88fe0431f",
              "_type": "link",
              "href": "https://vercel.com/"
            }
          ],
          "style": "normal"
        }
      ],
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "image-4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648-jpg",
          "_type": "reference"
        }
      },
      "name": "Mario Sanchez",
      "slug": {
        "_type": "slug",
        "current": "mario-sanchez"
      }
    },
    "body": [
      {
        "_key": "475712b3aaff",
        "_type": "block",
        "children": [
          {
            "_key": "b141ba0dd0ea0",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limelight."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "357b32ac6724",
        "_type": "block",
        "children": [
          {
            "_key": "e962329b089e0",
            "_type": "span",
            "marks": [],
            "text": "Simply understood, brand architecture is the art and science of structuring the portfolio to meet your strategic goals, defining the brand number, scope, and relationships needed to compete. Just as Modern Architecture prioritized function, a Brand Architecture is only as good as it is well-suited for the purpose it strives to achieve. Given the disruption observed today across industries and segments, it’s no wonder that companies are considering structural rather than topical solutions to the challenges they face."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "9f47e3fe304f",
        "_type": "block",
        "children": [
          {
            "_key": "520c166f19680",
            "_type": "span",
            "marks": [],
            "text": "Yet the context in which brand architecture decisions are being made has changed. Gone are the days of “competitive strategy”, with the military-inspired view of competition as a zero-sum game, where market share needs to be stolen from competitors, often in a street-by-street battle to win over each individual segment. The type of brand architecture required to win in this game demanded a dogged focus on each segment, and a sniper-like collection of individual brands sharply focused on each one. While there was always a place for a variety of architectures — see Joachimsthaler’s brand relationship spectrum — houses of brands were favored, as it enabled segment-by-segment competition and risk protection. P&G was the king of houses of brands, slicing and dicing the market not just by products and demographics, but also by psychographics, price range, buying patterns or attitudes. In B2B, houses of brands were omnipresent, with a product-driven logic that led to branding new features meant to provide short-term competitive advantage."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "dcf1f8538f11",
        "_type": "block",
        "children": [
          {
            "_key": "2d222e3d03b20",
            "_type": "span",
            "marks": [],
            "text": "In today’s day and age, companies like Google or Amazon do not pursue growth through incremental market share gains; rather, they focus on understanding their customers’ needs and creating entirely new markets to answer them. Creating a house of brands for these markets would be folly — not only would each brand need to be created from scratch, increasing the already significant investment, but the new category itself often needs to be explained to consumers, compounding the cost."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "bcd7b6fa9e4b",
        "_type": "block",
        "children": [
          {
            "_key": "bf56428c95aa0",
            "_type": "span",
            "marks": [],
            "text": "Instead, investing in a strong master brand-led architecture and putting multiple if not all brands under the leadership of a strong brand, presents numerous advantages. First, mergers and acquisitions, or partnerships, are making it necessary to bring multiple market participants to “the same page” — and this common ground often involves a master brand recognized by all. Second, the risk profile of a “branded house” architecture has changed: the master brand can create an aura of innovation and risk-taking, supporting the launch of new products. Third, investments can be streamlined, as a strong master brand can be leveraged across markets and product launches. Finally, a track record of success in creating new categories can create goodwill, creating a virtual circle of success. To achieve this, brand architecture does not need to be a pure “branded house” — in many cases, a strong master brand creates substantial leverage and a much cleaner portfolio, even as a few particularly strong brands can continue existing as sub-brands. An example of this is Salesforce, that leverages its master brand consistently — yet allows more independence to a few specific sub-brands, such as Pardot."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "f763ab14fe08",
        "_type": "block",
        "children": [
          {
            "_key": "6decfd059ce80",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "There are 3 key imperatives to build this type of brand architecture — to be clear, meaningful and stretchable."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "d4bfd80df0bb",
        "_type": "block",
        "children": [
          {
            "_key": "0bdafd38e8bd0",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Clear"
          },
          {
            "_key": "0bdafd38e8bd1",
            "_type": "span",
            "marks": [],
            "text": ": Just as modern architecture thrives on clear and clean lines, so does brand architecture. In the age of micro-segmentation, micro-targeting, information overload and digital fragmentation, you need a clear and loud voice in order to stand out. In the context of short attention spans where specific moments and needstates need to be targeted in addition to consumer/customer profiles, multiple brands often lead to confusion. The technology space understood this early, where clear and simple architectures that bring together simple design, as Apple, with complex technology, as SAP — always under the discipline of a rigorously simple way to organize."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "767a5ce2139e",
        "_type": "block",
        "children": [
          {
            "_key": "508ee1101a210",
            "_type": "span",
            "marks": [],
            "text": "In addition, one of the key reasons for the regained popularity of clean, streamlined architectures, often organized around a single master brand, has been the emergence of platforms, or 2-way marketplaces structured around mutual value creation. By definition, bringing various stakeholder groups to one "
          },
          {
            "_key": "508ee1101a211",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "platform"
          },
          {
            "_key": "508ee1101a212",
            "_type": "span",
            "marks": [],
            "text": " requires building a "
          },
          {
            "_key": "508ee1101a213",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "single brand"
          },
          {
            "_key": "508ee1101a214",
            "_type": "span",
            "marks": [],
            "text": ", in order to enable network effects so critical for building scale. As Uber expands into different marketplaces and “uberizes” different industries, leveraging the power of its master brand is likely to lead to faster expansion than building a targeted brand for each industry from scratch."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "9f1241f498fd",
        "_type": "block",
        "children": [
          {
            "_key": "ecdd9d52e5cb0",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Meaningful"
          },
          {
            "_key": "ecdd9d52e5cb1",
            "_type": "span",
            "marks": [],
            "text": ": Just as modern architecture prioritizes function over embellishments, a solid brand architecture is founded on brands and values meaningful to consumers (or customers), rather than product feature distinctions. Brand architecture needs to be re-organized around brands that have a “reason for being” compelling enough to elicit passion, and introducing a clear distinction between brands that merit air time with consumers vs. “clutter”. The “decluttering” trend is gaining traction in brand architecture — just as in the popular consumer “decluttering” technique, only brands that “bring joy” to consumers get the spotlight. TED, for example, leverages the powerful TED master brand, positioned around “ideas worth spreading”, in a set of sub-brands that target meaningful occasions and contexts for intellectual exploration (TED Talks, TEDx, TED-Ed, TED Prize, TED Fellows, TED Institute, TED Radio Hour)."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "4785981be5ae",
        "_type": "block",
        "children": [
          {
            "_key": "6daa5e6cc0a90",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Stretchable"
          },
          {
            "_key": "6daa5e6cc0a91",
            "_type": "span",
            "marks": [],
            "text": ": Modern architecture is dynamic — it finds its force in the midst of usage; movement is often embedded into its very bones. In today’s fast-changing world, brand architecture is a moving target — clients increasingly ask to design architectures that fit their growth ambitions, thinking through future growth scenarios and architecting space for the future product pipeline. In particular in industries undergoing disruption, where next generation products aim to upset the status quo, their addition to any brand architecture may require a fundamental rethink."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "5d5afb07e0a3",
        "_type": "block",
        "children": [
          {
            "_key": "725d4296c8a30",
            "_type": "span",
            "marks": [],
            "text": "Much as strategy has become “real time” as the window for strategic planning has shortened, brand architecture is also becoming more “real time”, requiring more frequent reassessment, adaptations and flexibility as markets change. Witness the frequency with which Uber readjusts its portfolio. WeWork, the popular co-working space, also exploits the strength of the master brand to stretch into near-in categories such as hospitality with WeLive or the ventures space with WeWork Labs."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "5461c8a0b882",
        "_type": "block",
        "children": [
          {
            "_key": "69d9429eb5750",
            "_type": "span",
            "marks": [],
            "text": "Traditionally, companies considered a house of brands architecture as a risk management tool — a way not to put all your eggs in one basket. It turns out, in the age of platforms and digital disruption, a masterbrand-led architecture can help you build a bigger basket, to hold more eggs."
          }
        ],
        "markDefs": [],
        "style": "normal"
      }
    ],
    "categories": [
      {
        "_createdAt": "2022-05-11T13:25:04Z",
        "_id": "f4c59db9-b221-4ba0-87b8-4d0bdb467ece",
        "_rev": "O6BCyrheCnoszLth8lZdkw",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:12:57Z",
        "color": "purple",
        "slug": {
          "_type": "slug",
          "current": "lifestyle"
        },
        "title": "Lifestyle"
      },
      {
        "_createdAt": "2022-05-11T13:13:53Z",
        "_id": "03582614-ca7f-4ba0-8296-5c02f7988cc2",
        "_rev": "O6BCyrheCnoszLth8lZd2o",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:12:32Z",
        "color": "green",
        "slug": {
          "_type": "slug",
          "current": "personal-growth"
        },
        "title": "Personal Growth"
      }
    ],
    "excerpt": "That was so fun! I’ve got a new addiction! my athlete friend exclaimed, tired but happy in the car on the way home. “Let’s do it again tomorrow.”",
    "featured": true,
    "mainImage": {
      "_type": "image",
      "asset": {
        "_ref": "image-2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472-jpg",
        "_type": "reference"
      }
    },
    "publishedAt": "2022-10-20T12:28:00.000Z",
    "slug": {
      "_type": "slug",
      "current": "every-next-level-of-your-life-will-demand-a-different-you"
    },
    "title": "Every Next Level of Your Life Will Demand a Different You"
  },
  {
    "_createdAt": "2022-10-20T13:33:08Z",
    "_id": "022e55cf-f566-4c0b-9100-43af3e217af9",
    "_rev": "p2efkKuWHrteZK2KTC7Qle",
    "_type": "post",
    "_updatedAt": "2022-10-20T15:20:55Z",
    "author": {
      "_createdAt": "2022-05-11T13:22:25Z",
      "_id": "95daa366-f2e1-42d9-879c-fecf89731048",
      "_rev": "g8TtsqiUI2SyF4eBZNE4zL",
      "_type": "author",
      "_updatedAt": "2022-05-20T12:44:50Z",
      "bio": [
        {
          "_key": "a6c7a5d07a03",
          "_type": "block",
          "children": [
            {
              "_key": "88ec1f6c13aa",
              "_type": "span",
              "marks": [],
              "text": "Erika Oliver is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "image-4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472-jpg",
          "_type": "reference"
        }
      },
      "name": "Erika Oliver",
      "slug": {
        "_type": "slug",
        "current": "erika-oliver"
      }
    },
    "body": [
      {
        "_key": "d28310d14960",
        "_type": "block",
        "children": [
          {
            "_key": "2d2dcab229210",
            "_type": "span",
            "marks": [],
            "text": "We always knew but now we "
          },
          {
            "_key": "2d2dcab229211",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "know"
          },
          {
            "_key": "2d2dcab229212",
            "_type": "span",
            "marks": [],
            "text": ". The tech elite mean to leave us all behind."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "8fffc543f37f",
        "_type": "block",
        "children": [
          {
            "_key": "1e9421e2c9ed0",
            "_type": "span",
            "marks": [],
            "text": "I learned this when I traveled to a remote resort to deliver what was supposed to be a talk for a group of tech investors. It turned out to be something of a “consult” to five ultra-wealthy men on their apocalypse survival strategies."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "c6b43c8aeb9b",
        "_type": "block",
        "children": [
          {
            "_key": "23825e8c35770",
            "_type": "span",
            "marks": [],
            "text": "The experience led to a much-circulated piece "
          },
          {
            "_key": "23825e8c35771",
            "_type": "span",
            "marks": [
              "a6128e65425b"
            ],
            "text": "here"
          },
          {
            "_key": "23825e8c35772",
            "_type": "span",
            "marks": [],
            "text": " and an option for "
          },
          {
            "_key": "23825e8c35773",
            "_type": "span",
            "marks": [
              "5f14053cea93"
            ],
            "text": "a movie"
          },
          {
            "_key": "23825e8c35774",
            "_type": "span",
            "marks": [],
            "text": ". But it also set me off on a multi-year journey to understand “The Mindset” leading the wealthy to believe that as long they have enough money and the right technology, they can break the laws of physics, economics, and morality to escape a disaster of their own making. They are preparing for a digital future that has less to do with making the world a better place than transcending the human condition altogether."
          }
        ],
        "markDefs": [
          {
            "_key": "a6128e65425b",
            "_type": "link",
            "href": "https://onezero.medium.com/survival-of-the-richest-9ef6cddd0cc1"
          },
          {
            "_key": "5f14053cea93",
            "_type": "link",
            "href": "http://v/"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "5ddbbd0ab1da",
        "_type": "block",
        "children": [
          {
            "_key": "0fec00ca8f190",
            "_type": "span",
            "marks": [],
            "text": "These billionaires once showered the world with optimistic business plans for how tech might benefit human society. Now they’ve reduced technological progress to a video game that one of them wins by finding the escape hatch. Will it be Bezos migrating to space, Thiel to his New Zealand compound, or Zuckerberg to his Metaverse?"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "34e4eb8a60b3",
        "_type": "block",
        "children": [
          {
            "_key": "daff566beb430",
            "_type": "span",
            "marks": [],
            "text": "This “out of sight, out of mind” externalization of poverty and poison trickles down through the Mindset to the rest of us; but the collateral damage doesn’t go away just because we’ve covered our eyes with VR goggles. The longer we ignore the social, economic, and environmental repercussions of our actions, the more of a problem they become. This, in turn, motivates even more withdrawal, isolationism, and apocalyptic fantasy."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "844e170c87a2",
        "_type": "block",
        "children": [
          {
            "_key": "db564ccb89340",
            "_type": "span",
            "marks": [],
            "text": "The Mindset is based in a staunchly atheistic and materialist scientism, a faith in technology to solve problems, an adherence to biases of digital code, an understanding of human relationships as market phenomena, a fear of nature and women, a need to see one’s contributions as utterly unique innovations without precedent, and an urge to neutralize the unknown by dominating and de-animating it."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "d4d1b77156c3",
        "_type": "block",
        "children": [
          {
            "_key": "43d0be76066c0",
            "_type": "span",
            "marks": [],
            "text": "The technosolutionist future climaxes by uploading our economy to the blockchain and our minds to the cloud. We “level up” in the ultimate exit strategy. Like the plot of a Marvel blockbuster, the very structure of The Mindset requires an endgame. Everything must resolve to a one or a zero, a winner or loser, the saved or the damned."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "efb7f46ae28c",
        "_type": "block",
        "children": [
          {
            "_key": "bb69b1ecced10",
            "_type": "span",
            "marks": [],
            "text": "This fatalist drive to rise above and separate from humanity is no more the result of runaway digital capitalism than its cause — a way of treating one another and the world that can be traced back to the sociopathic tendencies of empirical science, individualism, sexual domination, and perhaps even “progress” itself. But this Mindset can be denaturalized and replaced."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "a7b96fd1d989",
        "_type": "block",
        "children": [
          {
            "_key": "fbdec074dcae0",
            "_type": "span",
            "marks": [],
            "text": "We must act as a counterculture to The Mindset, introducing circularity where they see only arrows, and more thoughtful, long-term thinking when they can only strive for escape."
          }
        ],
        "markDefs": [],
        "style": "blockquote"
      },
      {
        "_key": "8b21814738f1",
        "_type": "block",
        "children": [
          {
            "_key": "7608614c0d580",
            "_type": "span",
            "marks": [],
            "text": "Those of us who recognize that we’ve been here before are the ones who have to call attention to where we are heading. Today, that means acting as a counterculture to The Mindset, introducing circularity where they see only arrows, and more thoughtful, long-term thinking when they can only strive for escape. We still have choices."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "daee20094352",
        "_type": "block",
        "children": [
          {
            "_key": "41bc885297940",
            "_type": "span",
            "marks": [],
            "text": "Mine, was to chronicle my experiences with the tech elite over the years, and call out the ways in which our dreams for a better future too often involved externalizing harm to others, or ignoring today’s impacts for tomorrow’s promised gains. Just the announcement of this book has already led to the cancellation of two speaking events by sponsors who fear being associated with a critique of runaway exponential capitalism (which is what many of them are still trying to sell as a desired and attainable outcome). I take this as a good sign."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "886329405bf8",
        "_type": "block",
        "children": [
          {
            "_key": "a8c22a5f1b160",
            "_type": "span",
            "marks": [],
            "text": "Yes, I’d love you to "
          },
          {
            "_key": "a8c22a5f1b161",
            "_type": "span",
            "marks": [
              "e95f098091b4"
            ],
            "text": "support this book by pre-ordering it"
          },
          {
            "_key": "a8c22a5f1b162",
            "_type": "span",
            "marks": [],
            "text": " or (better yet) asking your library to carry it. It’s being published by an "
          },
          {
            "_key": "a8c22a5f1b163",
            "_type": "span",
            "marks": [
              "f31c6f7c617b"
            ],
            "text": "employee-owned company"
          },
          {
            "_key": "a8c22a5f1b164",
            "_type": "span",
            "marks": [],
            "text": ", and in as friendly a fashion as possible. But more importantly, I’m hoping you’ll read it by any means necessary, and join me and others in imagining a better path forward."
          }
        ],
        "markDefs": [
          {
            "_key": "e95f098091b4",
            "_type": "link",
            "href": "https://wwnorton.com/search/cnVzaGtvZmYgc3Vydml2YWw="
          },
          {
            "_key": "f31c6f7c617b",
            "_type": "link",
            "href": "https://en.wikipedia.org/wiki/W._W._Norton_%26_Company"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "eaa2daf3727b",
        "_type": "block",
        "children": [
          {
            "_key": "c032ca2c31630",
            "_type": "span",
            "marks": [],
            "text": "We do not have to buy-in to the apocalypse for which these billionaires are actively preparing and, in some cases, they are "
          },
          {
            "_key": "c032ca2c31631",
            "_type": "span",
            "marks": [
              "8ea1fd30ce74"
            ],
            "text": "intentionally accelerating"
          },
          {
            "_key": "c032ca2c31632",
            "_type": "span",
            "marks": [],
            "text": ". There’s no way out, except together."
          }
        ],
        "markDefs": [
          {
            "_key": "8ea1fd30ce74",
            "_type": "link",
            "href": "https://www.theguardian.com/world/2017/may/11/accelerationism-how-a-fringe-philosophy-predicted-the-future-we-live-in"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "f5fa53163b13",
        "_type": "block",
        "children": [
          {
            "_key": "f7cbc416e1d50",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "Douglas Rushkoff’s upcoming book,"
          },
          {
            "_key": "f7cbc416e1d51",
            "_type": "span",
            "marks": [],
            "text": " Survival of the Richest: Escape Fantasies of the Tech Billionaires"
          },
          {
            "_key": "f7cbc416e1d52",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": ", is"
          },
          {
            "_key": "f7cbc416e1d53",
            "_type": "span",
            "marks": [],
            "text": " "
          },
          {
            "_key": "f7cbc416e1d54",
            "_type": "span",
            "marks": [
              "73b960963e0f",
              "em"
            ],
            "text": "available for pre-order"
          },
          {
            "_key": "f7cbc416e1d55",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": ". Rushkoff is a weekly columnist on Medium, and the author of books including"
          },
          {
            "_key": "f7cbc416e1d56",
            "_type": "span",
            "marks": [],
            "text": " Team Human, Throwing Rocks at the Google Bus, Present Shock"
          },
          {
            "_key": "f7cbc416e1d57",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": ", and"
          },
          {
            "_key": "f7cbc416e1d58",
            "_type": "span",
            "marks": [],
            "text": " Program or Be Programmed"
          },
          {
            "_key": "f7cbc416e1d59",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": ". Rushkoff is host of the"
          },
          {
            "_key": "f7cbc416e1d510",
            "_type": "span",
            "marks": [],
            "text": " "
          },
          {
            "_key": "f7cbc416e1d511",
            "_type": "span",
            "marks": [
              "76df3f6b6cd3",
              "em"
            ],
            "text": "Team Human podcast"
          },
          {
            "_key": "f7cbc416e1d512",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": ", a graphic novelist, and a professor of media theory and digital economics."
          }
        ],
        "markDefs": [
          {
            "_key": "73b960963e0f",
            "_type": "link",
            "href": "https://wwnorton.com/books/9780393881066"
          },
          {
            "_key": "76df3f6b6cd3",
            "_type": "link",
            "href": "http://teamhuman.fm/"
          }
        ],
        "style": "normal"
      }
    ],
    "categories": [
      {
        "_createdAt": "2022-05-11T13:25:13Z",
        "_id": "7b4ccaee-66ff-4a44-be8a-f82af8f40759",
        "_rev": "g8TtsqiUI2SyF4eBZMelQ3",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:11:29Z",
        "color": "orange",
        "slug": {
          "_type": "slug",
          "current": "travel"
        },
        "title": "Travel"
      }
    ],
    "excerpt": "I learned this when I traveled to a remote resort to deliver what was supposed to be a talk for a group of tech investors. It turned out to be something of a “consult” to five ultra-wealthy men.",
    "featured": true,
    "mainImage": {
      "_type": "image",
      "asset": {
        "_ref": "image-b7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937-jpg",
        "_type": "reference"
      }
    },
    "publishedAt": "2022-10-19T13:34:00.000Z",
    "slug": {
      "_type": "slug",
      "current": "this-bread-pudding-will-give-you-all-the-fall-feels"
    },
    "title": "This Bread Pudding Will Give You All the Fall Feels"
  },
  {
    "_createdAt": "2022-10-20T12:32:15Z",
    "_id": "87586610-e9e3-4af1-81df-5ff54bf3cc11",
    "_rev": "tnjGEXgFmY2tkHBnvdFGmT",
    "_type": "post",
    "_updatedAt": "2022-10-20T15:18:25Z",
    "author": {
      "_createdAt": "2022-05-11T13:23:45Z",
      "_id": "621402af-4c79-4728-9fbd-19b17e6256bc",
      "_rev": "O6BCyrheCnoszLth8lfUkA",
      "_type": "author",
      "_updatedAt": "2022-05-20T12:49:09Z",
      "bio": [
        {
          "_key": "26377e41356f",
          "_type": "block",
          "children": [
            {
              "_key": "ba1d24e6bafb",
              "_type": "span",
              "marks": [],
              "text": "Joshua is a Microsoft Azure Certified Cloud Professional and a Google Certified Associate Cloud Engineer. A Data Analytics at Acme, specializing in the use of cloud infrastructure for Machine Learning and Deep Learning operation at scale."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "image-cd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415-jpg",
          "_type": "reference"
        },
        "crop": {
          "_type": "sanity.imageCrop",
          "bottom": 0.4139017543859651,
          "left": 0,
          "right": 0,
          "top": 0
        },
        "hotspot": {
          "_type": "sanity.imageHotspot",
          "height": 0.5860982456140349,
          "width": 1,
          "x": 0.5,
          "y": 0.29304912280701745
        }
      },
      "name": "Joshua Wood",
      "slug": {
        "_type": "slug",
        "current": "joshua-wood"
      }
    },
    "body": [
      {
        "_key": "4f261ea7150e",
        "_type": "block",
        "children": [
          {
            "_key": "775fcba113500",
            "_type": "span",
            "marks": [],
            "text": "I recently went to the mountains with my friends. We were celebrating 50 years of friendship. It was very special. Six of us were to be together spending time in the mountains."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "bf950c95df4a",
        "_type": "block",
        "children": [
          {
            "_key": "849c6124e67e0",
            "_type": "span",
            "marks": [],
            "text": "I had never been to that place nor heard of the name. I was told by my friends that they had done all the bookings. I had to just pack and join them at the station."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "5ee2b75d8a8f",
        "_type": "block",
        "children": [
          {
            "_key": "c1dbd7170de30",
            "_type": "span",
            "marks": [],
            "text": "We would be going to "
          },
          {
            "_key": "c1dbd7170de31",
            "_type": "span",
            "marks": [
              "731125b2a0b4"
            ],
            "text": "‘"
          },
          {
            "_key": "c1dbd7170de32",
            "_type": "span",
            "marks": [
              "731125b2a0b4",
              "em"
            ],
            "text": "Kumarsain’"
          },
          {
            "_key": "c1dbd7170de33",
            "_type": "span",
            "marks": [],
            "text": " "
          },
          {
            "_key": "c1dbd7170de34",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "which is at the foothill of"
          },
          {
            "_key": "c1dbd7170de35",
            "_type": "span",
            "marks": [],
            "text": " "
          },
          {
            "_key": "c1dbd7170de36",
            "_type": "span",
            "marks": [
              "bfc4f82344c8",
              "em"
            ],
            "text": "Kotgarh."
          },
          {
            "_key": "c1dbd7170de37",
            "_type": "span",
            "marks": [],
            "text": " "
          },
          {
            "_key": "c1dbd7170de38",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "Both are growing areas of apples, pears, apricots, almonds, cherries, and plums in Himachal Pradesh."
          }
        ],
        "markDefs": [
          {
            "_key": "731125b2a0b4",
            "_type": "link",
            "href": "https://en.wikipedia.org/wiki/Kumarsain"
          },
          {
            "_key": "bfc4f82344c8",
            "_type": "link",
            "href": "https://www.incredibleindia.org/content/incredibleindia/en/destinations/shimla/kotgarh.html"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "fa340473cdbe",
        "_type": "block",
        "children": [
          {
            "_key": "628119867b160",
            "_type": "span",
            "marks": [],
            "text": "We were to go on the fast train called Shatabdi from Delhi to Kalka and the onward journey would be in an SUV called an Innova."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "9497d830f369",
        "_type": "block",
        "children": [
          {
            "_key": "fcae01b2cc000",
            "_type": "span",
            "marks": [],
            "text": "We reached Kalka and the cab was waiting for us. We were excited souls. We reached the mountains at 8.30 PM after a long and arduous journey and were even wondering whether it was worth it."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "5022a4e760c8",
        "_type": "block",
        "children": [
          {
            "_key": "3ba1aa2d64ca0",
            "_type": "span",
            "marks": [],
            "text": "We reached our destination. It was calm quiet with the soft rustling winds whistling through the trees."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "f44c7a8de1b5",
        "_type": "block",
        "children": [
          {
            "_key": "7a07024c2fad0",
            "_type": "span",
            "marks": [],
            "text": "The clean neat guest house The Wheeler Lodge B&B looked amazing and inviting."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "13da6063031d",
        "_type": "block",
        "children": [
          {
            "_key": "9a2ecdcc43540",
            "_type": "span",
            "marks": [],
            "text": "Inspirational welcome"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "b68010d2aa09",
        "_type": "block",
        "children": [
          {
            "_key": "8d2af27020970",
            "_type": "span",
            "marks": [],
            "text": "The host and the hostess at the Wheeler lodge were waiting to welcome us. The warm welcome we received from them made us feel very much at home. The hostess had a major kidney surgery which we did not know about. They did not cancel our booking having committed to it."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "5345acc09291",
        "_type": "block",
        "children": [
          {
            "_key": "713994f44e280",
            "_type": "span",
            "marks": [],
            "text": "She smiled and was very soft-spoken. Their two children were equally warm and treated us with respect, happiness, and kindness."
          }
        ],
        "markDefs": [],
        "style": "blockquote"
      },
      {
        "_key": "597fd4fc6e0c",
        "_type": "block",
        "children": [
          {
            "_key": "13ecf0bff4f40",
            "_type": "span",
            "marks": [],
            "text": "They served us fresh food. We enjoyed the simple but tasty homemade food. The whole family served the food and kept us busy with anecdotes about the small village. I could see that they were all proud of their beautiful village."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "192174a9cb3b",
        "_type": "block",
        "children": [
          {
            "_key": "a28247d5fa460",
            "_type": "span",
            "marks": [],
            "text": "They were humble and lovely as a family. We came to know that these young girls between the age of 10 and 13 walk 4kms to school every day on the steep elevated mountains. Winter and summer they bear it all. This makes the children hardy and strong."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "701bddeccbd8",
        "_type": "block",
        "children": [
          {
            "_key": "bc8b7e274dc50",
            "_type": "span",
            "marks": [],
            "text": "The girls also help out at the two beautiful orchards that they possessed at the time of sowing and picking the fruit. The orchards had fruit trees of apples, apricots, almonds, and cherries."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "a348c546f4e6",
        "_type": "block",
        "children": [
          {
            "_key": "cf95595d78db0",
            "_type": "span",
            "marks": [],
            "text": "Community work"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "5728ea0d2645",
        "_type": "block",
        "children": [
          {
            "_key": "71bd2deac4660",
            "_type": "span",
            "marks": [],
            "text": "Taking a round of the orchards I found that a large number of people were working there. I enquired whether these people were specially hired for the work in the orchard. While some of them were laborers that come in from Nepal and Bihar other people were owners of orchards who had come to help as they believed in helping the community and worked in each other’s orchards when the need arose."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "da9436f34414",
        "_type": "block",
        "children": [
          {
            "_key": "e5189e43f7900",
            "_type": "span",
            "marks": [],
            "text": "The people looked happy and relaxed and completely tension-free. The air was pure. There was no pollution. It was cool weather. The village consisted of only 150 people who helped each other all the time."
          }
        ],
        "markDefs": [],
        "style": "blockquote"
      },
      {
        "_key": "12f3b5ede3e1",
        "_type": "block",
        "children": [
          {
            "_key": "8c3a012657be0",
            "_type": "span",
            "marks": [],
            "text": "The community experience was something like the Japanese Ikegai in that the community work gave each person a sense of belonging and a purpose to do some work together. People are happy and committed to each other. They work together in unison."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "79e4133e3ae2",
        "_type": "block",
        "children": [
          {
            "_key": "a0cfb0b3845e0",
            "_type": "span",
            "marks": [],
            "text": "This purpose of life and good physical work keeps their bodies fit too. They sleep well."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "d81b01d7469c",
        "_type": "block",
        "children": [
          {
            "_key": "2487fe721f6b0",
            "_type": "span",
            "marks": [],
            "text": "In fact in the quiet village with pollution-free and pure air we all from big cities slept extremely well. Every night was refreshing."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "efead3000daa",
        "_type": "block",
        "children": [
          {
            "_key": "8fb0f81461860",
            "_type": "span",
            "marks": [],
            "text": "Patience"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "51c548be6a0b",
        "_type": "block",
        "children": [
          {
            "_key": "62d386f4e2a80",
            "_type": "span",
            "marks": [],
            "text": "People in the village were very patient. Farming teaches you a lot of patience. Once you sow the trees, it takes four years for the fruits to arrive. The trees last between 10–15 years giving fruit. Once the buds begin to flower it takes six months for the apples to be ripe and sold on the market."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "033f66c58b06",
        "_type": "block",
        "children": [
          {
            "_key": "3b7df1a209c70",
            "_type": "span",
            "marks": [],
            "text": "During that time the farmers are free to do other jobs and patiently wait for a good crop."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "26660f6dd68c",
        "_type": "block",
        "children": [
          {
            "_key": "88af4b6b21ad0",
            "_type": "span",
            "marks": [],
            "text": "I found cherries to be the most cumbersome. Each cherry had to be picked individually. If they hit the ground they would spoil the crop. It could neither be eaten nor kept. The crop gets wasted."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "162e83f6e580",
        "_type": "block",
        "children": [
          {
            "_key": "35e511cd1c020",
            "_type": "span",
            "marks": [],
            "text": "They are also afraid that the hail storm and other pests would spoil the crop. So all the trees are covered with nets."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "1359ed3127d5",
        "_type": "block",
        "children": [
          {
            "_key": "5f60d063c10e0",
            "_type": "span",
            "marks": [],
            "text": "The apple and pear trees are netted to avoid destruction from weather and pests. "
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "8e6c4648d3af",
        "_type": "block",
        "children": [
          {
            "_key": "b59794a5d6320",
            "_type": "span",
            "marks": [],
            "text": "Longevity"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "f4bafba98dab",
        "_type": "block",
        "children": [
          {
            "_key": "f8972bb73ca90",
            "_type": "span",
            "marks": [],
            "text": "People in this village live a long life. It is stress-free living there. The parents are highly respected by their children."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "db916c21126b",
        "_type": "block",
        "children": [
          {
            "_key": "f5a5720576d90",
            "_type": "span",
            "marks": [],
            "text": "Even people in the community respect the elders and mingle with them and do their work."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "9f65036f5d59",
        "_type": "block",
        "children": [
          {
            "_key": "6177be5c48450",
            "_type": "span",
            "marks": [],
            "text": "In return, the old people offer life lessons storytelling and happiness to people."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "504414a74179",
        "_type": "block",
        "children": [
          {
            "_key": "ec3d5c9af91f0",
            "_type": "span",
            "marks": [],
            "text": "Some cook excellent dishes and send them to the youngsters. This life is like a partnership between young and old."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "a92c073f85ee",
        "_type": "block",
        "children": [
          {
            "_key": "0e281637721d0",
            "_type": "span",
            "marks": [],
            "text": "Photo of the old lady who is so happy and stress-free. "
          },
          {
            "_key": "0e281637721d1",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Photo clicked by the author"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "5ffd552a4a0f",
        "_type": "block",
        "children": [
          {
            "_key": "8ec952876f5a0",
            "_type": "span",
            "marks": [],
            "text": "We met this lovely lady who was 92 years old. She was happy. She sang songs for us and made us dance around her. She laughed and told us anecdotes of her young years."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "880500be60ad",
        "_type": "block",
        "children": [
          {
            "_key": "975e72fb445e0",
            "_type": "span",
            "marks": [],
            "text": "Before leaving Kumarsain she presented each one of us with a box of cherries. According to customs guests should not go empty-handed from your house. It is a gesture of love and goodwill to give them something."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "d83db785c70a",
        "_type": "block",
        "children": [
          {
            "_key": "a9ccbac1c72e0",
            "_type": "span",
            "marks": [],
            "text": "What are the lessons learned?"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "33d2f7befb12",
        "_type": "block",
        "children": [
          {
            "_key": "402e9eca86b30",
            "_type": "span",
            "marks": [],
            "text": "The lessons about happiness that we learned from the people of the Kumarsain Village were the following:"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "1e8e28c4dc38",
        "_type": "block",
        "children": [
          {
            "_key": "ccda28d34a360",
            "_type": "span",
            "marks": [],
            "text": "To greet people with a lovely smile even though there is some inconvenience to you."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "b492279e316c",
        "_type": "block",
        "children": [
          {
            "_key": "5b12a4b5eff20",
            "_type": "span",
            "marks": [],
            "text": "To make people feel welcome when they come to your house."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "9769d28f6d6c",
        "_type": "block",
        "children": [
          {
            "_key": "8455a43014090",
            "_type": "span",
            "marks": [],
            "text": "To have a common purpose in life. Community work shared with the purpose of being useful to other people helps in bringing happiness to your life."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "86d5ccf8d5e0",
        "_type": "block",
        "children": [
          {
            "_key": "6efd15d589080",
            "_type": "span",
            "marks": [],
            "text": "Whatever you do in life requires patience to bring fruits to the effort made by you. Wait with patience to get rewards."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "5365c7f9f56e",
        "_type": "block",
        "children": [
          {
            "_key": "f977c2bf7f1f0",
            "_type": "span",
            "marks": [],
            "text": "To spread love and happiness in the lives of people."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "144ce9d6417d",
        "_type": "block",
        "children": [
          {
            "_key": "0049c7ba4d670",
            "_type": "span",
            "marks": [],
            "text": "Being respectful towards elders and good exchanges between younger and old generations always helps in personal growth."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "49225073a5c5",
        "_type": "block",
        "children": [
          {
            "_key": "ec35ffaee9bc0",
            "_type": "span",
            "marks": [],
            "text": "To live in a stress-free environment take a retreat in the mountains where you do not require anything but love and fresh air to live a good life."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "0efd6e0e8648",
        "_type": "block",
        "children": [
          {
            "_key": "f32463c11d0b0",
            "_type": "span",
            "marks": [],
            "text": "Longevity is when life has less stress and more fun."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      }
    ],
    "categories": [
      {
        "_createdAt": "2022-05-11T13:25:13Z",
        "_id": "7b4ccaee-66ff-4a44-be8a-f82af8f40759",
        "_rev": "g8TtsqiUI2SyF4eBZMelQ3",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:11:29Z",
        "color": "orange",
        "slug": {
          "_type": "slug",
          "current": "travel"
        },
        "title": "Travel"
      }
    ],
    "excerpt": "I recently went to the mountains with my friends. We were celebrating 50 years of friendship. It was very special. Six of us were to be together spending time in the mountains.",
    "mainImage": {
      "_type": "image",
      "asset": {
        "_ref": "image-a5bd8977e7fd82666c00a45948583b1f9912d392-3847x5583-jpg",
        "_type": "reference"
      }
    },
    "publishedAt": "2022-10-19T12:34:00.000Z",
    "slug": {
      "_type": "slug",
      "current": "i-moved-across-the-country-and-never-looked-back"
    },
    "title": "I Moved Across the Country and Never Looked Back"
  },
  {
    "_createdAt": "2022-10-20T13:39:48Z",
    "_id": "14798c7d-bcfa-48bc-81d5-17b9a3ca2f6e",
    "_rev": "gRGoUIxCh2CGKUqx0IHgsn",
    "_type": "post",
    "_updatedAt": "2022-10-20T15:17:54Z",
    "author": {
      "_createdAt": "2022-05-11T13:17:13Z",
      "_id": "290948c1-9a04-41a4-9b07-960131320993",
      "_rev": "L1x6OoCeBFQajmzrxwelTR",
      "_type": "author",
      "_updatedAt": "2022-05-20T12:50:25Z",
      "bio": [
        {
          "_key": "49decc02f4f6",
          "_type": "block",
          "children": [
            {
              "_key": "add99fe1bf81",
              "_type": "span",
              "marks": [],
              "text": "Mario is a Staff Engineer specialising in Frontend at "
            },
            {
              "_key": "08c2faf2f982",
              "_type": "span",
              "marks": [
                "8fb88fe0431f"
              ],
              "text": "Vercel"
            },
            {
              "_key": "e9332a10a47c",
              "_type": "span",
              "marks": [],
              "text": ", as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple."
            }
          ],
          "markDefs": [
            {
              "_key": "8fb88fe0431f",
              "_type": "link",
              "href": "https://vercel.com/"
            }
          ],
          "style": "normal"
        }
      ],
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "image-4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648-jpg",
          "_type": "reference"
        }
      },
      "name": "Mario Sanchez",
      "slug": {
        "_type": "slug",
        "current": "mario-sanchez"
      }
    },
    "body": [
      {
        "_key": "16394a5e5ad8",
        "_type": "block",
        "children": [
          {
            "_key": "d58a64e6e7560",
            "_type": "span",
            "marks": [],
            "text": "Sitting on a patio overlooking English Bay, I am eating dinner and talking with a woman I have met only hours earlier. A memorable evening for both of us, it will see us share some of the most difficult and personal memories we have. Details will be different, but the trajectory similar, in both our cases centered around death. Not one, not a few, but hundreds of deaths. For each of us."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "e0cda9dc6eca",
        "_type": "block",
        "children": [
          {
            "_key": "02bd8a3ad79a0",
            "_type": "span",
            "marks": [],
            "text": "Okay, one, don’t worry, we’re getting to the sunsets! And two, please be assured that despite what it sounds like, I do have appropriate boundaries. Because what I have just described is the life of an HIV researcher. In town for an annual research and treatment conference, it was three days of the latest science, prevention, and support findings. And meeting people like Leena, who, like myself, is a qualitative researcher, working exclusively with women who have contracted HIV from rape or abuse. While my field is HIV, PTSD, and stigma, we do share the same approach, which uses a narrative model of inquiry. Meaning, our data is the individual and community story of HIV. If you’re interested in reading more about what I do, check out the piece below."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "92031d090247",
        "_type": "block",
        "children": [
          {
            "_key": "cb440a2d5e0d0",
            "_type": "span",
            "marks": [],
            "text": "Not surprisingly, we had a lot to talk about and found we had many things in common. Like, for example, sunrises and sunsets. For both of us, seeing them is inexplicably tied up in remembering loss from HIV. Something else she said really hit me. Originally from San Francisco, Leena talked about how HIV had literally torn her city apart. But then, oddly enough it became the shared history that helped it mend."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "e800d57e2b28",
        "_type": "block",
        "children": [
          {
            "_key": "bbd27e4d8e2f0",
            "_type": "span",
            "marks": [],
            "text": "Last night as I watched the sunset you see above and below, I thought again of what Leena had told me about San Francisco, inspiring me to write the poem that follows below the next image."
          }
        ],
        "markDefs": [],
        "style": "normal"
      }
    ],
    "categories": [
      {
        "_createdAt": "2022-05-11T13:13:53Z",
        "_id": "03582614-ca7f-4ba0-8296-5c02f7988cc2",
        "_rev": "O6BCyrheCnoszLth8lZd2o",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:12:32Z",
        "color": "green",
        "slug": {
          "_type": "slug",
          "current": "personal-growth"
        },
        "title": "Personal Growth"
      }
    ],
    "excerpt": "While AI has proved superior at complex calculations & predictions, creativity seemed to be the domain that machines can’t take over.",
    "featured": true,
    "mainImage": {
      "_type": "image",
      "asset": {
        "_ref": "image-c366d5116a51d3f1d8b23962e6b7caac7c960f81-7855x5240-jpg",
        "_type": "reference"
      }
    },
    "publishedAt": "2022-10-18T14:49:00.000Z",
    "slug": {
      "_type": "slug",
      "current": "3-meaningful-ways-to-practice-self-care-as-an-introvert"
    },
    "title": "3 Meaningful Ways to Practice Self-Care as an Introvert"
  },
  {
    "_createdAt": "2022-10-20T13:43:24Z",
    "_id": "b2ba15cc-649b-445b-b14a-ab5f61475a29",
    "_rev": "tnjGEXgFmY2tkHBnvdIZ23",
    "_type": "post",
    "_updatedAt": "2022-10-20T15:29:36Z",
    "author": {
      "_createdAt": "2022-05-11T13:23:45Z",
      "_id": "621402af-4c79-4728-9fbd-19b17e6256bc",
      "_rev": "O6BCyrheCnoszLth8lfUkA",
      "_type": "author",
      "_updatedAt": "2022-05-20T12:49:09Z",
      "bio": [
        {
          "_key": "26377e41356f",
          "_type": "block",
          "children": [
            {
              "_key": "ba1d24e6bafb",
              "_type": "span",
              "marks": [],
              "text": "Joshua is a Microsoft Azure Certified Cloud Professional and a Google Certified Associate Cloud Engineer. A Data Analytics at Acme, specializing in the use of cloud infrastructure for Machine Learning and Deep Learning operation at scale."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "image-cd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415-jpg",
          "_type": "reference"
        },
        "crop": {
          "_type": "sanity.imageCrop",
          "bottom": 0.4139017543859651,
          "left": 0,
          "right": 0,
          "top": 0
        },
        "hotspot": {
          "_type": "sanity.imageHotspot",
          "height": 0.5860982456140349,
          "width": 1,
          "x": 0.5,
          "y": 0.29304912280701745
        }
      },
      "name": "Joshua Wood",
      "slug": {
        "_type": "slug",
        "current": "joshua-wood"
      }
    },
    "body": [
      {
        "_key": "16394a5e5ad8",
        "_type": "block",
        "children": [
          {
            "_key": "d58a64e6e7560",
            "_type": "span",
            "marks": [],
            "text": "Sitting on a patio overlooking English Bay, I am eating dinner and talking with a woman I have met only hours earlier. A memorable evening for both of us, it will see us share some of the most difficult and personal memories we have. Details will be different, but the trajectory similar, in both our cases centered around death. Not one, not a few, but hundreds of deaths. For each of us."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "e0cda9dc6eca",
        "_type": "block",
        "children": [
          {
            "_key": "02bd8a3ad79a0",
            "_type": "span",
            "marks": [],
            "text": "Okay, one, don’t worry, we’re getting to the sunsets! And two, please be assured that despite what it sounds like, I do have appropriate boundaries. Because what I have just described is the life of an HIV researcher. In town for an annual research and treatment conference, it was three days of the latest science, prevention, and support findings. And meeting people like Leena, who, like myself, is a qualitative researcher, working exclusively with women who have contracted HIV from rape or abuse. While my field is HIV, PTSD, and stigma, we do share the same approach, which uses a narrative model of inquiry. Meaning, our data is the individual and community story of HIV. If you’re interested in reading more about what I do, check out the piece below."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "92031d090247",
        "_type": "block",
        "children": [
          {
            "_key": "cb440a2d5e0d0",
            "_type": "span",
            "marks": [],
            "text": "Not surprisingly, we had a lot to talk about and found we had many things in common. Like, for example, sunrises and sunsets. For both of us, seeing them is inexplicably tied up in remembering loss from HIV. Something else she said really hit me. Originally from San Francisco, Leena talked about how HIV had literally torn her city apart. But then, oddly enough it became the shared history that helped it mend."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "e800d57e2b28",
        "_type": "block",
        "children": [
          {
            "_key": "bbd27e4d8e2f0",
            "_type": "span",
            "marks": [],
            "text": "Last night as I watched the sunset you see above and below, I thought again of what Leena had told me about San Francisco, inspiring me to write the poem that follows below the next image."
          }
        ],
        "markDefs": [],
        "style": "normal"
      }
    ],
    "categories": [
      {
        "_createdAt": "2022-05-11T13:13:53Z",
        "_id": "03582614-ca7f-4ba0-8296-5c02f7988cc2",
        "_rev": "O6BCyrheCnoszLth8lZd2o",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:12:32Z",
        "color": "green",
        "slug": {
          "_type": "slug",
          "current": "personal-growth"
        },
        "title": "Personal Growth"
      }
    ],
    "excerpt": "While AI has proved superior at complex calculations & predictions, creativity seemed to be the domain that machines can’t take over.",
    "featured": true,
    "mainImage": {
      "_type": "image",
      "asset": {
        "_ref": "image-e60f8ab265df3c22fdde5469de54d225017b7323-4000x5000-jpg",
        "_type": "reference"
      }
    },
    "publishedAt": "2022-10-18T13:47:00.000Z",
    "slug": {
      "_type": "slug",
      "current": "the-rise-of-artificial-intelligence-and-the-future-of-humans"
    },
    "title": "The Rise of Artificial Intelligence and the Future of Humans"
  },
  {
    "_createdAt": "2022-05-20T09:33:00Z",
    "_id": "6a92d078-0b5b-4155-a017-0400f5ba66a4",
    "_rev": "gRGoUIxCh2CGKUqx0INiLl",
    "_type": "post",
    "_updatedAt": "2022-10-20T15:30:41Z",
    "author": {
      "_createdAt": "2022-05-11T13:22:25Z",
      "_id": "95daa366-f2e1-42d9-879c-fecf89731048",
      "_rev": "g8TtsqiUI2SyF4eBZNE4zL",
      "_type": "author",
      "_updatedAt": "2022-05-20T12:44:50Z",
      "bio": [
        {
          "_key": "a6c7a5d07a03",
          "_type": "block",
          "children": [
            {
              "_key": "88ec1f6c13aa",
              "_type": "span",
              "marks": [],
              "text": "Erika Oliver is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "image-4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472-jpg",
          "_type": "reference"
        }
      },
      "name": "Erika Oliver",
      "slug": {
        "_type": "slug",
        "current": "erika-oliver"
      }
    },
    "body": [
      {
        "_key": "32a5e8d3739f",
        "_type": "block",
        "children": [
          {
            "_key": "911a98eafd320",
            "_type": "span",
            "marks": [],
            "text": "How do we become better every single day? We develop practices that will help move us incrementally forward. Small steps, taken consistently. This is the path to a good life."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "8712584ad86b",
        "_type": "block",
        "children": [
          {
            "_key": "c971c9cffc940",
            "_type": "span",
            "marks": [],
            "text": "“Seneca gives a pretty simple prescription for the good life. “Each day,” he wrote, “acquire something that will fortify you against poverty, against death, indeed against other misfortunes, as well and after you have run over many thoughts, select one to be thoroughly digested that day.” One gain per day. That’s it.”- "
          },
          {
            "_key": "c971c9cffc941",
            "_type": "span",
            "marks": [
              "49a6b9d0e137"
            ],
            "text": "Ryan Holiday"
          }
        ],
        "markDefs": [
          {
            "_key": "49a6b9d0e137",
            "_type": "link",
            "href": "https://forge.medium.com/all-you-need-are-a-few-small-wins-every-day-f1a6d2bf9fb3"
          }
        ],
        "style": "blockquote"
      },
      {
        "_key": "a33854c7f0b0",
        "_type": "block",
        "children": [
          {
            "_key": "81ddb28e5e2e0",
            "_type": "span",
            "marks": [],
            "text": "While routines can be important for consistency and productivity, what is even more important is our practices. These are things we do, no matter what our routine looks like, no matter if something comes up that derails us."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "009f2a6bca9e",
        "_type": "block",
        "children": [
          {
            "_key": "d6246442539b0",
            "_type": "span",
            "marks": [],
            "text": "But we need to start small and make sure our practices are sustainable. The idea is to take small but consistent steps, every single day — 1% improvement."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "34069a897978",
        "_type": "block",
        "children": [
          {
            "_key": "125e1bb387ef0",
            "_type": "span",
            "marks": [],
            "text": "“Success is not a destination. Success is a decision you make on a daily, hourly, and even moment-to-moment basis.” — Nicolas Cole"
          }
        ],
        "markDefs": [],
        "style": "blockquote"
      },
      {
        "_key": "4ebfd3f5e646",
        "_type": "block",
        "children": [
          {
            "_key": "2fa5865491e50",
            "_type": "span",
            "marks": [],
            "text": "Epictetus called this incremental action “fueling the habit bonfire.”"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "cef41e2373dc",
        "_type": "block",
        "children": [
          {
            "_key": "e49a6a7325e30",
            "_type": "span",
            "marks": [],
            "text": "Focus on the following 10 practices, and you will begin to see consistent improvement in your life."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "a51c37553b19",
        "_type": "block",
        "children": [
          {
            "_key": "06bc826769f20",
            "_type": "span",
            "marks": [],
            "text": "1. Meditate"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "833ced5dab18",
        "_type": "block",
        "children": [
          {
            "_key": "2141832fbd2e0",
            "_type": "span",
            "marks": [],
            "text": "Meditation is number one for a reason."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "0ee1a323b161",
        "_type": "block",
        "children": [
          {
            "_key": "67e5250039540",
            "_type": "span",
            "marks": [],
            "text": "While I know we’ve all heard we should meditate, I truly believe it is key to moving forward every single day."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "ea44a4759353",
        "_type": "block",
        "children": [
          {
            "_key": "cb10ad9165000",
            "_type": "span",
            "marks": [],
            "text": "Meditation provides stillness. It’s time alone with your breath and your body. It’s time to get to know yourself, to be aware of what is going on inside of you — both mentally and physically."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "185c4b922954",
        "_type": "block",
        "children": [
          {
            "_key": "b55ab7ef6349",
            "_type": "span",
            "marks": [],
            "text": ""
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "59e445a9cec5",
        "_type": "image",
        "asset": {
          "_ref": "image-28c861b5f36dc477305307ea5697affbdd71cf1c-4500x3000-jpg",
          "_type": "reference"
        }
      },
      {
        "_key": "e15161b00660",
        "_type": "block",
        "children": [
          {
            "_key": "5c8c5f1340970",
            "_type": "span",
            "marks": [],
            "text": "Having this self-awareness is the first step toward growth. If you don’t know yourself, how can you expect to make meaningful progress?"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "d677f2a6c762",
        "_type": "block",
        "children": [
          {
            "_key": "84f078b2f7470",
            "_type": "span",
            "marks": [],
            "text": "Develop a regular meditation practice by following "
          },
          {
            "_key": "84f078b2f7471",
            "_type": "span",
            "marks": [
              "ab7b342f6655"
            ],
            "text": "these 4 steps"
          },
          {
            "_key": "84f078b2f7472",
            "_type": "span",
            "marks": [],
            "text": ":"
          }
        ],
        "markDefs": [
          {
            "_key": "ab7b342f6655",
            "_type": "link",
            "href": "https://12ft.io/proxy?ref=&q=https://medium.com/change-your-mind/everyone-should-meditate-heres-the-single-reason-why-1f88186e4c5f"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "2b967f359226",
        "_type": "block",
        "children": [
          {
            "_key": "7f2b8dabb7710",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Start small:"
          },
          {
            "_key": "7f2b8dabb7711",
            "_type": "span",
            "marks": [],
            "text": " Aim for 5 minutes, or even just one minute if you think that’s all you can commit to. The idea is to commit to a length of time you can do consistently — ideally every single day."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "810b9e3cf23e",
        "_type": "block",
        "children": [
          {
            "_key": "9462d80d25360",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Decide on a time of day to practice:"
          },
          {
            "_key": "9462d80d25361",
            "_type": "span",
            "marks": [],
            "text": " Deciding on a time and doing your meditation at the same time each day makes it much more likely you’ll do it consistently."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "aeb99835642b",
        "_type": "block",
        "children": [
          {
            "_key": "b64db1e8e36e0",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Commit to this practice:"
          },
          {
            "_key": "b64db1e8e36e1",
            "_type": "span",
            "marks": [],
            "text": " While each session of meditation does produce benefits on its own, the real magic of meditation comes from consistent practice, and compounds over time."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "203090c9ffc2",
        "_type": "block",
        "children": [
          {
            "_key": "74eb55824cc20",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Utilize supports:"
          },
          {
            "_key": "74eb55824cc21",
            "_type": "span",
            "marks": [],
            "text": " There are so many ways to support your practice. One of the most accessible supports is a meditation app. While using an app may not seem like “traditional” meditation, it can be incredibly helpful, especially when you’re starting out."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "0a1648a16ff5",
        "_type": "block",
        "children": [
          {
            "_key": "b6fa6d5a66ec0",
            "_type": "span",
            "marks": [],
            "text": "2. Journal"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "38211540e9d1",
        "_type": "block",
        "children": [
          {
            "_key": "36504917fba40",
            "_type": "span",
            "marks": [],
            "text": "Building on the point above, time alone with your journal is time alone in stillness — a chance to get to know yourself on a deeper level, and to understand who you really are."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "4cfe9845824b",
        "_type": "block",
        "children": [
          {
            "_key": "980455a907dc",
            "_type": "span",
            "marks": [],
            "text": ""
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "4f3b52f292e6",
        "_type": "image",
        "asset": {
          "_ref": "image-a41bf391d0cc8c5dc6116aaab574cc61b5ae1362-5472x3648-jpg",
          "_type": "reference"
        }
      },
      {
        "_key": "7fe07ea82f5c",
        "_type": "block",
        "children": [
          {
            "_key": "8e06639639ec0",
            "_type": "span",
            "marks": [],
            "text": "Journaling allows you to reflect, to plan, to meditate on thoughts and ideas. To always be a better human than you were the day before. This is how you move forward every single day."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "ee552464c911",
        "_type": "block",
        "children": [
          {
            "_key": "3d3d605f287c0",
            "_type": "span",
            "marks": [],
            "text": "You may find it helpful to bookend your day with journaling — having both a morning and evening practice."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "988ee79ab3c8",
        "_type": "block",
        "children": [
          {
            "_key": "b950debe945b0",
            "_type": "span",
            "marks": [],
            "text": "The stillness of the morning is the perfect time to reflect on your purpose, to consider your path, and to create a plan for the day."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "6c6a36671fa3",
        "_type": "block",
        "children": [
          {
            "_key": "64c2f9aca7e10",
            "_type": "span",
            "marks": [],
            "text": "The end of the day is a great time to reflect on what went well during the day, what you could do differently tomorrow, and where you could be more — more loving, more patient, more valuable. You can reflect on whether you have lived in alignment with your values, and whether you fulfilled your purpose."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "c277988806ef",
        "_type": "block",
        "children": [
          {
            "_key": "9ed697859af40",
            "_type": "span",
            "marks": [],
            "text": "Find a journaling template and mode that works for you. Maybe you like the traditional pen and paper. Maybe you prefer a document on your computer. Maybe you’d do best with a phone app. Find something that resonates with you, and stick with this practice."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "60d86dcb35ba",
        "_type": "block",
        "children": [
          {
            "_key": "0c3a2b7247190",
            "_type": "span",
            "marks": [],
            "text": "3. Monitor your input and be grateful"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "22e84eac6a27",
        "_type": "block",
        "children": [
          {
            "_key": "c6f054e7f2790",
            "_type": "span",
            "marks": [],
            "text": "What we allow into our minds is crucial."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "50579efdb5fa",
        "_type": "block",
        "children": [
          {
            "_key": "cd8cc39f39800",
            "_type": "span",
            "marks": [],
            "text": "Therefore, being cognizant of your input in the morning is so important. Do you scroll on social media? Read the news? Read texts from your friends complaining about their life?"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "b1530fe7329e",
        "_type": "block",
        "children": [
          {
            "_key": "088e0bdcd2ec0",
            "_type": "span",
            "marks": [],
            "text": "Or do you listen to or read something positive and uplifting?"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "fdd41da198ba",
        "_type": "block",
        "children": [
          {
            "_key": "89fc79d6f99b0",
            "_type": "span",
            "marks": [],
            "text": "This simple shift can make a huge difference in the trajectory of your day."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "42fe9f2bc1c8",
        "_type": "block",
        "children": [
          {
            "_key": "a4a6ef8d14720",
            "_type": "span",
            "marks": [],
            "text": "The morning is also a great time to bring to mind all that you are grateful for, and to think of the joyful moments in your life. Think about the house you slept in, your friends and family that support you, and the fact that you woke up at all."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "bfe164de803e",
        "_type": "block",
        "children": [
          {
            "_key": "ad514cf926300",
            "_type": "span",
            "marks": [],
            "text": "We must always remind ourselves of the privilege of being alive, and be grateful for all that we have been given. Remind yourself of this when you wake up. Marcus Aurelius said,"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "d5a6afa00c5b",
        "_type": "block",
        "children": [
          {
            "_key": "2cc3e5478a340",
            "_type": "span",
            "marks": [],
            "text": "“When you arise in the morning, think of what a precious privilege it is to be alive — to breathe, to think, to enjoy, to love.”"
          }
        ],
        "markDefs": [],
        "style": "blockquote"
      },
      {
        "_key": "0eebf40e9a89",
        "_type": "block",
        "children": [
          {
            "_key": "b4542541e1790",
            "_type": "span",
            "marks": [],
            "text": "If we view each day as a bonus day — to live, to love, to do the things we love to do — we can’t help but experience gratitude. Viewing each day in this way will ensure that you live your day mindfully."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "f466710ae42d",
        "_type": "block",
        "children": [
          {
            "_key": "3b29bf82a17f0",
            "_type": "span",
            "marks": [],
            "text": "Be cognizant of your input beyond just the morning; throughout your entire day, it’s good to be aware of what you’re allowing into your mind."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "7f4d515be062",
        "_type": "block",
        "children": [
          {
            "_key": "12d8e955f08d0",
            "_type": "span",
            "marks": [],
            "text": "This is key to moving forward every single day — you can’t expect to improve and grow if you are constantly being held back by negative input."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "302dc4698deb",
        "_type": "block",
        "children": [
          {
            "_key": "3742838cab2c0",
            "_type": "span",
            "marks": [],
            "text": "Similarly, regularly reminding yourself of everything you already have and cultivating a sense of gratitude will allow you to continue striving and growing, knowing that you already have enough and you are enough. You will always be enough."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "8f1f1a08c05d",
        "_type": "block",
        "children": [
          {
            "_key": "c1cd0cf362940",
            "_type": "span",
            "marks": [],
            "text": "4. Take 6000 steps every day"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "10d34b279bd0",
        "_type": "block",
        "children": [
          {
            "_key": "153c12a00a5d0",
            "_type": "span",
            "marks": [],
            "text": "Moving your body is crucial."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "6709d5949d21",
        "_type": "block",
        "children": [
          {
            "_key": "4a447dbd9e110",
            "_type": "span",
            "marks": [],
            "text": "And walking may be the most important way to move our bodies. Think of how our ancestors lived — constantly foraging, hunting, and walking everywhere. This is how we have evolved to live."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "05b178fa7da5",
        "_type": "block",
        "children": [
          {
            "_key": "d23f69311f250",
            "_type": "span",
            "marks": [],
            "text": "If we want to move forward, we need to take care of our bodies."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "b8b11dcfe7d1",
        "_type": "block",
        "children": [
          {
            "_key": "8a902133afd30",
            "_type": "span",
            "marks": [],
            "text": "But more than that, movement allows deep access into who we are; what it’s like to be in this body, right now. It’s a powerful form of meditation. You can’t help but feel the breath going in and out of your lungs. The sun on your skin. The grass beneath your feet. Movement forces you to be present in this moment, within yourself."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "ef3f379a571b",
        "_type": "block",
        "children": [
          {
            "_key": "43d3f07c9c19",
            "_type": "span",
            "marks": [],
            "text": ""
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "085b9c0d2766",
        "_type": "image",
        "asset": {
          "_ref": "image-19832828476644b6146ef67a20459de18cd087c0-2942x1956-jpg",
          "_type": "reference"
        }
      },
      {
        "_key": "9f2ffa38c97a",
        "_type": "block",
        "children": [
          {
            "_key": "39dae1bce5c60",
            "_type": "span",
            "marks": [],
            "text": "Dr. Suhas Kshirsagar, author of “"
          },
          {
            "_key": "39dae1bce5c61",
            "_type": "span",
            "marks": [
              "f00861f02deb"
            ],
            "text": "Change Your Schedule, Change Your Life"
          },
          {
            "_key": "39dae1bce5c62",
            "_type": "span",
            "marks": [],
            "text": ",” explains this well:"
          }
        ],
        "markDefs": [
          {
            "_key": "f00861f02deb",
            "_type": "link",
            "href": "https://www.amazon.com/Change-Your-Schedule-Life-Optimize/dp/006268485X#:~:text=Blending%20ancient%20Ayurvedic%20wisdom%20with,your%20specific%20body%20type%2C%20Dr."
          }
        ],
        "style": "normal"
      },
      {
        "_key": "91e4576a4e43",
        "_type": "block",
        "children": [
          {
            "_key": "1a8440d7b55d0",
            "_type": "span",
            "marks": [],
            "text": "“Through exercise and movement, you breathe deeply and unblock the body’s channels…. It gives you energy, mental clarity, passion, and a general enthusiasm for life…. When you breathe deeply, you connect your heart and your brain instantly…. Conscious exercise puts your daily problems on the back burner and enlivens the heart and mind.… While it’s tempting to think of exercise solely as a means to fitness or weight loss, it’s really much more about making you feel alive in your body.”"
          }
        ],
        "markDefs": [],
        "style": "blockquote"
      },
      {
        "_key": "5fd3f0a5a8c6",
        "_type": "block",
        "children": [
          {
            "_key": "29439ded61d00",
            "_type": "span",
            "marks": [],
            "text": "Movement is therefore a tool to help you grow and move forward every single day."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "54db52ea07c0",
        "_type": "block",
        "children": [
          {
            "_key": "989eb5455dc40",
            "_type": "span",
            "marks": [],
            "text": "Your body will stay healthy, your mind will remain clear, you will have deeper access into who you are and improved clarity on where it is you want to go."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "26b9f1c7b8d1",
        "_type": "block",
        "children": [
          {
            "_key": "2c1d93d699960",
            "_type": "span",
            "marks": [],
            "text": "We can’t expect to continue growing and moving forward if we don’t take care of our body and mind. Move every single day."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "88eaeac98cf7",
        "_type": "block",
        "children": [
          {
            "_key": "81d8465da26e0",
            "_type": "span",
            "marks": [],
            "text": "5. Get outside"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "c6305a0f8376",
        "_type": "block",
        "children": [
          {
            "_key": "9ecfb5e15b660",
            "_type": "span",
            "marks": [],
            "text": "Being in nature is connecting to the universe — the force greater than ourselves."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "f8efa19d077e",
        "_type": "block",
        "children": [
          {
            "_key": "9d565c1a59220",
            "_type": "span",
            "marks": [],
            "text": "Nature has been here far longer than us and will remain long after we’re gone. The trees you see have experienced far more than you. They have lived through some of the greatest hardships the world has faced. Nature has the capacity to connect us to all of history."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "0612df1c24b7",
        "_type": "block",
        "children": [
          {
            "_key": "a7d3cece34840",
            "_type": "span",
            "marks": [],
            "text": "Connecting to nature in this way reminds us of our tiny place in the universe and how little we really know. It puts things in perspective. It humbles us. We must respect nature, for these trees were here first, and they know much more than we do."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "63021d7ae088",
        "_type": "block",
        "children": [
          {
            "_key": "91c40be84ecd0",
            "_type": "span",
            "marks": [],
            "text": "I think we’ve all felt it, the sense of calm and contentment that comes from being among nature. Science even shows that looking at "
          },
          {
            "_key": "91c40be84ecd1",
            "_type": "span",
            "marks": [
              "47dc632647b1"
            ],
            "text": "nature can instantly quieten our fight-or-flight response"
          },
          {
            "_key": "91c40be84ecd2",
            "_type": "span",
            "marks": [],
            "text": ". We inherently know that being in nature is good for us."
          }
        ],
        "markDefs": [
          {
            "_key": "47dc632647b1",
            "_type": "link",
            "href": "https://12ft.io/proxy?ref=&q=https://medium.com/live-your-life-on-purpose/a-simple-hack-to-help-you-de-stress-right-now-ebaef01d40ee"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "1d5cca75f0a1",
        "_type": "block",
        "children": [
          {
            "_key": "1ee4889933180",
            "_type": "span",
            "marks": [],
            "text": "But nature is also crucial for our health. "
          },
          {
            "_key": "1ee4889933181",
            "_type": "span",
            "marks": [
              "615269fb2887"
            ],
            "text": "Chris Kresser"
          },
          {
            "_key": "1ee4889933182",
            "_type": "span",
            "marks": [],
            "text": " explains,"
          }
        ],
        "markDefs": [
          {
            "_key": "615269fb2887",
            "_type": "link",
            "href": "https://chriskresser.com/go_outside/"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "947794c8bc71",
        "_type": "block",
        "children": [
          {
            "_key": "e0900a52f2020",
            "_type": "span",
            "marks": [],
            "text": "“Contact with nature is an integral part of our well-being as humans…. While we evolved outdoors and amongst nature for most of the last two million years of our species’ existence, the movement to a largely indoor environment has been a recent development for humans. Much like our diet, our physical environment has changed drastically in a comparatively short amount of time…. "
          },
          {
            "_key": "e0900a52f2021",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Our relationship with nature is a vital component of our wellbeing, and one often neglected due to the concerns of modern life. In order to more fully address our health and wellness as humans, we must consider the biological appropriateness of our environment to be just as important as that of our diet and exercise choices."
          },
          {
            "_key": "e0900a52f2022",
            "_type": "span",
            "marks": [],
            "text": "”"
          }
        ],
        "markDefs": [],
        "style": "blockquote"
      },
      {
        "_key": "0dc014641f18",
        "_type": "block",
        "children": [
          {
            "_key": "be12dd76549d0",
            "_type": "span",
            "marks": [
              "29eba7f4f512"
            ],
            "text": "Get outside every single day"
          },
          {
            "_key": "be12dd76549d1",
            "_type": "span",
            "marks": [],
            "text": ". Prioritize time in nature. It will keep things in perspective while also boosting your wellbeing, allowing you to keep moving forward."
          }
        ],
        "markDefs": [
          {
            "_key": "29eba7f4f512",
            "_type": "link",
            "href": "https://12ft.io/proxy?ref=&q=https://medium.com/curious/this-little-known-concept-can-increase-your-well-being-7fd5905d940c"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "705706912eea",
        "_type": "block",
        "children": [
          {
            "_key": "67297e386ae80",
            "_type": "span",
            "marks": [],
            "text": "6. Read"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "950f80a38994",
        "_type": "block",
        "children": [
          {
            "_key": "942a613bd19f0",
            "_type": "span",
            "marks": [],
            "text": "“Ordinary people seek entertainment. Extraordinary people seek education and learning…. It is common for the world’s most successful people to read at least one book per week. They are constantly learning.” — Benjamin Hardy, "
          },
          {
            "_key": "942a613bd19f1",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "How to Consciously Design Your Ideal Future"
          }
        ],
        "markDefs": [],
        "style": "blockquote"
      },
      {
        "_key": "4252cca90c08",
        "_type": "block",
        "children": [
          {
            "_key": "2038427eb60c0",
            "_type": "span",
            "marks": [],
            "text": "How often do you read?"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "45211e1c6985",
        "_type": "block",
        "children": [
          {
            "_key": "0b5d54c3efd70",
            "_type": "span",
            "marks": [],
            "text": "Hopefully, you make time to read every single day. Even if it’s just one page."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "bfc641e55dc6",
        "_type": "block",
        "children": [
          {
            "_key": "9eeef60990ff0",
            "_type": "span",
            "marks": [],
            "text": "Reading may be the most accessible tool available to us to help us grow. We can learn from anyone in the world, living or not. We can learn from those who have already achieved what we want to achieve. We can learn from others’ successes and mistakes."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "3417be2a4aaa",
        "_type": "block",
        "children": [
          {
            "_key": "bc46129b5dc30",
            "_type": "span",
            "marks": [],
            "text": "Being a perpetual student is key to moving forward. If you’re not constantly learning, how will you grow?"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "08fffb55af21",
        "_type": "block",
        "children": [
          {
            "_key": "40506fca4caf0",
            "_type": "span",
            "marks": [],
            "text": "Make reading a priority in your day. Spend 15 minutes in the morning reading a book. Download an audiobook for your commute. Read an article online during your lunch break. Just find the time to read."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "75cc5e97f519",
        "_type": "block",
        "children": [
          {
            "_key": "cfc9db2a876b0",
            "_type": "span",
            "marks": [],
            "text": "7. Reflect and measure"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "c47eb81c8864",
        "_type": "block",
        "children": [
          {
            "_key": "0209c5624f7b0",
            "_type": "span",
            "marks": [],
            "text": "We must always be reflecting on our lives and measuring the important metrics."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "065c0fa7f68c",
        "_type": "block",
        "children": [
          {
            "_key": "6abe26e77b1a0",
            "_type": "span",
            "marks": [],
            "text": "With reflection, we can achieve anything. You try something, reflect on it, do more of what worked and less of what didn’t."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "4201d00b7aeb",
        "_type": "block",
        "children": [
          {
            "_key": "1b5bdbe5c68a0",
            "_type": "span",
            "marks": [],
            "text": "This is how you will grow."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "4b4a8ed2ceb0",
        "_type": "block",
        "children": [
          {
            "_key": "30f506ccdd890",
            "_type": "span",
            "marks": [],
            "text": "A great way to do this is through bookending the day with journaling, as illustrated above. In the morning, write your plan for the day. In the evening, reflect on what worked and what you will do differently tomorrow. In just a few minutes each day, you can massively change your life for the better."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "497f9c880c05",
        "_type": "block",
        "children": [
          {
            "_key": "e27e2e79cfd00",
            "_type": "span",
            "marks": [],
            "text": "Do this at the end of each week, month, quarter, and year. Growth will become inevitable."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "799ea5bc1112",
        "_type": "block",
        "children": [
          {
            "_key": "693abbcc67550",
            "_type": "span",
            "marks": [],
            "text": "“End your week holding a five-minute meeting with yourself and review what’s working and everything making you miserable. And do more of what works.” — "
          },
          {
            "_key": "693abbcc67551",
            "_type": "span",
            "marks": [
              "b4bd8ae97d83"
            ],
            "text": "Thomas Oppong"
          }
        ],
        "markDefs": [
          {
            "_key": "b4bd8ae97d83",
            "_type": "link",
            "href": "https://12ft.io/proxy?ref=&q=https://medium.com/p/95364dacd4d5"
          }
        ],
        "style": "blockquote"
      },
      {
        "_key": "fd60b3346e96",
        "_type": "block",
        "children": [
          {
            "_key": "cf338ef821570",
            "_type": "span",
            "marks": [],
            "text": "Similarly, keep track of the most important metrics of your life — how much weight you’re squatting, how many dates you went on with your partner each month, how many times you called your mom, how many days in a row you meditated. Identify what is most important to you, and keep track of it. You may be more off-course than you realize:"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "eacadb62d580",
        "_type": "block",
        "children": [
          {
            "_key": "6ba9258988fa0",
            "_type": "span",
            "marks": [],
            "text": "“If you’re not tracking the key areas of your life, than you’re probably more off-course than you think.” — Benjamin Hardy, "
          },
          {
            "_key": "6ba9258988fa1",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "How to Consciously Design Your Ideal Future"
          }
        ],
        "markDefs": [],
        "style": "blockquote"
      },
      {
        "_key": "0f3e632fce5f",
        "_type": "block",
        "children": [
          {
            "_key": "4ef803a4ae560",
            "_type": "span",
            "marks": [],
            "text": "8. Eat well"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "66b0ef22ccb4",
        "_type": "block",
        "children": [
          {
            "_key": "3791660d30190",
            "_type": "span",
            "marks": [],
            "text": "We must always take care of our bodies."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "52f41430358c",
        "_type": "block",
        "children": [
          {
            "_key": "dc61283c0edf0",
            "_type": "span",
            "marks": [],
            "text": "Without a body, we can not achieve anything. Your health must always come first. Running yourself into the ground will achieve nothing."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "24f6bd2a73eb",
        "_type": "block",
        "children": [
          {
            "_key": "a336c86709aa0",
            "_type": "span",
            "marks": [],
            "text": "Make sure you make the time to eat nourishing foods, and make sure you’re eating enough. Our bodies need fuel — good quality fuel:"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "2151e7b8f266",
        "_type": "block",
        "children": [
          {
            "_key": "a51be6b2eafe0",
            "_type": "span",
            "marks": [
              "2cc612917f1c"
            ],
            "text": "Eat adequate protein"
          },
          {
            "_key": "a51be6b2eafe1",
            "_type": "span",
            "marks": [],
            "text": " (aim for 30g each meal)"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [
          {
            "_key": "2cc612917f1c",
            "_type": "link",
            "href": "https://12ft.io/proxy?ref=&q=https://medium.com/in-fitness-and-in-health/how-much-protein-do-we-need-to-maximize-muscle-growth-c18f4d2f4562"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "b8574266f8fb",
        "_type": "block",
        "children": [
          {
            "_key": "b3641a2ea2a60",
            "_type": "span",
            "marks": [],
            "text": "Eat loads of plants — vegetables, fruit, nuts, seeds"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "c73f2e2f0b91",
        "_type": "block",
        "children": [
          {
            "_key": "6a043df2df2f0",
            "_type": "span",
            "marks": [
              "150deba1d1d4"
            ],
            "text": "Drink coffee"
          },
          {
            "_key": "6a043df2df2f1",
            "_type": "span",
            "marks": [],
            "text": " — it’s full of antioxidants (drink decaf if you don’t like caffeine, or black or green teas which have a smaller amount of caffeine)"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [
          {
            "_key": "150deba1d1d4",
            "_type": "link",
            "href": "https://12ft.io/proxy?ref=&q=https://medium.com/live-your-life-on-purpose/the-truth-about-coffee-1c362b2d260d"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "8e4f123578ee",
        "_type": "block",
        "children": [
          {
            "_key": "846981e3181b0",
            "_type": "span",
            "marks": [],
            "text": "Avoid processed and refined foods"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "a1210c053b0c",
        "_type": "block",
        "children": [
          {
            "_key": "ce581372d1e80",
            "_type": "span",
            "marks": [],
            "text": "Only eat what our cavemen ancestors would recognize"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "3836972c91f2",
        "_type": "block",
        "children": [
          {
            "_key": "6805b12cd9930",
            "_type": "span",
            "marks": [],
            "text": "9. Incorporate hormetic stressors"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "2150a453acb9",
        "_type": "block",
        "children": [
          {
            "_key": "c9bd4181477a0",
            "_type": "span",
            "marks": [],
            "text": "If you want to become stronger and more resilient, you need to stress your body."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "3dbe6fde920d",
        "_type": "block",
        "children": [
          {
            "_key": "31b94fa831520",
            "_type": "span",
            "marks": [],
            "text": "And the best way to do this is through hormetic stressors."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "8b92ac6e52d5",
        "_type": "block",
        "children": [
          {
            "_key": "0aecc54474c40",
            "_type": "span",
            "marks": [],
            "text": "A hormetic stressor is something that, in a small dose makes you stronger, but in a big dose will kill you. Think cold, heat, fasting, and exercise."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "0af17d8c4405",
        "_type": "block",
        "children": [
          {
            "_key": "12eb2277428d0",
            "_type": "span",
            "marks": [],
            "text": "10. Pay attention"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "71884c3cac90",
        "_type": "block",
        "children": [
          {
            "_key": "c30cbec732330",
            "_type": "span",
            "marks": [],
            "text": "You can learn a lot simply by paying attention."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "4f87e970a6d2",
        "_type": "block",
        "children": [
          {
            "_key": "00d020fa0ed00",
            "_type": "span",
            "marks": [],
            "text": "When people speak, really listen. They likely know at least a few things that you don’t, and the simple act of listening is a great way to learn and to improve yourself."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "9eebc6d87748",
        "_type": "block",
        "children": [
          {
            "_key": "9166470395ec0",
            "_type": "span",
            "marks": [],
            "text": "I work with an older woman from Burundi, and until recently, I never really listened deeply to what she was saying. But the other day, I got myself into the present moment and really listened. And I learned that she has had a life like I could never imagine, and she holds so much wisdom and perspective."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "b8741bd0d3bf",
        "_type": "block",
        "children": [
          {
            "_key": "b97b1c5469890",
            "_type": "span",
            "marks": [],
            "text": "She told me, “My dad was killed in front of me when I was 15. Every day you have with your parents is a gift from God. Celebrate every day with them and never forget how lucky you are.”"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "f1eefe5df365",
        "_type": "block",
        "children": [
          {
            "_key": "6029ecb9fb920",
            "_type": "span",
            "marks": [],
            "text": "This was a great dose of perspective at 8am on a Wednesday morning."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "b3d0abeb18ad",
        "_type": "block",
        "children": [
          {
            "_key": "6952cc42243f0",
            "_type": "span",
            "marks": [],
            "text": "Furthermore, paying attention is one of the greatest gifts you can give someone. All anyone wants is to be listened to and understood. You have the power to change your own life, as well as the lives of those around you."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "0f230bbf4419",
        "_type": "block",
        "children": [
          {
            "_key": "1f0cc68d7aa00",
            "_type": "span",
            "marks": [],
            "text": "This is how you will move forward every single day."
          }
        ],
        "markDefs": [],
        "style": "normal"
      }
    ],
    "categories": [
      {
        "_createdAt": "2022-05-11T13:13:53Z",
        "_id": "03582614-ca7f-4ba0-8296-5c02f7988cc2",
        "_rev": "O6BCyrheCnoszLth8lZd2o",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:12:32Z",
        "color": "green",
        "slug": {
          "_type": "slug",
          "current": "personal-growth"
        },
        "title": "Personal Growth"
      }
    ],
    "excerpt": "How do we become better every single day? We develop practices that will help move us incrementally forward. Small steps, taken consistently. This is the path to a good life.",
    "featured": false,
    "mainImage": {
      "_type": "image",
      "asset": {
        "_ref": "image-86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600-jpg",
        "_type": "reference"
      }
    },
    "publishedAt": "2022-10-04T15:16:00.000Z",
    "slug": {
      "_type": "slug",
      "current": "10-simple-practices-that-will-help-you-get-1-better-every-day"
    },
    "title": "10 Simple Practices That Will Help You Get 1% Better Every Day"
  },
  {
    "_createdAt": "2022-05-20T09:30:40Z",
    "_id": "f0ffc7a0-2a4d-4e98-bc1c-cbef2138b855",
    "_rev": "p2efkKuWHrteZK2KTC69DW",
    "_type": "post",
    "_updatedAt": "2022-10-20T15:15:55Z",
    "author": {
      "_createdAt": "2022-05-11T13:17:13Z",
      "_id": "290948c1-9a04-41a4-9b07-960131320993",
      "_rev": "L1x6OoCeBFQajmzrxwelTR",
      "_type": "author",
      "_updatedAt": "2022-05-20T12:50:25Z",
      "bio": [
        {
          "_key": "49decc02f4f6",
          "_type": "block",
          "children": [
            {
              "_key": "add99fe1bf81",
              "_type": "span",
              "marks": [],
              "text": "Mario is a Staff Engineer specialising in Frontend at "
            },
            {
              "_key": "08c2faf2f982",
              "_type": "span",
              "marks": [
                "8fb88fe0431f"
              ],
              "text": "Vercel"
            },
            {
              "_key": "e9332a10a47c",
              "_type": "span",
              "marks": [],
              "text": ", as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple."
            }
          ],
          "markDefs": [
            {
              "_key": "8fb88fe0431f",
              "_type": "link",
              "href": "https://vercel.com/"
            }
          ],
          "style": "normal"
        }
      ],
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "image-4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648-jpg",
          "_type": "reference"
        }
      },
      "name": "Mario Sanchez",
      "slug": {
        "_type": "slug",
        "current": "mario-sanchez"
      }
    },
    "body": [
      {
        "_key": "16394a5e5ad8",
        "_type": "block",
        "children": [
          {
            "_key": "d58a64e6e7560",
            "_type": "span",
            "marks": [],
            "text": "Sitting on a patio overlooking English Bay, I am eating dinner and talking with a woman I have met only hours earlier. A memorable evening for both of us, it will see us share some of the most difficult and personal memories we have. Details will be different, but the trajectory similar, in both our cases centered around death. Not one, not a few, but hundreds of deaths. For each of us."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "e0cda9dc6eca",
        "_type": "block",
        "children": [
          {
            "_key": "02bd8a3ad79a0",
            "_type": "span",
            "marks": [],
            "text": "Okay, one, don’t worry, we’re getting to the sunsets! And two, please be assured that despite what it sounds like, I do have appropriate boundaries. Because what I have just described is the life of an HIV researcher. In town for an annual research and treatment conference, it was three days of the latest science, prevention, and support findings. And meeting people like Leena, who, like myself, is a qualitative researcher, working exclusively with women who have contracted HIV from rape or abuse. While my field is HIV, PTSD, and stigma, we do share the same approach, which uses a narrative model of inquiry. Meaning, our data is the individual and community story of HIV. If you’re interested in reading more about what I do, check out the piece below."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "92031d090247",
        "_type": "block",
        "children": [
          {
            "_key": "cb440a2d5e0d0",
            "_type": "span",
            "marks": [],
            "text": "Not surprisingly, we had a lot to talk about and found we had many things in common. Like, for example, sunrises and sunsets. For both of us, seeing them is inexplicably tied up in remembering loss from HIV. Something else she said really hit me. Originally from San Francisco, Leena talked about how HIV had literally torn her city apart. But then, oddly enough it became the shared history that helped it mend."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "e800d57e2b28",
        "_type": "block",
        "children": [
          {
            "_key": "bbd27e4d8e2f0",
            "_type": "span",
            "marks": [],
            "text": "Last night as I watched the sunset you see above and below, I thought again of what Leena had told me about San Francisco, inspiring me to write the poem that follows below the next image."
          }
        ],
        "markDefs": [],
        "style": "normal"
      }
    ],
    "categories": [
      {
        "_createdAt": "2022-05-20T09:24:42Z",
        "_id": "b8d3f123-2ee7-4357-911a-aa61b2244395",
        "_rev": "O6BCyrheCnoszLth8lZotK",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:24:42Z",
        "color": "blue",
        "slug": {
          "_type": "slug",
          "current": "design"
        },
        "title": "Design"
      }
    ],
    "excerpt": "While AI has proved superior at complex calculations & predictions, creativity seemed to be the domain that machines can’t take over.",
    "mainImage": {
      "_type": "image",
      "asset": {
        "_ref": "image-279c03681911845947cd044b4ac9e91d7a3a628c-987x1481-png",
        "_type": "reference"
      }
    },
    "publishedAt": "2022-10-02T15:15:00.000Z",
    "slug": {
      "_type": "slug",
      "current": "every-artist-has-to-see-the-amazing-pictures-on-the-internet"
    },
    "title": "Every Artist has to see the Amazing Pictures on the Internet"
  },
  {
    "_createdAt": "2022-05-20T09:21:46Z",
    "_id": "c70c5589-eaaf-46fe-aee0-c4095002b150",
    "_rev": "tnjGEXgFmY2tkHBnvdIeA3",
    "_type": "post",
    "_updatedAt": "2022-10-20T15:29:44Z",
    "author": {
      "_createdAt": "2022-05-11T13:22:25Z",
      "_id": "95daa366-f2e1-42d9-879c-fecf89731048",
      "_rev": "g8TtsqiUI2SyF4eBZNE4zL",
      "_type": "author",
      "_updatedAt": "2022-05-20T12:44:50Z",
      "bio": [
        {
          "_key": "a6c7a5d07a03",
          "_type": "block",
          "children": [
            {
              "_key": "88ec1f6c13aa",
              "_type": "span",
              "marks": [],
              "text": "Erika Oliver is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "image-4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472-jpg",
          "_type": "reference"
        }
      },
      "name": "Erika Oliver",
      "slug": {
        "_type": "slug",
        "current": "erika-oliver"
      }
    },
    "body": [
      {
        "_key": "d31ba2155b84",
        "_type": "block",
        "children": [
          {
            "_key": "e2c7eb6270bd0",
            "_type": "span",
            "marks": [],
            "text": "When it comes to the great cosmic question of our own origins, there’s a lot we have to infer. In our Solar System today, just as for the rest of the Universe, we cannot know everything that transpired to bring us about into our present state. When we view things today, all we see are the survivors, with the remaining details lost to the past history of time. However, the Universe provides us with enough clues that we can draw many reasonable, robust conclusions about a whole swath of ideas, including our own existence. For this edition of Ask Ethan, Charles Bartholomew wants to know about our own Sun’s history, asking:"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "f9f9525cfc5f",
        "_type": "block",
        "children": [
          {
            "_key": "57aea0ed77db0",
            "_type": "span",
            "marks": [],
            "text": "Although we cannot say for certain, we know we’re "
          },
          {
            "_key": "57aea0ed77db1",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "at least"
          },
          {
            "_key": "57aea0ed77db2",
            "_type": "span",
            "marks": [],
            "text": " a third generation star. Here’s the science of why."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "d141f1b3dafe",
        "_type": "block",
        "children": [
          {
            "_key": "b8a901901e1f0",
            "_type": "span",
            "marks": [],
            "text": "The dwarf galaxy UGCA 281, shown here as imaged by Hubble in the visible and ultraviolet, is rapidly forming new stars. An older, background population of redder stars is what these newer, bluer stars are superimposed on top of. Population I and II stars are both ubiquitous in a location like this, but no Population III stars are known. (NASA, ESA, AND THE LEGUS TEAM)"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "ca0adf2928cc",
        "_type": "block",
        "children": [
          {
            "_key": "7e4fec5d5a690",
            "_type": "span",
            "marks": [],
            "text": "When astronomers classify stars, they normally lump them into three categories, creatively named Population I, II, and III stars. Population I stars are stars like our Sun: the first kind ever discovered. These are stars with strong absorption features in their spectra, features which indicate that approximately 1% (give or take) of their mass is made up of heavy elements: atomic nuclei other than hydrogen and helium."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "627e53aeb5a0",
        "_type": "block",
        "children": [
          {
            "_key": "4d0a059846ee",
            "_type": "span",
            "marks": [],
            "text": "Technology & Population"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "6679854759c6",
        "_type": "block",
        "children": [
          {
            "_key": "6b6ee44a27d00",
            "_type": "span",
            "marks": [],
            "text": "Population II stars, on the other hand, were the second type discovered: with much weaker absorption features in their spectra. The reason for this is that a much smaller fraction of their mass (around 0.1% or less) is made of elements heavier than hydrogen or helium; they are much more unpolluted by prior generations of stars."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "8722538723e1",
        "_type": "block",
        "children": [
          {
            "_key": "33465d2b9d7e0",
            "_type": "span",
            "marks": [],
            "text": "And Population III stars are, as of 2019, only a theoretical necessity. At some early time, 99.999999% of the Universe was hydrogen and helium, and the very first stars to form must have been absolutely pristine and completely metal-free."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "8cf15d00a190",
        "_type": "block",
        "children": [
          {
            "_key": "5aa0d057c00b0",
            "_type": "span",
            "marks": [],
            "text": "The first stars and galaxies in the Universe will be surrounded by neutral atoms of (mostly) hydrogen gas, which absorbs the starlight. The large masses and high temperatures of these early stars helps ionize the Universe, but without heavy elements, life and potentially habitable planets are utterly impossible. (NICOLE RAGER FULLER / NATIONAL SCIENCE FOUNDATION)"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "17604edcfea9",
        "_type": "block",
        "children": [
          {
            "_key": "c496bb5d08ff0",
            "_type": "span",
            "marks": [],
            "text": "It’s a bit of an adjustment, here on Earth, to think of elements like carbon, nitrogen, oxygen, phosphorous, silicon, sulfur, and iron as “cosmic pollution,” but when it comes to the stars, that’s the viewpoint nature insists upon. In theory, this should be inevitably true, according to the Big Bang."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "4d69f68816d1",
        "_type": "block",
        "children": [
          {
            "_key": "72739f5c31650",
            "_type": "span",
            "marks": [],
            "text": "In its earliest stages, the Universe was hot, dense, and filled with particles, antiparticles, and radiation. At its hottest, the various quanta have enough energy to spontaneously produce matter-antimatter pairs of particles. But as the Universe expands and cools, it loses its ability to make those new pairs: if the energy "
          },
          {
            "_key": "72739f5c31651",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "E"
          },
          {
            "_key": "72739f5c31652",
            "_type": "span",
            "marks": [],
            "text": " (per particle) drops too low, you can no longer create new quanta of mass "
          },
          {
            "_key": "72739f5c31653",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "m"
          },
          {
            "_key": "72739f5c31654",
            "_type": "span",
            "marks": [],
            "text": " via Einstein’s "
          },
          {
            "_key": "72739f5c31655",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "E = mc²"
          },
          {
            "_key": "72739f5c31656",
            "_type": "span",
            "marks": [],
            "text": ". Instead, the remaining pairs all annihilate away, leaving only the stable, leftover matter particles, like protons, neutrons, and electrons."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "b08511ac0b48",
        "_type": "block",
        "children": [
          {
            "_key": "f2f298537dc00",
            "_type": "span",
            "marks": [],
            "text": "Stars & the evolution of Galaxy"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "457d69339a26",
        "_type": "block",
        "children": [
          {
            "_key": "f27f48bf6e010",
            "_type": "span",
            "marks": [],
            "text": "Long before the first stars form, these protons and neutrons undergo the first nuclear reactions in the hot, dense furnace of the early Universe. By the time the first few minutes pass after the onset of the hot Big Bang, the Universe has cooled enough and become sparse enough that nuclear reactions can no longer proceed. From these early stages, we’re left with a primeval abundance of atomic nuclei,"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "972817d15055",
        "_type": "block",
        "children": [
          {
            "_key": "3af27bb198950",
            "_type": "span",
            "marks": [],
            "text": "75% of which are hydrogen nuclei (plain protons),"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "938d4983808f",
        "_type": "block",
        "children": [
          {
            "_key": "a8b4d535983c0",
            "_type": "span",
            "marks": [],
            "text": "25% of which are helium nuclei (two protons and two neutrons),"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "cb47dd0cd4d0",
        "_type": "block",
        "children": [
          {
            "_key": "985a96dd43640",
            "_type": "span",
            "marks": [],
            "text": "about 0.01% deuterium (a proton and a neutron),"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "e15ad9c28d40",
        "_type": "block",
        "children": [
          {
            "_key": "c1c1d20116a80",
            "_type": "span",
            "marks": [],
            "text": "about 0.01% helium-3 (two protons and one neutron), and"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "076251b23e2e",
        "_type": "block",
        "children": [
          {
            "_key": "709a3eef21780",
            "_type": "span",
            "marks": [],
            "text": "about 0.0000001% lithium-7 (three protons and four neutrons),"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "34f4807fc501",
        "_type": "block",
        "children": [
          {
            "_key": "0bb19a7ff4d10",
            "_type": "span",
            "marks": [],
            "text": "which will persist until the next nuclear reactions occur: at the onset of the formation of the first stars."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "a2803308843e",
        "_type": "block",
        "children": [
          {
            "_key": "e0df894ea1450",
            "_type": "span",
            "marks": [],
            "text": "We know, therefore, that the first generation of stars to form in any location in the Universe will be made out of these pristine ingredients: hydrogen and helium, without anything else of significance. But despite the discovery of many ultra-distant galaxies with faint populations of newly-formed stars, none of them are truly pristine."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "a92a0c6fe397",
        "_type": "block",
        "children": [
          {
            "_key": "e5b665f060e40",
            "_type": "span",
            "marks": [],
            "text": "An illustration of the galaxy CR7, which was originally hoped would house multiple populations of stars of various ages (as illustrated). While we have yet to find an object where the brightest component was pristine, with no heavy elements, we fully expect them to exist, often alongside a later generation of stars that formed earlier. "
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "a313a413418d",
        "_type": "block",
        "children": [
          {
            "_key": "93cef51e8a270",
            "_type": "span",
            "marks": [],
            "text": "In other words, we have not yet discovered a true Population III star; revealing these elusive, early stars is one of the main science goals of the soon-to-be-launched James Webb Space Telescope. But Population III stars, if we understand our astrophysics correctly, shouldn’t stick around for very long anyway."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "fbbcd84599b8",
        "_type": "block",
        "children": [
          {
            "_key": "5cabfeccb42c0",
            "_type": "span",
            "marks": [],
            "text": "Whenever stars are formed, they arise from the collapse of molecular gas clouds. But in order for a cloud to collapse, it has to avoid turning its gravitational potential energy into pure kinetic energy or heat, as that will keep the cloud diffuse. The main way to accomplish this is by having the particles in your cloud cool off via radiation, but that radiation is terribly inefficient with just hydrogen and helium. While today, star-forming regions typically form stars of about 40% our Sun’s mass, on average, the much-less-efficient Population III (first-generation) stars should average about ten times the mass of our Sun."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "ccb0bed4ea1a",
        "_type": "block",
        "children": [
          {
            "_key": "dbde6649e8530",
            "_type": "span",
            "marks": [],
            "text": "The (modern) Morgan–Keenan spectral classification system, with the temperature range of each star class shown above it, in kelvin. Our Sun is a G-class star, producing light with an effective temperature of around 5800 K and a brightness of 1 solar luminosity. Stars can be as low in mass as 8% the mass of our Sun, where they’ll burn with ~0.01% our Sun’s brightness and live for more than 1000 times as long, but they can also rise to hundreds of times our Sun’s mass, with millions of times our Sun’s luminosity and lifetimes of just a few million years. The first generation of stars should consist of O-type and B-type stars almost exclusively. "
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "eee92df7160c",
        "_type": "block",
        "children": [
          {
            "_key": "512a6aa1f358",
            "_type": "span",
            "marks": [],
            "text": "Evolution of Sun"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "1ab53f53979f",
        "_type": "block",
        "children": [
          {
            "_key": "102cef3b09140",
            "_type": "span",
            "marks": [],
            "text": "Whereas a star like our Sun might live for billions of years, stars that are 10 or more times as massive likely only live for a few million years at most. They say that the flame that burns twice as bright burns just half as long, but for stars, it’s much worse. A star with twice the mass burns about one-eighth as long, as a star’s lifetime is inversely proportional to its mass cubed."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "e90dadfb381f",
        "_type": "block",
        "children": [
          {
            "_key": "a09ca185bd280",
            "_type": "span",
            "marks": [],
            "text": "Fortunately, when these early, massive stars die, they will have burned through an enormous amount of fuel, fusing:"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "1baa1f75c2cf",
        "_type": "block",
        "children": [
          {
            "_key": "e54e9a850bbc0",
            "_type": "span",
            "marks": [],
            "text": "hydrogen into helium,"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "ca08e6d3afeb",
        "_type": "block",
        "children": [
          {
            "_key": "1b87ea3aff020",
            "_type": "span",
            "marks": [],
            "text": "helium into carbon,"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "e3f905c9686c",
        "_type": "block",
        "children": [
          {
            "_key": "e0f352769d140",
            "_type": "span",
            "marks": [],
            "text": "and then carbon into oxygen, neon, silicon, sulfur, and eventually all the way up to cobalt, iron and nickel."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "a3959b38ebd0",
        "_type": "block",
        "children": [
          {
            "_key": "da9ee35640d60",
            "_type": "span",
            "marks": [],
            "text": "At last, these stars will die in a catastrophic supernova explosion, where the core becomes a neutron star or black hole, but where the outer layers get expelled."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "bbf3928007da",
        "_type": "block",
        "children": [
          {
            "_key": "bf8b111bb5810",
            "_type": "span",
            "marks": [],
            "text": "This Wolf–Rayet star is known as WR 31a, located about 30,000 light-years away in the constellation of Carina. The outer nebula is expelled hydrogen and helium, while the central star burns at over 100,000 K. In the relatively near future, this star will explode in a supernova, enriching the surrounding interstellar medium with new, heavy elements."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "0ed7ac079ae7",
        "_type": "block",
        "children": [
          {
            "_key": "fcc53b4e7b500",
            "_type": "span",
            "marks": [],
            "text": "This last part is arguably the most important concept in stellar astronomy: the expelled material from an early generation of dying star adds material rich in heavy elements back to the interstellar medium, where it participates in future generations of star-formation."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "09be895632d2",
        "_type": "block",
        "children": [
          {
            "_key": "29af58789cbf0",
            "_type": "span",
            "marks": [],
            "text": "The second generation of stars to form — the first “enriched” generation of stars — might only have a tiny amount of carbon, oxygen, and still other heavier elements, but that’s significant enough to dramatically change how cooling works in the Universe’s star-forming regions. With even 0.001% of a future star’s mass locked up in elements heavier than helium (what astronomers unceremoniously call “metals”), these Population II stars can come in with very low masses, meaning some of them should still be around today."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "d6d40062efd2",
        "_type": "block",
        "children": [
          {
            "_key": "99872d97d8c90",
            "_type": "span",
            "marks": [],
            "text": "And that’s a big deal, because we find extremely metal-poor stars even in our own Milky Way! Most such stars are found in the outer halos of galaxies, as that’s where the fewest numbers (and the fewest generations) of stars form. We see them in ultra-old globular clusters, many of which are made of stars exceeding 12 or even 13 billion years in age. Isolated stars in the Milky Way have ages in excess of 13 billion years as well; Population II stars are ubiquitous in our Universe."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "50c16294cc7a",
        "_type": "block",
        "children": [
          {
            "_key": "4b504c83541a0",
            "_type": "span",
            "marks": [],
            "text": "Does that necessarily mean that all Population II stars are second-generation stars, though? That might be your default assumption, but modern astronomers believe this doesn’t have to be the case. Population II stars, when they form, can do so in a wide variety of ways."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "dcf897d36c2a",
        "_type": "block",
        "children": [
          {
            "_key": "91c1872943b00",
            "_type": "span",
            "marks": [],
            "text": "If your second generation of stars is massive and all-consuming, it can enormously enrich the interstellar medium. Once you cross a certain enrichment threshold, all your new stars will at last be Population I stars: stars rich in metals, much like our Sun. But whether you cross that threshold or not depends on a number of factors, such as:"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "e6002308a679",
        "_type": "block",
        "children": [
          {
            "_key": "aef6a4f7904c0",
            "_type": "span",
            "marks": [],
            "text": "the star-formation rate in your galaxy (or region of the galaxy),"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "0fc46a6bfc5b",
        "_type": "block",
        "children": [
          {
            "_key": "5fbf12d323df0",
            "_type": "span",
            "marks": [],
            "text": "your galaxy’s merger history (having an influx of pristine or polluted material can change the overall galactic enrichment),"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "a3393d1cd27f",
        "_type": "block",
        "children": [
          {
            "_key": "7b0fc60327510",
            "_type": "span",
            "marks": [],
            "text": "how large a particular star-forming region is (larger ones produce more massive stars and greater enrichment),"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "17bae2602365",
        "_type": "block",
        "children": [
          {
            "_key": "4e5a86b8e9330",
            "_type": "span",
            "marks": [],
            "text": "and how many generations of stars have formed over the history of the material in the interstellar medium."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "567b817b97ff",
        "_type": "block",
        "children": [
          {
            "_key": "1894bac489bf0",
            "_type": "span",
            "marks": [],
            "text": "One of the many clusters in this region, the Sharpless cluster, is highlighted by massive, short-lived, bright blue stars. Within only about 10 million years, the majority of the most massive ones will explode in a Type II supernova, a pair-instability supernova, or will undergo direct collapse. We have not yet uncovered the exact fate of all such stars, and the number of generations preceding our own Sun’s formation is a question we do not have the information necessary to answer. (ESO / VST SURVEY)"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "611ff038dd23",
        "_type": "block",
        "children": [
          {
            "_key": "e408b5235c560",
            "_type": "span",
            "marks": [],
            "text": "Near the centers of massive galaxies, there are likely Population I stars that truly are members of just the third generation of stars to form since the Big Bang, and it’s possible that the Sun is one of them. However, when we examine the properties of our Sun, such as its age (forming 9.2 billion years after the Big Bang), its location (25–27,000 light-years from the galactic center), and its metallicity (about 1–2% of its elemental contents are heavier than helium), we find that it’s far more likely that our Sun was formed by a wide variety of materials."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "95e2ec917bed",
        "_type": "block",
        "children": [
          {
            "_key": "c67fdc770e650",
            "_type": "span",
            "marks": [],
            "text": "In a large, massive galaxy like our Milky Way, the atoms and molecules that form stars likely have been a part of many different generations of stars over our cosmic history. Some of them may only have been part of 1 or 2 generations of stars; others could have belonged to 6 generations or more!"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "97065166e45e",
        "_type": "block",
        "children": [
          {
            "_key": "7293eb074cdb0",
            "_type": "span",
            "marks": [],
            "text": "A rich nebula of gas, pushed out into the interstellar medium by the hot, new stars formed in the central region. When clouds of gas collapse, they form new stars, based on the total heavy element content of the star-forming region. Despite the plethora of Population I and II stars, we have yet to find the very first pristine stars of all: stars that are made of hydrogen and helium without also being made of carbon and oxygen. (GEMINI OBSERVATORY / AURA)"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "5745a11aac23",
        "_type": "block",
        "children": [
          {
            "_key": "6675cdfdb7330",
            "_type": "span",
            "marks": [],
            "text": "There is no way, at present, to uncover the true cosmic history of the various elements and contents of our Sun. What we can do, however, is to map out the star-formation history of the Universe, in gory detail, as a function of time, galaxy size, mass, and evolution, metallicity, and much more."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "977e6f91ea18",
        "_type": "block",
        "children": [
          {
            "_key": "afae124bc40b0",
            "_type": "span",
            "marks": [],
            "text": "By reconstructing the cosmic history of galaxies external to our own, we can better comprehend how our own galaxy must have grown up, which in turn enables us to better-reconstruct where our Sun truly came from. As future telescopes and observatories come online in the 2020s, we plan on learning unprecedented amounts about the evolution of star-formation in the Universe."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "b0c90b4745d4",
        "_type": "block",
        "children": [
          {
            "_key": "49b3645019460",
            "_type": "span",
            "marks": [],
            "text": "Our Sun, by any metric, is at least a third-generation star, but is probably made up of a variety of materials that have existed in multiple generations of stars of unequal properties. The ultimate evidence of our origin may be lost to history, but astronomers are, in some ways, the ultimate archaeologists. When we better understand our Universe’s past, perhaps it will at last shed the necessary light on our conception of exactly how our Sun came to be."
          }
        ],
        "markDefs": [],
        "style": "normal"
      }
    ],
    "categories": [
      {
        "_createdAt": "2022-05-11T13:19:54Z",
        "_id": "d6dae217-c9ca-466c-a6b6-45a76bd5aed0",
        "_rev": "O6BCyrheCnoszLth8lZdDq",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:12:40Z",
        "color": "blue",
        "slug": {
          "_type": "slug",
          "current": "technology"
        },
        "title": "Technology"
      }
    ],
    "excerpt": "The evolution of technology in astronomy and how it has impacted our understanding of the universe. It also gives a brief history of the major figures that the science through their innovations ",
    "featured": true,
    "mainImage": {
      "_type": "image",
      "asset": {
        "_ref": "image-123fb8836aaf097b83d4c5e8fde544dd1747af0d-5064x3376-jpg",
        "_type": "reference"
      }
    },
    "publishedAt": "2022-09-30T15:15:00.000Z",
    "slug": {
      "_type": "slug",
      "current": "how-technology-evolved-under-the-bright-sun-of-universe"
    },
    "title": "How Technology Evolved Under the Bright Sun of Universe"
  },
  {
    "_createdAt": "2022-05-11T13:32:04Z",
    "_id": "59791621-f6db-42b2-a8a0-355a4b957016",
    "_rev": "gRGoUIxCh2CGKUqx0IGX7h",
    "_type": "post",
    "_updatedAt": "2022-10-20T15:15:24Z",
    "author": {
      "_createdAt": "2022-05-11T13:23:45Z",
      "_id": "621402af-4c79-4728-9fbd-19b17e6256bc",
      "_rev": "O6BCyrheCnoszLth8lfUkA",
      "_type": "author",
      "_updatedAt": "2022-05-20T12:49:09Z",
      "bio": [
        {
          "_key": "26377e41356f",
          "_type": "block",
          "children": [
            {
              "_key": "ba1d24e6bafb",
              "_type": "span",
              "marks": [],
              "text": "Joshua is a Microsoft Azure Certified Cloud Professional and a Google Certified Associate Cloud Engineer. A Data Analytics at Acme, specializing in the use of cloud infrastructure for Machine Learning and Deep Learning operation at scale."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "image-cd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415-jpg",
          "_type": "reference"
        },
        "crop": {
          "_type": "sanity.imageCrop",
          "bottom": 0.4139017543859651,
          "left": 0,
          "right": 0,
          "top": 0
        },
        "hotspot": {
          "_type": "sanity.imageHotspot",
          "height": 0.5860982456140349,
          "width": 1,
          "x": 0.5,
          "y": 0.29304912280701745
        }
      },
      "name": "Joshua Wood",
      "slug": {
        "_type": "slug",
        "current": "joshua-wood"
      }
    },
    "body": [
      {
        "_key": "4f261ea7150e",
        "_type": "block",
        "children": [
          {
            "_key": "775fcba113500",
            "_type": "span",
            "marks": [],
            "text": "I recently went to the mountains with my friends. We were celebrating 50 years of friendship. It was very special. Six of us were to be together spending time in the mountains."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "bf950c95df4a",
        "_type": "block",
        "children": [
          {
            "_key": "849c6124e67e0",
            "_type": "span",
            "marks": [],
            "text": "I had never been to that place nor heard of the name. I was told by my friends that they had done all the bookings. I had to just pack and join them at the station."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "5ee2b75d8a8f",
        "_type": "block",
        "children": [
          {
            "_key": "c1dbd7170de30",
            "_type": "span",
            "marks": [],
            "text": "We would be going to "
          },
          {
            "_key": "c1dbd7170de31",
            "_type": "span",
            "marks": [
              "731125b2a0b4"
            ],
            "text": "‘"
          },
          {
            "_key": "c1dbd7170de32",
            "_type": "span",
            "marks": [
              "731125b2a0b4",
              "em"
            ],
            "text": "Kumarsain’"
          },
          {
            "_key": "c1dbd7170de33",
            "_type": "span",
            "marks": [],
            "text": " "
          },
          {
            "_key": "c1dbd7170de34",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "which is at the foothill of"
          },
          {
            "_key": "c1dbd7170de35",
            "_type": "span",
            "marks": [],
            "text": " "
          },
          {
            "_key": "c1dbd7170de36",
            "_type": "span",
            "marks": [
              "bfc4f82344c8",
              "em"
            ],
            "text": "Kotgarh."
          },
          {
            "_key": "c1dbd7170de37",
            "_type": "span",
            "marks": [],
            "text": " "
          },
          {
            "_key": "c1dbd7170de38",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "Both are growing areas of apples, pears, apricots, almonds, cherries, and plums in Himachal Pradesh."
          }
        ],
        "markDefs": [
          {
            "_key": "731125b2a0b4",
            "_type": "link",
            "href": "https://en.wikipedia.org/wiki/Kumarsain"
          },
          {
            "_key": "bfc4f82344c8",
            "_type": "link",
            "href": "https://www.incredibleindia.org/content/incredibleindia/en/destinations/shimla/kotgarh.html"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "fa340473cdbe",
        "_type": "block",
        "children": [
          {
            "_key": "628119867b160",
            "_type": "span",
            "marks": [],
            "text": "We were to go on the fast train called Shatabdi from Delhi to Kalka and the onward journey would be in an SUV called an Innova."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "9497d830f369",
        "_type": "block",
        "children": [
          {
            "_key": "fcae01b2cc000",
            "_type": "span",
            "marks": [],
            "text": "We reached Kalka and the cab was waiting for us. We were excited souls. We reached the mountains at 8.30 PM after a long and arduous journey and were even wondering whether it was worth it."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "5022a4e760c8",
        "_type": "block",
        "children": [
          {
            "_key": "3ba1aa2d64ca0",
            "_type": "span",
            "marks": [],
            "text": "We reached our destination. It was calm quiet with the soft rustling winds whistling through the trees."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "f44c7a8de1b5",
        "_type": "block",
        "children": [
          {
            "_key": "7a07024c2fad0",
            "_type": "span",
            "marks": [],
            "text": "The clean neat guest house The Wheeler Lodge B&B looked amazing and inviting."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "13da6063031d",
        "_type": "block",
        "children": [
          {
            "_key": "9a2ecdcc43540",
            "_type": "span",
            "marks": [],
            "text": "Inspirational welcome"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "b68010d2aa09",
        "_type": "block",
        "children": [
          {
            "_key": "8d2af27020970",
            "_type": "span",
            "marks": [],
            "text": "The host and the hostess at the Wheeler lodge were waiting to welcome us. The warm welcome we received from them made us feel very much at home. The hostess had a major kidney surgery which we did not know about. They did not cancel our booking having committed to it."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "5345acc09291",
        "_type": "block",
        "children": [
          {
            "_key": "713994f44e280",
            "_type": "span",
            "marks": [],
            "text": "She smiled and was very soft-spoken. Their two children were equally warm and treated us with respect, happiness, and kindness."
          }
        ],
        "markDefs": [],
        "style": "blockquote"
      },
      {
        "_key": "597fd4fc6e0c",
        "_type": "block",
        "children": [
          {
            "_key": "13ecf0bff4f40",
            "_type": "span",
            "marks": [],
            "text": "They served us fresh food. We enjoyed the simple but tasty homemade food. The whole family served the food and kept us busy with anecdotes about the small village. I could see that they were all proud of their beautiful village."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "192174a9cb3b",
        "_type": "block",
        "children": [
          {
            "_key": "a28247d5fa460",
            "_type": "span",
            "marks": [],
            "text": "They were humble and lovely as a family. We came to know that these young girls between the age of 10 and 13 walk 4kms to school every day on the steep elevated mountains. Winter and summer they bear it all. This makes the children hardy and strong."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "701bddeccbd8",
        "_type": "block",
        "children": [
          {
            "_key": "bc8b7e274dc50",
            "_type": "span",
            "marks": [],
            "text": "The girls also help out at the two beautiful orchards that they possessed at the time of sowing and picking the fruit. The orchards had fruit trees of apples, apricots, almonds, and cherries."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "a348c546f4e6",
        "_type": "block",
        "children": [
          {
            "_key": "cf95595d78db0",
            "_type": "span",
            "marks": [],
            "text": "Community work"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "5728ea0d2645",
        "_type": "block",
        "children": [
          {
            "_key": "71bd2deac4660",
            "_type": "span",
            "marks": [],
            "text": "Taking a round of the orchards I found that a large number of people were working there. I enquired whether these people were specially hired for the work in the orchard. While some of them were laborers that come in from Nepal and Bihar other people were owners of orchards who had come to help as they believed in helping the community and worked in each other’s orchards when the need arose."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "da9436f34414",
        "_type": "block",
        "children": [
          {
            "_key": "e5189e43f7900",
            "_type": "span",
            "marks": [],
            "text": "The people looked happy and relaxed and completely tension-free. The air was pure. There was no pollution. It was cool weather. The village consisted of only 150 people who helped each other all the time."
          }
        ],
        "markDefs": [],
        "style": "blockquote"
      },
      {
        "_key": "12f3b5ede3e1",
        "_type": "block",
        "children": [
          {
            "_key": "8c3a012657be0",
            "_type": "span",
            "marks": [],
            "text": "The community experience was something like the Japanese Ikegai in that the community work gave each person a sense of belonging and a purpose to do some work together. People are happy and committed to each other. They work together in unison."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "79e4133e3ae2",
        "_type": "block",
        "children": [
          {
            "_key": "a0cfb0b3845e0",
            "_type": "span",
            "marks": [],
            "text": "This purpose of life and good physical work keeps their bodies fit too. They sleep well."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "d81b01d7469c",
        "_type": "block",
        "children": [
          {
            "_key": "2487fe721f6b0",
            "_type": "span",
            "marks": [],
            "text": "In fact in the quiet village with pollution-free and pure air we all from big cities slept extremely well. Every night was refreshing."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "efead3000daa",
        "_type": "block",
        "children": [
          {
            "_key": "8fb0f81461860",
            "_type": "span",
            "marks": [],
            "text": "Patience"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "51c548be6a0b",
        "_type": "block",
        "children": [
          {
            "_key": "62d386f4e2a80",
            "_type": "span",
            "marks": [],
            "text": "People in the village were very patient. Farming teaches you a lot of patience. Once you sow the trees, it takes four years for the fruits to arrive. The trees last between 10–15 years giving fruit. Once the buds begin to flower it takes six months for the apples to be ripe and sold on the market."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "033f66c58b06",
        "_type": "block",
        "children": [
          {
            "_key": "3b7df1a209c70",
            "_type": "span",
            "marks": [],
            "text": "During that time the farmers are free to do other jobs and patiently wait for a good crop."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "26660f6dd68c",
        "_type": "block",
        "children": [
          {
            "_key": "88af4b6b21ad0",
            "_type": "span",
            "marks": [],
            "text": "I found cherries to be the most cumbersome. Each cherry had to be picked individually. If they hit the ground they would spoil the crop. It could neither be eaten nor kept. The crop gets wasted."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "162e83f6e580",
        "_type": "block",
        "children": [
          {
            "_key": "35e511cd1c020",
            "_type": "span",
            "marks": [],
            "text": "They are also afraid that the hail storm and other pests would spoil the crop. So all the trees are covered with nets."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "1359ed3127d5",
        "_type": "block",
        "children": [
          {
            "_key": "5f60d063c10e0",
            "_type": "span",
            "marks": [],
            "text": "The apple and pear trees are netted to avoid destruction from weather and pests. "
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "8e6c4648d3af",
        "_type": "block",
        "children": [
          {
            "_key": "b59794a5d6320",
            "_type": "span",
            "marks": [],
            "text": "Longevity"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "f4bafba98dab",
        "_type": "block",
        "children": [
          {
            "_key": "f8972bb73ca90",
            "_type": "span",
            "marks": [],
            "text": "People in this village live a long life. It is stress-free living there. The parents are highly respected by their children."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "db916c21126b",
        "_type": "block",
        "children": [
          {
            "_key": "f5a5720576d90",
            "_type": "span",
            "marks": [],
            "text": "Even people in the community respect the elders and mingle with them and do their work."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "9f65036f5d59",
        "_type": "block",
        "children": [
          {
            "_key": "6177be5c48450",
            "_type": "span",
            "marks": [],
            "text": "In return, the old people offer life lessons storytelling and happiness to people."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "504414a74179",
        "_type": "block",
        "children": [
          {
            "_key": "ec3d5c9af91f0",
            "_type": "span",
            "marks": [],
            "text": "Some cook excellent dishes and send them to the youngsters. This life is like a partnership between young and old."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "a92c073f85ee",
        "_type": "block",
        "children": [
          {
            "_key": "0e281637721d0",
            "_type": "span",
            "marks": [],
            "text": "Photo of the old lady who is so happy and stress-free. "
          },
          {
            "_key": "0e281637721d1",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Photo clicked by the author"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "5ffd552a4a0f",
        "_type": "block",
        "children": [
          {
            "_key": "8ec952876f5a0",
            "_type": "span",
            "marks": [],
            "text": "We met this lovely lady who was 92 years old. She was happy. She sang songs for us and made us dance around her. She laughed and told us anecdotes of her young years."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "880500be60ad",
        "_type": "block",
        "children": [
          {
            "_key": "975e72fb445e0",
            "_type": "span",
            "marks": [],
            "text": "Before leaving Kumarsain she presented each one of us with a box of cherries. According to customs guests should not go empty-handed from your house. It is a gesture of love and goodwill to give them something."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "d83db785c70a",
        "_type": "block",
        "children": [
          {
            "_key": "a9ccbac1c72e0",
            "_type": "span",
            "marks": [],
            "text": "What are the lessons learned?"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "33d2f7befb12",
        "_type": "block",
        "children": [
          {
            "_key": "402e9eca86b30",
            "_type": "span",
            "marks": [],
            "text": "The lessons about happiness that we learned from the people of the Kumarsain Village were the following:"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "1e8e28c4dc38",
        "_type": "block",
        "children": [
          {
            "_key": "ccda28d34a360",
            "_type": "span",
            "marks": [],
            "text": "To greet people with a lovely smile even though there is some inconvenience to you."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "b492279e316c",
        "_type": "block",
        "children": [
          {
            "_key": "5b12a4b5eff20",
            "_type": "span",
            "marks": [],
            "text": "To make people feel welcome when they come to your house."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "9769d28f6d6c",
        "_type": "block",
        "children": [
          {
            "_key": "8455a43014090",
            "_type": "span",
            "marks": [],
            "text": "To have a common purpose in life. Community work shared with the purpose of being useful to other people helps in bringing happiness to your life."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "86d5ccf8d5e0",
        "_type": "block",
        "children": [
          {
            "_key": "6efd15d589080",
            "_type": "span",
            "marks": [],
            "text": "Whatever you do in life requires patience to bring fruits to the effort made by you. Wait with patience to get rewards."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "5365c7f9f56e",
        "_type": "block",
        "children": [
          {
            "_key": "f977c2bf7f1f0",
            "_type": "span",
            "marks": [],
            "text": "To spread love and happiness in the lives of people."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "144ce9d6417d",
        "_type": "block",
        "children": [
          {
            "_key": "0049c7ba4d670",
            "_type": "span",
            "marks": [],
            "text": "Being respectful towards elders and good exchanges between younger and old generations always helps in personal growth."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "49225073a5c5",
        "_type": "block",
        "children": [
          {
            "_key": "ec35ffaee9bc0",
            "_type": "span",
            "marks": [],
            "text": "To live in a stress-free environment take a retreat in the mountains where you do not require anything but love and fresh air to live a good life."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "0efd6e0e8648",
        "_type": "block",
        "children": [
          {
            "_key": "f32463c11d0b0",
            "_type": "span",
            "marks": [],
            "text": "Longevity is when life has less stress and more fun."
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      }
    ],
    "categories": [
      {
        "_createdAt": "2022-05-11T13:25:13Z",
        "_id": "7b4ccaee-66ff-4a44-be8a-f82af8f40759",
        "_rev": "g8TtsqiUI2SyF4eBZMelQ3",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:11:29Z",
        "color": "orange",
        "slug": {
          "_type": "slug",
          "current": "travel"
        },
        "title": "Travel"
      }
    ],
    "excerpt": "I recently went to the mountains with my friends. We were celebrating 50 years of friendship. It was very special. Six of us were to be together spending time in the mountains.",
    "mainImage": {
      "_type": "image",
      "asset": {
        "_ref": "image-5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024-jpg",
        "_type": "reference"
      }
    },
    "publishedAt": "2022-09-25T15:15:00.000Z",
    "slug": {
      "_type": "slug",
      "current": "lessons-of-happiness-i-learned-from-a-mountain-village"
    },
    "title": "Lessons Of Happiness I learned from a Mountain Village"
  },
  {
    "_createdAt": "2022-05-11T13:29:36Z",
    "_id": "3da9263b-193c-4cdc-809c-aa508919d987",
    "_rev": "gRGoUIxCh2CGKUqx0IGIyz",
    "_type": "post",
    "_updatedAt": "2022-10-20T15:15:05Z",
    "author": {
      "_createdAt": "2022-05-11T13:22:25Z",
      "_id": "95daa366-f2e1-42d9-879c-fecf89731048",
      "_rev": "g8TtsqiUI2SyF4eBZNE4zL",
      "_type": "author",
      "_updatedAt": "2022-05-20T12:44:50Z",
      "bio": [
        {
          "_key": "a6c7a5d07a03",
          "_type": "block",
          "children": [
            {
              "_key": "88ec1f6c13aa",
              "_type": "span",
              "marks": [],
              "text": "Erika Oliver is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "image-4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472-jpg",
          "_type": "reference"
        }
      },
      "name": "Erika Oliver",
      "slug": {
        "_type": "slug",
        "current": "erika-oliver"
      }
    },
    "body": [
      {
        "_key": "3772908875c8",
        "_type": "block",
        "children": [
          {
            "_key": "94bd565fa8020",
            "_type": "span",
            "marks": [],
            "text": "In 2007, the now-defunct San Antonio Independent Christian Film Festival awarded Best of Festival to a documentary called "
          },
          {
            "_key": "94bd565fa8021",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "The Monstrous Regiment of Women,"
          },
          {
            "_key": "94bd565fa8022",
            "_type": "span",
            "marks": [],
            "text": " a film that simultaneously asserted that women leading families or nations is antithetical to the Bible, vilified feminists (as Marxists and destroyers of the home), and called legalized abortion an “unparalleled holocaust.” I’m in the midst of researching for a book, and it was already on my calendar last week to rewatch "
          },
          {
            "_key": "94bd565fa8023",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "The Monstrous Regiment of Women"
          },
          {
            "_key": "94bd565fa8024",
            "_type": "span",
            "marks": [],
            "text": " the day after Supreme Court Justice Samuel Alito’s "
          },
          {
            "_key": "94bd565fa8025",
            "_type": "span",
            "marks": [
              "e1a6b35c044d"
            ],
            "text": "draft opinion on Roe leaked"
          },
          {
            "_key": "94bd565fa8026",
            "_type": "span",
            "marks": [],
            "text": "."
          }
        ],
        "markDefs": [
          {
            "_key": "e1a6b35c044d",
            "_type": "link",
            "href": "https://www.politico.com/news/2022/05/02/supreme-court-abortion-draft-opinion-00029473"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "572df7bccda5",
        "_type": "block",
        "children": [
          {
            "_key": "949f262fb1320",
            "_type": "span",
            "marks": [],
            "text": "I braced myself. My social media feeds were flooded with "
          },
          {
            "_key": "949f262fb1321",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "Handmaid’s Tale"
          },
          {
            "_key": "949f262fb1322",
            "_type": "span",
            "marks": [],
            "text": " references"
          },
          {
            "_key": "949f262fb1323",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": ","
          },
          {
            "_key": "949f262fb1324",
            "_type": "span",
            "marks": [],
            "text": " a fiction now feeling too real. But the goals of women’s submission are not fictional."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "a169a2472463",
        "_type": "block",
        "children": [
          {
            "_key": "9003504db63e0",
            "_type": "span",
            "marks": [],
            "text": "Rewatching this not-too-distant artifact of white, evangelical pop-culture, I was reminded that women’s submission has long been a driving feature of a movement with outsized political influence in our country. We are merely witnessing years of power, positioning, and theological normalization coming to fruition."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "ba9c51bd8ae7",
        "_type": "block",
        "children": [
          {
            "_key": "f846fd4eb11d0",
            "_type": "span",
            "marks": [],
            "text": "The title of the film comes from an essay by founder of the Presbyterian Church of Scotland, John Knox, who wrote the tract: “The First Blast of the Trumpet Against the Monstrous Regiment of Women” in 1558 in opposition to female political leaders such as Mary I of England, who persecuted Protestant Christians, and thanks to whom, Knox had found himself exiled and out of a job. Knox wrote: “how abominable before God is the Empire or Rule of a wicked woman, yea, of a traiteresse and bastard.”"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "2b37f3e00d6e",
        "_type": "block",
        "children": [
          {
            "_key": "1d9dd8e0065f0",
            "_type": "span",
            "marks": [],
            "text": "Next, the film leaps forward to damn modern feminism. Christians, the narrator says, cannot be egalitarians — those who believe all people are equal and deserve equal rights and opportunities. Phyllis Schlafly, who successfully galvanized opposition to ratification of the Equal Rights Amendment, was featured in an interview, saying “the problem with feminism — the principle problem — is the cultivation of an attitude of victimization. Feminism tries to make women think they are victims of an oppressive, male-dominated, patriarchal society.” Further, she asserts the feminist movement set out to make the role of fulltime wife and homemaker economically impossible and socially disdained."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "be728c493dc0",
        "_type": "block",
        "children": [
          {
            "_key": "330ac8cd7c2b0",
            "_type": "span",
            "marks": [],
            "text": "“I do not believe Hillary Clinton will be elected president,” said Schlafly. “She is not a likeable woman… she’s angry about lots of things, and that isn’t the sort of person we want to lead this country.”"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "73f666f0aad4",
        "_type": "block",
        "children": [
          {
            "_key": "0ff39174ceac0",
            "_type": "span",
            "marks": [],
            "text": "Carmon Friedrich, a homeschool icon and mother of 10 noted that Clinton’s “face looks harsh. She seems mad at everything.” (Years "
          },
          {
            "_key": "0ff39174ceac1",
            "_type": "span",
            "marks": [
              "e4fdaef8fb17"
            ],
            "text": "later"
          },
          {
            "_key": "0ff39174ceac2",
            "_type": "span",
            "marks": [],
            "text": ", Friedrich herself went back to school and became a sex therapist.) Later in the film, Clinton is critiqued for only having one child and for her 1992 "
          },
          {
            "_key": "0ff39174ceac3",
            "_type": "span",
            "marks": [
              "d2f96eb08211"
            ],
            "text": "comment"
          },
          {
            "_key": "0ff39174ceac4",
            "_type": "span",
            "marks": [],
            "text": " in response to a question pertaining to her legal career, when she said, “I suppose I could have stayed home and baked cookies and had teas, but what I decided to do was to fulfill my profession.”"
          }
        ],
        "markDefs": [
          {
            "_key": "e4fdaef8fb17",
            "_type": "link",
            "href": "https://heyemilykennedy.libsyn.com/038-carmon-conover"
          },
          {
            "_key": "d2f96eb08211",
            "_type": "link",
            "href": "https://www.nytimes.com/2016/11/06/us/politics/hillary-clinton-cookies.html"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "8d2f0201ce52",
        "_type": "block",
        "children": [
          {
            "_key": "aeefd4af60e50",
            "_type": "span",
            "marks": [],
            "text": "Before a flashing montage of photos of Clinton, Nancy Pelosi, and Dianne Feinstein, Friedrich references the Biblical Deborah, arguing that women serving in leadership roles indicates God could find no worthy men to fulfill the call. Jennie Chancey, co-author of "
          },
          {
            "_key": "aeefd4af60e51",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "Passionate Housewives Desperate for God,"
          },
          {
            "_key": "aeefd4af60e52",
            "_type": "span",
            "marks": [],
            "text": " explains, “The bottom line is God created men for leadership, and he clearly tells us in his word that when women are in leadership, it’s a sign of a curse upon a nation.”"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "c88e4e9e29e1",
        "_type": "block",
        "children": [
          {
            "_key": "c2da8752abfe0",
            "_type": "span",
            "marks": [],
            "text": "That “curse” is further illustrated, according to the film, by the millions more American women who vote compared to men. Women’s political voices had begun to overtake men’s, a danger for the nation. The great error of the men of the suffrage era was their willingness to relinquish power, and in so doing, hand over the role of father to women and in turn, the “paternalistic state.”"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "1cdde8912d7d",
        "_type": "block",
        "children": [
          {
            "_key": "6b56aae07f0d0",
            "_type": "span",
            "marks": [],
            "text": "The rest of the film is a soup of common evangelical talking points: a segment of what appears to be a late-term abortion (without any context) from the Center for Bio-Ethical Reform, an anti-abortion group that produces abortion videos for show in churches and college campuses. This is followed by a woman who claims to have been an abortion profiteer prior to her conversion to Christianity. She describes how in her abortionist past, she’d worked to provoke girls ages 13–18 to have three abortions apiece, in part by increasing sexual activity among girls by bringing sex education and easy-to-miss-a-day birth control into schools."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "a54579a2b3ea",
        "_type": "block",
        "children": [
          {
            "_key": "8dbcfcf1efa70",
            "_type": "span",
            "marks": [],
            "text": "(Studies have shown that comprehensive sexual education "
          },
          {
            "_key": "8dbcfcf1efa71",
            "_type": "span",
            "marks": [
              "319167f0df3a"
            ],
            "text": "actually reduces"
          },
          {
            "_key": "8dbcfcf1efa72",
            "_type": "span",
            "marks": [],
            "text": " rates of sexual activity, risky behaviors, STI’s and adolescent pregnancy.)"
          }
        ],
        "markDefs": [
          {
            "_key": "319167f0df3a",
            "_type": "link",
            "href": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2016/11/comprehensive-sexuality-education"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "4483c29c69b2",
        "_type": "block",
        "children": [
          {
            "_key": "6703c4d994840",
            "_type": "span",
            "marks": [],
            "text": "But the boogeyman of the profit-hungry abortionist creates a stark evil, a ready enemy. There’s an utter and profound lack of nuance. There’s no space to weigh circumstances of rape, incest, health of the mother, or non-viable pregnancy, let alone reproductive choice. The abortion provider is reduced to a greedy (not-yet-Christian) killer, and the procedure, to images of bloody fetuses. The Bible is defined as unchanged and infallible — a single, patriarchal interpretation, the only option."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "19c3efbe1b49",
        "_type": "block",
        "children": [
          {
            "_key": "09c9e29e27e10",
            "_type": "span",
            "marks": [],
            "text": "Claiming intellectual links between Betty Friedan, Engels, and Marx, Chancey extrapolates that the goal of communism is only accomplished by displacing fathers as head of Christian families and getting children into state-run schools. It’s this strategic linkage of anxieties that marks this worldview: if women working or women in leadership concerns you, then so too should public school (where your kids can’t be taught Christian values anyway!). Similarly, if, despite other evangelical convictions, you take part in school or work or female leadership, then you may be contributing to a socialist overthrow of America. Right Christian action would entail rejecting the gamut."
          }
        ],
        "markDefs": [],
        "style": "normal"
      }
    ],
    "categories": [
      {
        "_createdAt": "2022-05-11T13:25:04Z",
        "_id": "f4c59db9-b221-4ba0-87b8-4d0bdb467ece",
        "_rev": "O6BCyrheCnoszLth8lZdkw",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:12:57Z",
        "color": "purple",
        "slug": {
          "_type": "slug",
          "current": "lifestyle"
        },
        "title": "Lifestyle"
      }
    ],
    "excerpt": "In2007, the now-defunct San Antonio Independent Christian Film Festival awarded Best of Festival to a documentary called The Monstrous Regiment of Women a film that simultaneously.",
    "mainImage": {
      "_type": "image",
      "asset": {
        "_ref": "image-c8e84acf383034b5b65181b9c4bb97069268d12e-4608x3072-jpg",
        "_type": "reference"
      }
    },
    "publishedAt": "2022-09-23T15:15:00.000Z",
    "slug": {
      "_type": "slug",
      "current": "there-s-nothing-new-about-undermining-women-s-autonomy"
    },
    "title": "There’s Nothing New About Undermining Women’s Autonomy"
  },
  {
    "_createdAt": "2022-05-11T13:28:27Z",
    "_id": "715eebb2-0082-4d2f-ad13-901bf3018bb9",
    "_rev": "tnjGEXgFmY2tkHBnvdEBym",
    "_type": "post",
    "_updatedAt": "2022-10-20T15:14:53Z",
    "author": {
      "_createdAt": "2022-05-11T13:22:25Z",
      "_id": "95daa366-f2e1-42d9-879c-fecf89731048",
      "_rev": "g8TtsqiUI2SyF4eBZNE4zL",
      "_type": "author",
      "_updatedAt": "2022-05-20T12:44:50Z",
      "bio": [
        {
          "_key": "a6c7a5d07a03",
          "_type": "block",
          "children": [
            {
              "_key": "88ec1f6c13aa",
              "_type": "span",
              "marks": [],
              "text": "Erika Oliver is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses."
            }
          ],
          "markDefs": [],
          "style": "normal"
        }
      ],
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "image-4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472-jpg",
          "_type": "reference"
        }
      },
      "name": "Erika Oliver",
      "slug": {
        "_type": "slug",
        "current": "erika-oliver"
      }
    },
    "body": [
      {
        "_key": "d28310d14960",
        "_type": "block",
        "children": [
          {
            "_key": "2d2dcab229210",
            "_type": "span",
            "marks": [],
            "text": "We always knew but now we "
          },
          {
            "_key": "2d2dcab229211",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "know"
          },
          {
            "_key": "2d2dcab229212",
            "_type": "span",
            "marks": [],
            "text": ". The tech elite mean to leave us all behind."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "8fffc543f37f",
        "_type": "block",
        "children": [
          {
            "_key": "1e9421e2c9ed0",
            "_type": "span",
            "marks": [],
            "text": "I learned this when I traveled to a remote resort to deliver what was supposed to be a talk for a group of tech investors. It turned out to be something of a “consult” to five ultra-wealthy men on their apocalypse survival strategies."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "c6b43c8aeb9b",
        "_type": "block",
        "children": [
          {
            "_key": "23825e8c35770",
            "_type": "span",
            "marks": [],
            "text": "The experience led to a much-circulated piece "
          },
          {
            "_key": "23825e8c35771",
            "_type": "span",
            "marks": [
              "a6128e65425b"
            ],
            "text": "here"
          },
          {
            "_key": "23825e8c35772",
            "_type": "span",
            "marks": [],
            "text": " and an option for "
          },
          {
            "_key": "23825e8c35773",
            "_type": "span",
            "marks": [
              "5f14053cea93"
            ],
            "text": "a movie"
          },
          {
            "_key": "23825e8c35774",
            "_type": "span",
            "marks": [],
            "text": ". But it also set me off on a multi-year journey to understand “The Mindset” leading the wealthy to believe that as long they have enough money and the right technology, they can break the laws of physics, economics, and morality to escape a disaster of their own making. They are preparing for a digital future that has less to do with making the world a better place than transcending the human condition altogether."
          }
        ],
        "markDefs": [
          {
            "_key": "a6128e65425b",
            "_type": "link",
            "href": "https://onezero.medium.com/survival-of-the-richest-9ef6cddd0cc1"
          },
          {
            "_key": "5f14053cea93",
            "_type": "link",
            "href": "http://v/"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "5ddbbd0ab1da",
        "_type": "block",
        "children": [
          {
            "_key": "0fec00ca8f190",
            "_type": "span",
            "marks": [],
            "text": "These billionaires once showered the world with optimistic business plans for how tech might benefit human society. Now they’ve reduced technological progress to a video game that one of them wins by finding the escape hatch. Will it be Bezos migrating to space, Thiel to his New Zealand compound, or Zuckerberg to his Metaverse?"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "34e4eb8a60b3",
        "_type": "block",
        "children": [
          {
            "_key": "daff566beb430",
            "_type": "span",
            "marks": [],
            "text": "This “out of sight, out of mind” externalization of poverty and poison trickles down through the Mindset to the rest of us; but the collateral damage doesn’t go away just because we’ve covered our eyes with VR goggles. The longer we ignore the social, economic, and environmental repercussions of our actions, the more of a problem they become. This, in turn, motivates even more withdrawal, isolationism, and apocalyptic fantasy."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "844e170c87a2",
        "_type": "block",
        "children": [
          {
            "_key": "db564ccb89340",
            "_type": "span",
            "marks": [],
            "text": "The Mindset is based in a staunchly atheistic and materialist scientism, a faith in technology to solve problems, an adherence to biases of digital code, an understanding of human relationships as market phenomena, a fear of nature and women, a need to see one’s contributions as utterly unique innovations without precedent, and an urge to neutralize the unknown by dominating and de-animating it."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "d4d1b77156c3",
        "_type": "block",
        "children": [
          {
            "_key": "43d0be76066c0",
            "_type": "span",
            "marks": [],
            "text": "The technosolutionist future climaxes by uploading our economy to the blockchain and our minds to the cloud. We “level up” in the ultimate exit strategy. Like the plot of a Marvel blockbuster, the very structure of The Mindset requires an endgame. Everything must resolve to a one or a zero, a winner or loser, the saved or the damned."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "efb7f46ae28c",
        "_type": "block",
        "children": [
          {
            "_key": "bb69b1ecced10",
            "_type": "span",
            "marks": [],
            "text": "This fatalist drive to rise above and separate from humanity is no more the result of runaway digital capitalism than its cause — a way of treating one another and the world that can be traced back to the sociopathic tendencies of empirical science, individualism, sexual domination, and perhaps even “progress” itself. But this Mindset can be denaturalized and replaced."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "a7b96fd1d989",
        "_type": "block",
        "children": [
          {
            "_key": "fbdec074dcae0",
            "_type": "span",
            "marks": [],
            "text": "We must act as a counterculture to The Mindset, introducing circularity where they see only arrows, and more thoughtful, long-term thinking when they can only strive for escape."
          }
        ],
        "markDefs": [],
        "style": "blockquote"
      },
      {
        "_key": "8b21814738f1",
        "_type": "block",
        "children": [
          {
            "_key": "7608614c0d580",
            "_type": "span",
            "marks": [],
            "text": "Those of us who recognize that we’ve been here before are the ones who have to call attention to where we are heading. Today, that means acting as a counterculture to The Mindset, introducing circularity where they see only arrows, and more thoughtful, long-term thinking when they can only strive for escape. We still have choices."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "daee20094352",
        "_type": "block",
        "children": [
          {
            "_key": "41bc885297940",
            "_type": "span",
            "marks": [],
            "text": "Mine, was to chronicle my experiences with the tech elite over the years, and call out the ways in which our dreams for a better future too often involved externalizing harm to others, or ignoring today’s impacts for tomorrow’s promised gains. Just the announcement of this book has already led to the cancellation of two speaking events by sponsors who fear being associated with a critique of runaway exponential capitalism (which is what many of them are still trying to sell as a desired and attainable outcome). I take this as a good sign."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "886329405bf8",
        "_type": "block",
        "children": [
          {
            "_key": "a8c22a5f1b160",
            "_type": "span",
            "marks": [],
            "text": "Yes, I’d love you to "
          },
          {
            "_key": "a8c22a5f1b161",
            "_type": "span",
            "marks": [
              "e95f098091b4"
            ],
            "text": "support this book by pre-ordering it"
          },
          {
            "_key": "a8c22a5f1b162",
            "_type": "span",
            "marks": [],
            "text": " or (better yet) asking your library to carry it. It’s being published by an "
          },
          {
            "_key": "a8c22a5f1b163",
            "_type": "span",
            "marks": [
              "f31c6f7c617b"
            ],
            "text": "employee-owned company"
          },
          {
            "_key": "a8c22a5f1b164",
            "_type": "span",
            "marks": [],
            "text": ", and in as friendly a fashion as possible. But more importantly, I’m hoping you’ll read it by any means necessary, and join me and others in imagining a better path forward."
          }
        ],
        "markDefs": [
          {
            "_key": "e95f098091b4",
            "_type": "link",
            "href": "https://wwnorton.com/search/cnVzaGtvZmYgc3Vydml2YWw="
          },
          {
            "_key": "f31c6f7c617b",
            "_type": "link",
            "href": "https://en.wikipedia.org/wiki/W._W._Norton_%26_Company"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "eaa2daf3727b",
        "_type": "block",
        "children": [
          {
            "_key": "c032ca2c31630",
            "_type": "span",
            "marks": [],
            "text": "We do not have to buy-in to the apocalypse for which these billionaires are actively preparing and, in some cases, they are "
          },
          {
            "_key": "c032ca2c31631",
            "_type": "span",
            "marks": [
              "8ea1fd30ce74"
            ],
            "text": "intentionally accelerating"
          },
          {
            "_key": "c032ca2c31632",
            "_type": "span",
            "marks": [],
            "text": ". There’s no way out, except together."
          }
        ],
        "markDefs": [
          {
            "_key": "8ea1fd30ce74",
            "_type": "link",
            "href": "https://www.theguardian.com/world/2017/may/11/accelerationism-how-a-fringe-philosophy-predicted-the-future-we-live-in"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "f5fa53163b13",
        "_type": "block",
        "children": [
          {
            "_key": "f7cbc416e1d50",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "Douglas Rushkoff’s upcoming book,"
          },
          {
            "_key": "f7cbc416e1d51",
            "_type": "span",
            "marks": [],
            "text": " Survival of the Richest: Escape Fantasies of the Tech Billionaires"
          },
          {
            "_key": "f7cbc416e1d52",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": ", is"
          },
          {
            "_key": "f7cbc416e1d53",
            "_type": "span",
            "marks": [],
            "text": " "
          },
          {
            "_key": "f7cbc416e1d54",
            "_type": "span",
            "marks": [
              "73b960963e0f",
              "em"
            ],
            "text": "available for pre-order"
          },
          {
            "_key": "f7cbc416e1d55",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": ". Rushkoff is a weekly columnist on Medium, and the author of books including"
          },
          {
            "_key": "f7cbc416e1d56",
            "_type": "span",
            "marks": [],
            "text": " Team Human, Throwing Rocks at the Google Bus, Present Shock"
          },
          {
            "_key": "f7cbc416e1d57",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": ", and"
          },
          {
            "_key": "f7cbc416e1d58",
            "_type": "span",
            "marks": [],
            "text": " Program or Be Programmed"
          },
          {
            "_key": "f7cbc416e1d59",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": ". Rushkoff is host of the"
          },
          {
            "_key": "f7cbc416e1d510",
            "_type": "span",
            "marks": [],
            "text": " "
          },
          {
            "_key": "f7cbc416e1d511",
            "_type": "span",
            "marks": [
              "76df3f6b6cd3",
              "em"
            ],
            "text": "Team Human podcast"
          },
          {
            "_key": "f7cbc416e1d512",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": ", a graphic novelist, and a professor of media theory and digital economics."
          }
        ],
        "markDefs": [
          {
            "_key": "73b960963e0f",
            "_type": "link",
            "href": "https://wwnorton.com/books/9780393881066"
          },
          {
            "_key": "76df3f6b6cd3",
            "_type": "link",
            "href": "http://teamhuman.fm/"
          }
        ],
        "style": "normal"
      }
    ],
    "categories": [
      {
        "_createdAt": "2022-05-11T13:19:54Z",
        "_id": "d6dae217-c9ca-466c-a6b6-45a76bd5aed0",
        "_rev": "O6BCyrheCnoszLth8lZdDq",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:12:40Z",
        "color": "blue",
        "slug": {
          "_type": "slug",
          "current": "technology"
        },
        "title": "Technology"
      }
    ],
    "excerpt": "\n\nI learned this when I traveled to a remote resort to deliver what was supposed to be a talk for a group of tech investors. It turned out to be something of a “consult” to five ultra-wealthy men.",
    "mainImage": {
      "_type": "image",
      "asset": {
        "_ref": "image-35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380-png",
        "_type": "reference"
      }
    },
    "publishedAt": "2022-09-21T15:14:00.000Z",
    "slug": {
      "_type": "slug",
      "current": "escape-fantasies-of-the-tech-billionaires"
    },
    "title": "Escape Fantasies of the Tech Billionaires"
  },
  {
    "_createdAt": "2022-05-11T13:14:12Z",
    "_id": "b56edf46-c8a7-4e43-be30-aba7436cc206",
    "_rev": "tnjGEXgFmY2tkHBnvdE7Iz",
    "_type": "post",
    "_updatedAt": "2022-10-20T15:14:36Z",
    "author": {
      "_createdAt": "2022-05-11T13:17:13Z",
      "_id": "290948c1-9a04-41a4-9b07-960131320993",
      "_rev": "L1x6OoCeBFQajmzrxwelTR",
      "_type": "author",
      "_updatedAt": "2022-05-20T12:50:25Z",
      "bio": [
        {
          "_key": "49decc02f4f6",
          "_type": "block",
          "children": [
            {
              "_key": "add99fe1bf81",
              "_type": "span",
              "marks": [],
              "text": "Mario is a Staff Engineer specialising in Frontend at "
            },
            {
              "_key": "08c2faf2f982",
              "_type": "span",
              "marks": [
                "8fb88fe0431f"
              ],
              "text": "Vercel"
            },
            {
              "_key": "e9332a10a47c",
              "_type": "span",
              "marks": [],
              "text": ", as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple."
            }
          ],
          "markDefs": [
            {
              "_key": "8fb88fe0431f",
              "_type": "link",
              "href": "https://vercel.com/"
            }
          ],
          "style": "normal"
        }
      ],
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "image-4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648-jpg",
          "_type": "reference"
        }
      },
      "name": "Mario Sanchez",
      "slug": {
        "_type": "slug",
        "current": "mario-sanchez"
      }
    },
    "body": [
      {
        "_key": "20d98a11e024",
        "_type": "block",
        "children": [
          {
            "_key": "36dba863d21c0",
            "_type": "span",
            "marks": [],
            "text": "“What’s the meaning of life?” is a cliche philosophical question, but it touches on something fundamental about how humans relate to the world around them. People want to know that there’s significance to their lives, but not necessarily in any grandiose sense. Most of us just want to feel that there’s value in getting up and being active each day. We search for signs that our existence is a net good in the world, even if only on a minuscule scale in the grander scheme of the universe."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "cda4fa9e46b5",
        "_type": "block",
        "children": [
          {
            "_key": "b90cec3b72c00",
            "_type": "span",
            "marks": [],
            "text": "In the past, researchers have identified "
          },
          {
            "_key": "b90cec3b72c01",
            "_type": "span",
            "marks": [
              "9a609a769450"
            ],
            "text": "three important constructs"
          },
          {
            "_key": "b90cec3b72c02",
            "_type": "span",
            "marks": [],
            "text": " underlying “meaning in life”. The first is "
          },
          {
            "_key": "b90cec3b72c03",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "coherence"
          },
          {
            "_key": "b90cec3b72c04",
            "_type": "span",
            "marks": [],
            "text": ", which refers to an ability to make sense of what’s happening in our lives as we build a personal story. The second is "
          },
          {
            "_key": "b90cec3b72c05",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "purpose"
          },
          {
            "_key": "b90cec3b72c06",
            "_type": "span",
            "marks": [],
            "text": ", which is the feeling that we’re working toward important life goals. The third is "
          },
          {
            "_key": "b90cec3b72c07",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "mattering"
          },
          {
            "_key": "b90cec3b72c08",
            "_type": "span",
            "marks": [],
            "text": ", which is the belief that our lives matter in the wider context of the world around us."
          }
        ],
        "markDefs": [
          {
            "_key": "9a609a769450",
            "_type": "link",
            "href": "https://pubmed.ncbi.nlm.nih.gov/30614732/"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "50c9ae937569",
        "_type": "block",
        "children": [
          {
            "_key": "3a16a5bf20740",
            "_type": "span",
            "marks": [],
            "text": "However, new evidence is revealing an overlooked construct, and it may be the most crucial one of all. Researchers are calling it “experiential appreciation”, and it refers to enjoying and appreciating sensations as you experience them — a concept that you may already recognize if you’re familiar with mindfulness."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "7a2857df3daf",
        "_type": "block",
        "children": [
          {
            "_key": "1a0c6b8a1a6c0",
            "_type": "span",
            "marks": [],
            "text": ""
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "fa1b48835ffd",
        "_type": "image",
        "asset": {
          "_ref": "image-4b0860eea675e1ebbb0bf25fbff6db2534cfb611-5184x3348-jpg",
          "_type": "reference"
        }
      },
      {
        "_key": "1c988fb8e7b0",
        "_type": "block",
        "children": [
          {
            "_key": "23313620b6360",
            "_type": "span",
            "marks": [],
            "text": "The fourth construct of meaning in life"
          }
        ],
        "markDefs": [],
        "style": "h2"
      },
      {
        "_key": "c56852088700",
        "_type": "block",
        "children": [
          {
            "_key": "64b41b6055230",
            "_type": "span",
            "marks": [],
            "text": "In a "
          },
          {
            "_key": "64b41b6055231",
            "_type": "span",
            "marks": [
              "f1732d03a67d"
            ],
            "text": "recently published paper"
          },
          {
            "_key": "64b41b6055232",
            "_type": "span",
            "marks": [],
            "text": " (February 2022), researchers probed what it means to experience meaning in life. In their first study, they analyzed past survey data from over 11,000 people across 30 countries. These surveys were originally designed to assess coping strategies during the COVID-19 pandemic, but the researchers plucked out individual questions linked to meaning-in-life constructs. Here’s an example for each construct; participants had to rate their agreement with each statement or question below:"
          }
        ],
        "markDefs": [
          {
            "_key": "f1732d03a67d",
            "_type": "link",
            "href": "https://www.nature.com/articles/s41562-021-01283-6.pdf"
          }
        ],
        "style": "normal"
      },
      {
        "_key": "b4a20669b20e",
        "_type": "block",
        "children": [
          {
            "_key": "014f9abd7f120",
            "_type": "span",
            "marks": [],
            "text": "Coherence: “I’ve been looking for something good in what is happening”"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "6e45bb19a09c",
        "_type": "block",
        "children": [
          {
            "_key": "a7e1995cb0660",
            "_type": "span",
            "marks": [],
            "text": "Purpose: “I do something productive every day”"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "e3830248af43",
        "_type": "block",
        "children": [
          {
            "_key": "4fb166b550b00",
            "_type": "span",
            "marks": [],
            "text": "Mattering: “I’m doing what is good for our society”"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "315669a9940e",
        "_type": "block",
        "children": [
          {
            "_key": "11e19d9af96a0",
            "_type": "span",
            "marks": [],
            "text": "Experiential appreciation: “I appreciate my life as it is right now regardless of the circumstances”"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "49bceefd3c7f",
        "_type": "block",
        "children": [
          {
            "_key": "4e066f973f3e0",
            "_type": "span",
            "marks": [],
            "text": "Meaning in life: “In general, to what extent do you feel that what you do in your life is valuable and worthwhile?”"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "dd14fac50c8b",
        "_type": "block",
        "children": [
          {
            "_key": "0ecf3db3acb50",
            "_type": "span",
            "marks": [],
            "text": "The researchers analyzed the survey data, testing how each construct predicted people’s scores in the overall meaning-in-life measure. Consistent with previous research, the three traditional constructs (coherence, purpose, and mattering) all individually predicted meaning in life to some extent. The interesting part was that after accounting for those three constructs, the new fourth construct of experiential appreciation explained another significant portion of people’s meaning in life. In other words, a major ingredient in the meaning-in-life formula had been missed by previous researchers."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "89b9488bef2a",
        "_type": "block",
        "children": [
          {
            "_key": "8ebf6afe7a8a0",
            "_type": "span",
            "marks": [],
            "text": "In a second study, the researchers developed their own way to measure experiential appreciation. For the three older constructs, they pulled specialized survey questions from previously published studies. But since experiential appreciation was a newcomer, they had to formalize its meaning and how to measure it. After some careful analysis, they ended up with five survey items. Anyone who scores highly on these items is high in experiential appreciation:"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "804c52d4456b",
        "_type": "block",
        "children": [
          {
            "_key": "9cb569bbdba70",
            "_type": "span",
            "marks": [],
            "text": "“I have great appreciation for the beauty of life.”"
          }
        ],
        "level": 1,
        "listItem": "number",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "db0d27c4cbe6",
        "_type": "block",
        "children": [
          {
            "_key": "e574531a9f640",
            "_type": "span",
            "marks": [],
            "text": "“I take great interest in my daily activities.”"
          }
        ],
        "level": 1,
        "listItem": "number",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "b9387d9e3bef",
        "_type": "block",
        "children": [
          {
            "_key": "6f17b18845ef0",
            "_type": "span",
            "marks": [],
            "text": "“I appreciate a wide variety of experiences.”"
          }
        ],
        "level": 1,
        "listItem": "number",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "965bda0fdf24",
        "_type": "block",
        "children": [
          {
            "_key": "4402e0a805440",
            "_type": "span",
            "marks": [],
            "text": "“I appreciate the little things in life.”"
          }
        ],
        "level": 1,
        "listItem": "number",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "12c4ccd647d3",
        "_type": "block",
        "children": [
          {
            "_key": "94a39cb4a3ea0",
            "_type": "span",
            "marks": [],
            "text": "“I tend to find myself deeply engaged in conversations with other people.”"
          }
        ],
        "level": 1,
        "listItem": "number",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "d36f0dc7755a",
        "_type": "block",
        "children": [
          {
            "_key": "cc6f9b65b7990",
            "_type": "span",
            "marks": [],
            "text": "Using these new measures together with the standard measures for the other three constructs, the researchers sent surveys to over 1500 people in the US and China. Instead of relying on indirect questions as they did in the previous COVID survey analysis, they collected dedicated data using well-tested measures for each construct."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "287c9a384e2f",
        "_type": "block",
        "children": [
          {
            "_key": "7178f75f320c0",
            "_type": "span",
            "marks": [],
            "text": "Once again, higher purpose, higher mattering, and higher experiential appreciation all consistently predicted higher meaning in life. The effects of coherence were a little weaker, showing significant predictive power in the Chinese sample but not the American sample. While coherence was a little shaky, experiential appreciation certainly wasn’t."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "1d8f0732ea78",
        "_type": "block",
        "children": [
          {
            "_key": "61617683078d0",
            "_type": "span",
            "marks": [],
            "text": "So at least when analyzing the connections between all of these concepts, experiential appreciation wins a deserving place in the fight for meaning in life. But could you actually boost meaning in life by boosting experiential appreciation?"
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "289aed36587d",
        "_type": "block",
        "children": [
          {
            "_key": "7278f2a0ee470",
            "_type": "span",
            "marks": [],
            "text": "To answer this, the researchers came up with a way to stimulate people’s experiential appreciation: they showed everyone an awe-inspiring 2-min video from the nature documentary, “Planet Earth”. Few things in life give us a deeper connection to the present moment than sights of hypnotic oceans, lush forests, and David Attenborough documentaries."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "80f91b76f562",
        "_type": "block",
        "children": [
          {
            "_key": "d4e490c542590",
            "_type": "span",
            "marks": [],
            "text": "The nature manipulation worked. Following the video, people reported higher levels of experiential appreciation. More importantly, by boosting their experiential appreciation, the video also indirectly raised how much people reported feeling a sense of meaning in their life. The researchers now had evidence of a causal connection between appreciating the moment and feeling that life is valuable."
          }
        ],
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "531ca0d50582",
        "_type": "block",
        "children": [
          {
            "_key": "cbaca01ede440",
            "_type": "span",
            "marks": [],
            "text": "Takeaway tips"
          }
        ],
        "markDefs": [],
        "style": "h1"
      },
      {
        "_key": "d2864c9d5321",
        "_type": "block",
        "children": [
          {
            "_key": "cc9dff14cbe20",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "The four elements of meaning in life:"
          },
          {
            "_key": "cc9dff14cbe21",
            "_type": "span",
            "marks": [],
            "text": " Here’s a simple wheel I’ve made to visualize the four elements associated with meaning in life according to the latest evidence. Think about how each of them applies to your own life. Feelings like “meaning in life” are incredibly subjective, but model-based thinking makes them less abstract and more practical. At difficult moments, work out where your problems might lie on this wheel. Where are your strengths and where are your weaknesses?"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "381a6a85789e",
        "_type": "block",
        "children": [
          {
            "_key": "a7a00db9adf80",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": "Practice experiential awareness:"
          },
          {
            "_key": "a7a00db9adf81",
            "_type": "span",
            "marks": [],
            "text": " The studies above show that experiential awareness is an important component of meaning in life. Here are two ways to practice it in your own life:"
          }
        ],
        "level": 1,
        "listItem": "bullet",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "53b5d2b1a793",
        "_type": "block",
        "children": [
          {
            "_key": "88d3d131d15a0",
            "_type": "span",
            "marks": [
              "strong",
              "em"
            ],
            "text": "Spend time in nature"
          },
          {
            "_key": "88d3d131d15a1",
            "_type": "span",
            "marks": [
              "strong"
            ],
            "text": ":"
          },
          {
            "_key": "88d3d131d15a2",
            "_type": "span",
            "marks": [],
            "text": " Whether it’s a short walk through your local park or a bigger trip out into the wilderness, make regular time for interacting with nature. And when you can’t get out of the house, nature documentaries are a great fallback! Although the mechanisms are still unclear, there are several ways nature might benefit emotional wellbeing. For example, observing nature’s breathtaking beauty is like visiting the best art gallery on Earth. There’s a reason so many paintings represent natural scenes and landscapes. Since we evolved in the natural world, our psychology reacts to it in a profoundly positive way. Nature’s immensity also makes you feel connected to something bigger outside yourself. When you’re immersed in nature, you realize the grand world that you’re a part of. This puts some of your smaller daily problems into perspective. Finally, in nature, you’re exposed to calm and natural sensory stimulation. For city dwellers, this is a refreshing experience because the sensory stimulation you experience in a city is hectic and exhausting. Glaring ads grab your attention from the left, a pushy pedestrian grabs your attention from the right, and car horns grab your attention from everywhere else. Nature allows you to be more voluntary and relaxed about how your attention is drifting"
          }
        ],
        "level": 1,
        "listItem": "number",
        "markDefs": [],
        "style": "normal"
      },
      {
        "_key": "cf69ed458170",
        "_type": "block",
        "children": [
          {
            "_key": "2d7c4a572a880",
            "_type": "span",
            "marks": [
              "strong",
              "em"
            ],
            "text": "Learn to be mindful:"
          },
          {
            "_key": "2d7c4a572a881",
            "_type": "span",
            "marks": [],
            "text": " Experiential appreciation is all about living in the moment and focusing your attention on enjoying sensations as they happen. You can practice this ability with mindfulness techniques. If you’re interested in a good meditation guide, I enjoy the "
          },
          {
            "_key": "2d7c4a572a882",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "Waking Up"
          },
          {
            "_key": "2d7c4a572a883",
            "_type": "span",
            "marks": [],
            "text": " meditation app. If you’re looking for a short read or listen, here’s a "
          },
          {
            "_key": "2d7c4a572a884",
            "_type": "span",
            "marks": [
              "eec281a4fa48"
            ],
            "text": "helpful NPR feature on Jon Kabat-Zinn"
          },
          {
            "_key": "2d7c4a572a885",
            "_type": "span",
            "marks": [],
            "text": " — a pioneer in science-based mindfulness. Here’s a great quote from the piece: “The real meditation practice is the 24 hours itself — it’s life itself. It’s not sitting on a cushion in the cross-legged posture or lying in a yoga pose called the corpse pose or anything like that… we’re cultivating "
          },
          {
            "_key": "2d7c4a572a886",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "that"
          },
          {
            "_key": "2d7c4a572a887",
            "_type": "span",
            "marks": [],
            "text": " so that we get more comfortable with living out "
          },
          {
            "_key": "2d7c4a572a888",
            "_type": "span",
            "marks": [
              "em"
            ],
            "text": "all"
          },
          {
            "_key": "2d7c4a572a889",
            "_type": "span",
            "marks": [],
            "text": " our moments as if they really mattered and therefore being there for them — the good ones, the bad ones, the ugly ones, the stressful ones, the difficult ones, the painful ones.”"
          }
        ],
        "level": 1,
        "listItem": "number",
        "markDefs": [
          {
            "_key": "eec281a4fa48",
            "_type": "link",
            "href": "https://www.npr.org/2021/12/21/1066585316/mindfulness-meditation-with-john-kabat-zinn"
          }
        ],
        "style": "normal"
      }
    ],
    "categories": [
      {
        "_createdAt": "2022-05-11T13:13:53Z",
        "_id": "03582614-ca7f-4ba0-8296-5c02f7988cc2",
        "_rev": "O6BCyrheCnoszLth8lZd2o",
        "_type": "category",
        "_updatedAt": "2022-05-20T09:12:32Z",
        "color": "green",
        "slug": {
          "_type": "slug",
          "current": "personal-growth"
        },
        "title": "Personal Growth"
      }
    ],
    "excerpt": "It is a cliche philosophical question, but it touches on something fundamental about how humans relate to the world around them. ",

    "publishedAt": "2022-09-14T15:14:00.000Z",
    "slug": {
      "_type": "slug",
      "current": "four-ways-to-find-meaning-in-life"
    },
    "title": "Four Ways to Find Meaning in Life"
  }
]

enum LabelColor {
  green = 'green',
  blue = 'blue',
  orange = 'orange',
  purple = 'purple',
  pink = 'pink'
}

interface Category {
  slug: {
    current: string
  },
  color: string,
  title: string
}

function Label(props: { color: LabelColor, children: any }) {
  const color = {
    green: "text-green-500",
    blue: "text-blue-500",
    orange: "text-orange-400",
    purple: "text-purple-500",
    pink: "text-pink-500"
  };
  return (
    <span
      className={classNames(
        "inline-block mt-5 text-xs font-medium tracking-wider uppercase ",
        color[props.color] || color[LabelColor.pink]
      )}>
      {props.children}
    </span>
  );
}

function CategoryLabel({ categories }: { categories: Category[] }) {
  return (
    <div>
      {categories?.length &&
        categories.slice(0).map((category, index) => (
          <Link
            href={`/category/${category.slug.current}`}
            key={index}>
            <Label color={category.color as LabelColor}>{category.title}</Label>
          </Link>
        ))}
    </div>
  );
}

interface Image {
  src: string,
  loader?: string,
  blurDataURL?: string,
  alt?: string
}

interface Post {
  mainImage?: Image,
  author: {
    name: string,
    image: Image
  },
  slug: {
    current: string
  },
  categories: Category[],
  title: string,
  excerpt?: string,
  publishedAt?: string,
  _createdAt?: string
}

enum Aspect {
  landscape = 'landscape',
  aspect_video = 'aspect-video',
  aspect_square = 'aspect-square',
}

function PostList({ post, aspect }: { post: Post, aspect: Aspect }) {
  const imageProps = post?.mainImage;
  const AuthorimageProps = post?.author?.image;
  return (
    <>
      <div className="cursor-pointer group">
        <div
          className={classNames(
            "relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105",
            aspect === "landscape" ? "aspect-video" : "aspect-square"
          )}>
          <Link href={`/post/${post.slug.current}`}>
            {imageProps ? (
              <img
                src={imageProps.src}
                // loader={imageProps.loader}
                // blurDataURL={imageProps.blurDataURL}
                alt={post.mainImage?.alt || "Thumbnail" || ''}
                // placeholder="blur"
                // layout="fill"
                // objectFit="cover"
                className="transition-all object-cover"
              />
            ) : (
              <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /> </svg>
              </span>
            )}
          </Link>
        </div>
        <CategoryLabel categories={post.categories} />
        <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
          <Link href={`/post/${post.slug.current}`}>
            <span className="bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
              {post.title}
            </span>
          </Link>
        </h2>

        <div className="hidden">
          {post.excerpt && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
              <Link href={`/post/${post.slug.current}`}>
                {post.excerpt}
              </Link>
            </p>
          )}
        </div>

        <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0 w-5 h-5">
              {post.author.image && (
                <img
                  src={AuthorimageProps.src}
                  // blurDataURL={AuthorimageProps.blurDataURL}
                  // loader={AuthorimageProps.loader as string}
                  // objectFit="cover"
                  // layout="fill"
                  alt={post?.author?.name}
                  // placeholder="blur"
                  className="rounded-full object-cover"
                />
              )}
            </div>
            <span className="text-sm">{post.author.name}</span>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time
            className="text-sm"
            dateTime={post?.publishedAt || post._createdAt}>
            {format(
              parseISO(post?.publishedAt || post._createdAt || ''),
              "MMMM dd, yyyy"
            )}
          </time>
        </div>
      </div>
    </>
  );
}


export default function Home() {
  return (
    <main className='container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg'>
      <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
        {posts.slice(0, 2).map(post => (
          <PostList
            key={post._id}
            post={(() => {
              return {
                author: {
                  image: {
                    src: 'https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=32&q=75&fit=clip&auto=format'
                  },
                  name: "Author"
                },
                categories: [
                  {
                    color: LabelColor.green,
                    slug: {
                      current: '/categories/123'
                    },
                    title: 'Technology'
                  }
                ],
                mainImage: {
                  src: 'https://cdn.sanity.io/images/cijrdavx/production/05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png?rect=0,0,800,468&w=2048&q=75&fit=clip&auto=format'
                },
                slug: {
                  current: post.slug.current
                },
                title: post.title,
                _createdAt: post._createdAt,
                publishedAt: post.publishedAt
              }
            })()}
            aspect={Aspect.landscape}
          />
        ))}
      </div>

      <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
        {posts.slice(2).map(post => (
          <PostList
            key={post._id}
            post={(() => {
              return {
                author: {
                  image: {
                    src: 'https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=32&q=75&fit=clip&auto=format'
                  },
                  name: "Author"
                },
                categories: [
                  {
                    color: LabelColor.green,
                    slug: {
                      current: '/categories/123'
                    },
                    title: 'Technology'
                  }
                ],
                mainImage: {
                  src: 'https://cdn.sanity.io/images/cijrdavx/production/05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png?rect=0,0,800,468&w=2048&q=75&fit=clip&auto=format'
                },
                slug: {
                  current: post.slug.current
                },
                title: post.title,
                _createdAt: post._createdAt,
                publishedAt: post.publishedAt
              }
            })()}
            aspect={Aspect.aspect_square}
          />
        ))}
      </div>
    </main>
  )
}
