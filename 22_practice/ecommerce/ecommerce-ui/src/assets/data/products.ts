const DUMMY_PRODUCTS = [
	{
		id: "c71bcc9a-def0-4ea4-a66e-4167e12d3a86",
		name: "Sugat",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 56,
		brand: "Betsin Maalat",
		image: "/salt-image-1.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "79595a92-ccfd-4270-aa55-8feb4c2f5f9d",
		name: "Kulangot",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 67,
		brand: "Salt",
		image: "/salt-image-2.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "8521c458-17bf-4325-a016-c98e7d1a4aa6",
		name: "Tiktilaok Manok",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 78,
		brand: "Sexbomb",
		image: "/salt-image-3.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "5c0a9a00-419a-4d6e-988d-64233a47f602",
		name: "Very Nice",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 79,
		brand: "Salt maalat",
		image: "/salt-image-4.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "408df843-c4d0-4afc-b2bc-68ffd48ed97f",
		name: "Quake Overload",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 80,
		brand: "Yezyow",
		image: "/salt-image-5.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "39b376f5-5806-4eb3-bbd5-b3d259d31f6e",
		name: "Kutu",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 129,
		brand: "Sexbomb",
		image: "/salt-image-7.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "5a3e1cb0-ab15-4fb7-908c-2887db37b492",
		name: "Tuluk",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 142,
		brand: "Black Kibal",
		image: "/salt-image-10.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "f013e2ec-8ef5-436e-a1ca-197a55aa5f06",
		name: "Takla Green",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 150,
		brand: "Sexbomb",
		image: "/salt-image-1.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "774cce44-9182-4f50-9c5a-542fe629c00b",
		name: "Balakubak",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 170,
		brand: "Betsin Maalat",
		image: "/salt-image-2.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "3f8a7656-33a9-4445-9716-10d4e159f052",
		name: "Pitaklan",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 174,
		brand: "Black Kibal",
		image: "/salt-image-3.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "6f345dd6-b83f-40b9-9798-844dfa96122b",
		name: "Burnikk",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 240,
		brand: "Sexbomb",
		image: "/salt-image-4.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "9a611a61-10b5-4987-9825-b13719b99777",
		name: "Sipon Malapot",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 250,
		brand: "salt",
		image: "/salt-image-5.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "3172c45d-dcb2-4ed3-883a-c646be9ac092",
		name: "Buldit",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 250,
		brand: "Salt Maalat",
		image: "/salt-image-7.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "d7e8d7ab-f8d1-4567-a516-a63482e72fb7",
		name: "Merry Christmas",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 259,
		brand: "Salt Maalat",
		image: "/salt-image-10.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "3e723121-b16d-4740-b93a-1a90771dc793",
		name: "Tilis Malaput",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 340,
		brand: "Betsin Maalat",
		image: "/salt-image-1.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "fe326780-c3be-42b7-8542-91e7d7313171",
		name: "Merry Christmas",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 365,
		brand: "Salt Maalat",
		image: "/salt-image-2.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "ba6f7568-d82b-4b72-9038-ef518257251f",
		name: "Tilapia",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 450,
		brand: "salt Maalat",
		image: "/salt-image-3.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	},
	{
		id: "65d98162-e4e6-47a1-bf2b-51cf8d69bba6",
		name: "Kibal Batal",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
		price: 674,
		brand: "Kibal Black",
		image: "/salt-image-4.png",
		sizes: [28, 36, 42],
		availableColors: [
			"#BDB76B",
			"#E0FFFF",
			"#00FF7F",
			"#DAA520",
			"#FFA500",
			"#000080",
			"#F8F8FF",
			"#006400",
			"#D3D3D3",
			"#6A5ACD"
		]
	}
];

export default DUMMY_PRODUCTS;
