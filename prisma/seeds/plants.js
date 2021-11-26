const plants = [
  {
    species: "Aloe vera",
    nickname: "Empress of healing plants",
    h2oFrequency: "Once every 2-3 weeks",
    details:
      "Aloe (Aloe spp.), an easy-care succulent, has distinctive elongated leaves that fan out in a vase shape from a central base. Try smaller varieties such as Aloe vera on a sunny kitchen window. Aloes work nicely in dish gardens and in rooms with Southwestern decor. Keep the spiky leaves away from high-traffic areas. Bright light; 65 - 75°F; moderately dry soil",
  },
  {
    species: "Anthurium andraeanum",
    nickname: "Anthurium, Flamingo Flower",
    h2oFrequency: "Once a week",
    details:
      "Showy flowers give bright color for eight weeks or more each year to anthurium (Anthurium andraeanum, also known as flamingo flower). Flowers typically are red, but you can find hybrids in shades of pink, lavender, white and even green. Anthurium flower blossoms make superb cut flowers because they last a long time. Note that the pretty, heart-shape leaves contain toxic sap, so make sure pets and children do not ingest them. Medium to bright light with no direct sun; 65 - 80°F; evenly moist soil (barely moist in fall and winter)",
  },
  {
    species: "Asparagus densiflorus",
    nickname: "Asparagus Fern",
    h2oFrequency: "Mist daily",
    details:
      "Delicate needlelike foliage drapes from this subtropical relative of asparagus, which is not a true fern. Stems of asparagus fern (Asparagus densiflorus) shoot upward and outward, making it a good hanging basket plant. Small white flowers hidden among needles turn into bright red berries. Keep the poisonous berries away from children and pets. Medium to bright light; 60 - 75°F; evenly moist soil",
  },
  {
    species: "Spathiphyllum wallisii",
    nickname: "Peace Lily",
    h2oFrequency: "Once a week",
    details:
      "The easy-care peace lily (Spathiphyllum wallisii) tolerates low humidity and low light. Its glossy, lance-shape leaves tip arching stems that surround the central flower spikes. The spoon-shape flowers normally appear in summer, but many cultivars bloom intermittently throughout the year. The dark leaves look attractive in a plain pot with a glossy finish. Low to bright light; 60 - 85°F; evenly moist soil",
  },
  {
    species: "Peperomia obtusifolia",
    nickname: "Baby Rubberplant",
    h2oFrequency: "Once or twice a week",
    details:
      "Peperomia's most interesting feature is its leaves, which vary in shape (heart shape to narrow), texture (waxy to wafflelike) and color (green, reddish or silvery gray). Plants occasionally produce slender flowery spikes that resemble rat's tails. Use on tabletops and as a companion in dish gardens and mixed baskets. The plant tolerates the low light of a north windowsill and stays small enough to fit on a desk or to be used in a terrarium. Low to medium light; 60 - 75°F; moderately dry soil",
  },
  {
    species: "Sansevieria spp.",
    nickname: "Snake Plant",
    h2oFrequency: "Every 2-3 days",
    details:
      "This carefree, tough succulent grows almost anywhere. Snake plant (Sansevieria spp.) tolerates neglect but responds nicely to good care. Leathery, sword-shape leaves grow edged with yellow or white. Snake plant is great for beginners, but experienced houseplant growers also love it for its dramatic upright form. When grown in bright light, it sends up a tall stalk of greenish fragrant flowers. The dwarf rosette varieties make nice desktop or tabletop plants. Low to bright light; 60 - 85° moderately dry soil",
  },
  {
    species: "Aspidistra elatior",
    nickname: "Cast-iron Plant",
    h2oFrequency: "Once a week",
    details:
      "Slow-growing cast-iron plant (Aspidistra elatior) lives up to its name. It's almost indestructible, withstanding neglect, low light, low humidity and a wide range of temperatures—perfect for a dark corner. Start with large plants since plants grow slowly. Low light; 45 - 85°F; evenly moist soil (barely moist in fall and winter)",
  },
  {
    species: "Schlumbergera x buckleyi",
    nickname: "Christmas Cactus",
    h2oFrequency: "Every 2-3 weeks",
    details:
      "One of many types of easy-care cactus, Christmas cactus (Schlumbergera x buckleyi) offers a graceful arching appearance, with long segmented stems and whorls of satiny flowers in lilac, deep rose, salmon, red-orange or white. Plants usually bloom mid- to late December. After blooming is finished, prune by pinching or using a sharp knife to cut off several sections. This encourages the plant to branch, creating a fuller plant with more blossoms. Low light; 45 - 85°F; evenly moist soil (barely moist in fall and winter)",
  },
  {
    species: "Dieffenbachia spp.",
    nickname: "Dumb Cane",
    h2oFrequency: "Once or twice a week",
    details:
      "Arching pointed leaves up to 12 inches long, usually marbled with white or cream, grow out of a canelike stem. The large leaves of dieffenbachia (Dieffenbachia spp.) provide a tropical architectural accent; the plant also blends well into a mixed grouping of foliage. One of dieffenbachia's common names, dumb cane, comes from the toxic sap in the leaves and stems that causes tongue numbness and swelling when chewed by humans or pets. Low to medium light; 65 - 80°F; evenly moist soil",
  },
  {
    species: "Aglaonema commutatum",
    nickname: "Chinese Evergreen",
    h2oFrequency: "Once every two weeks",
    details:
      "An excellent foliage plant for low to medium light, slow-growing Chinese evergreen (Aglaonema commutatum) can live for 10 years or more. Its standout feature: arching, lance-shape leaves, which are usually variegated with silver, gray or shades of green. Put a small plant on a living room table, or group larger ones with other low-light plants. Low to medium light; 60 - 75°F; evenly moist soil",
  },
  {
    species: "Dracaena spp.",
    nickname: "Dragon Plant",
    h2oFrequency: "Once every two weeks",
    details:
      "A large group of popular foliage plants, Dracaena (Dracaena spp.) display long, straplike leaves variegated with white, cream or red. Use young plants on tabletops. Larger plants require floor space, where they make striking specimens or work well in foliage groupings. Maintain plants at less than 6 feet by lopping off the top of the plant; within weeks a pair of new shoots will appear just below the cut. Medium to bright light; 65 - 75°F; barely moist soil",
  },
  {
    species: "Hedera helix",
    nickname: "English Ivy",
    h2oFrequency: "Every 5-7 days",
    details:
      "This versatile foliage plant's dainty demeanor makes it suitable for hanging baskets or pots. It's among the best houseplants for training on topiary forms or using as a groundcover beneath larger houseplants. Place English ivy (Hedera helix) on a mantel or shelf where the stems can hang down. The stems can grow quite long but are easily controlled with pruning. Medium to bright light; 55 - 70°F; average to high humidity; evenly moist soil",
  },
  {
    species: "Ficus spp.",
    nickname: "Ficus",
    h2oFrequency: "Every 2-3 days",
    details:
      "Glossy green leaves spread out from an upright woody plant that's available as a single-trunk tree or multistem shrub. Use durable ficus (Ficus spp.) as a tabletop or floor plant depending on its size. Place your ficus where it won't have to be moved all winter, because it doesn't like changes in environmental conditions. Medium to bright light; 65 - 75°F; barely moist soil",
  },
  {
    species: "Hoya carnosa",
    nickname: "Compacta",
    h2oFrequency: "When top soil is dry",
    details:
      "A fast-growing, trailing plant, hoya (Hoya spp.) shows off both smooth, shiny foliage and pink or white flowers with red centers. The waxy, sweetly scented flowers give hoya its alternate common name, wax plant. Place in hanging baskets or train it to grow upward along a trellis. Wrap long vines around a form to make a wreath. Small-leaf types can be trained into topiaries. Medium to bright light; 65 - 75°F; barely moist soil",
  },
  {
    species: "Chamaedorea elegans",
    nickname: "Parlor Palm",
    h2oFrequency: "Once a week",
    details:
      "The elegant, upright parlor palm (Chamaedorea elegans) has been a popular houseplant since Victorian times. Straplike green leaflets on feathery fronds grow 9 to 24 inches long. It's great for filling an empty corner and can get by on lower light than other palms. Young plants will do nicely in a terrarium while small. Medium to low light; 55 - 75°F; evenly moist soil",
  },
  {
    species: "Philodendron spp.",
    nickname: "Philodendron",
    h2oFrequency: "Once a week",
    details:
      "This durable foliage plant (Philodendron spp.) has long been the backbone of indoor gardening. The popular heart-leaf philodendron has slender stems with leaves up to 4 inches long. Philodendron is easy to grow, easy to propagate (just root from stem tip cuttings) and adapts well to almost any indoor setting. Try small specimens in dish gardens and mixed baskets. The plant's low light tolerance makes it a good choice for bookshelves and for draping over the sides of a large piece of furniture. Note that leaves are poisonous to pets and people if eaten in large amounts. Low to bright light; 60 - 80°F; moderately dry to evenly moist soil",
  },
  {
    species: "Chlorophytum comosum",
    nickname: "Spider Plant",
    h2oFrequency: "Once a week",
    details:
      "Spider plant (Chlorophytum comosum) looks striking in a hanging basket or on a pedestal, with its 'babies' overflowing the pot. Most plants are the cultivar 'Vittatum', which has a white stripe down the center of each leaf, though all-green plants are also available. Brown leaf tips, which are common with spider plants, are due to contaminated water, usuallyfrom fluoride, or to overfertilization, low humidity or dry soil conditions. Trim damaged leaves with scissors. Use rainwater or distilled water if your tap water is fluoridated. Medium to bright light; 65 - 75°F; evenly moist soil",
  },
  {
    species: "Tradescantia spp.",
    nickname: "Tradescantia",
    h2oFrequency: "Once a week",
    details:
      "The trailing stems of tradescantias (Tradescantia spp.) change direction slightly at each node, giving the plant a zigzag look. Grow in mixed baskets, hanging baskets or as a groundcover under larger houseplants. Varietaged and purple-leaf types need bright light to maintain colors. Older plants become leggy and unkempt; replace them with new plants from rooted cuttings. Medium to bright light; 55 - 75°F; moderately dry soil",
  },
  {
    species: "Plectranthus verticillatus",
    nickname: "Swedish Ivy",
    h2oFrequency: "Once a week",
    details:
      "Despite its name, Swedish ivy (Plectranthus verticillatus), the most common plant in the plectranthus family, is native to South African and Australia—not Sweden—and is more closely related to mint than ivy. Its cascading stems studded with glossy rounded, scalloped-edge leaves make it primarily a foliage plant. But if often blooms in late spring or early summer with tiny white or pale mauve blooms on short spikes. Its tidy drapes make Swedish ivy a great choice for hanging baskets. Medium light; 50 - 65°F; barely moist soil",
  },
  {
    species: "Syngonium podophyllum",
    nickname: "Arrowhead Vine",
    h2oFrequency: "Once a week",
    details:
      "This lush foliage plant retains its variegation -- dark green leaves marked with white along the veins -- even in low light. Use small plants in mixed baskets and with other foliage plants in tabletop gardens. Train vining types to an upright form on a moss pole. Arrowhead vine (Syngonium podophyllum) does well in artificial light. Low to medium light; 60 - 75°F; evenly moist soil",
  },
];

module.exports = plants;
