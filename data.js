const ARTICLES = [
{
    id: 1,
    title: "مادة 1 – عنوان مختصر",
    text: "نص المادة 1 (Placeholder).",
    analysis: "تحليل مختصر للمادة 1 (Placeholder للتحليل).",
    related: [2]
},
{
    id: 2,
    title: "مادة 2 – عنوان مختصر",
    text: "نص المادة 2 (Placeholder).",
    analysis: "تحليل مختصر للمادة 2 (Placeholder للتحليل).",
    related: [1, 3]
},
{
    id: 3,
    title: "مادة 3 – عنوان مختصر",
    text: "نص المادة 3 (Placeholder).",
    analysis: "تحليل مختصر للمادة 3 (Placeholder للتحليل).",
    related: [2, 4]
},
{
    id: 4,
    title: "مادة 4 – عنوان مختصر",
    text: "نص المادة 4 (Placeholder).",
    analysis: "تحليل مختصر للمادة 4 (Placeholder للتحليل).",
    related: [3, 5]
},
{
    id: 5,
    title: "مادة 5 – عنوان مختصر",
    text: "نص المادة 5 (Placeholder).",
    analysis: "تحليل مختصر للمادة 5 (Placeholder للتحليل).",
    related: [4, 6]
},
{
    id: 6,
    title: "مادة 6 – عنوان مختصر",
    text: "نص المادة 6 (Placeholder).",
    analysis: "تحليل مختصر للمادة 6 (Placeholder للتحليل).",
    related: [5, 7]
},
{
    id: 7,
    title: "مادة 7 – عنوان مختصر",
    text: "نص المادة 7 (Placeholder).",
    analysis: "تحليل مختصر للمادة 7 (Placeholder للتحليل).",
    related: [6, 8]
},
{
    id: 8,
    title: "مادة 8 – عنوان مختصر",
    text: "نص المادة 8 (Placeholder).",
    analysis: "تحليل مختصر للمادة 8 (Placeholder للتحليل).",
    related: [7, 9]
},
{
    id: 9,
    title: "مادة 9 – عنوان مختصر",
    text: "نص المادة 9 (Placeholder).",
    analysis: "تحليل مختصر للمادة 9 (Placeholder للتحليل).",
    related: [8, 10]
},
{
    id: 10,
    title: "مادة 10 – عنوان مختصر",
    text: "نص المادة 10 (Placeholder).",
    analysis: "تحليل مختصر للمادة 10 (Placeholder للتحليل).",
    related: [9, 11]
},
{
    id: 11,
    title: "مادة 11 – عنوان مختصر",
    text: "نص المادة 11 (Placeholder).",
    analysis: "تحليل مختصر للمادة 11 (Placeholder للتحليل).",
    related: [10, 12]
},
{
    id: 12,
    title: "مادة 12 – عنوان مختصر",
    text: "نص المادة 12 (Placeholder).",
    analysis: "تحليل مختصر للمادة 12 (Placeholder للتحليل).",
    related: [11, 13]
},
{
    id: 13,
    title: "مادة 13 – عنوان مختصر",
    text: "نص المادة 13 (Placeholder).",
    analysis: "تحليل مختصر للمادة 13 (Placeholder للتحليل).",
    related: [12, 14]
},
{
    id: 14,
    title: "مادة 14 – عنوان مختصر",
    text: "نص المادة 14 (Placeholder).",
    analysis: "تحليل مختصر للمادة 14 (Placeholder للتحليل).",
    related: [13, 15]
},
{
    id: 15,
    title: "مادة 15 – عنوان مختصر",
    text: "نص المادة 15 (Placeholder).",
    analysis: "تحليل مختصر للمادة 15 (Placeholder للتحليل).",
    related: [14, 16]
},
{
    id: 16,
    title: "مادة 16 – عنوان مختصر",
    text: "نص المادة 16 (Placeholder).",
    analysis: "تحليل مختصر للمادة 16 (Placeholder للتحليل).",
    related: [15, 17]
},
{
    id: 17,
    title: "مادة 17 – عنوان مختصر",
    text: "نص المادة 17 (Placeholder).",
    analysis: "تحليل مختصر للمادة 17 (Placeholder للتحليل).",
    related: [16, 18]
},
{
    id: 18,
    title: "مادة 18 – عنوان مختصر",
    text: "نص المادة 18 (Placeholder).",
    analysis: "تحليل مختصر للمادة 18 (Placeholder للتحليل).",
    related: [17, 19]
},
{
    id: 19,
    title: "مادة 19 – عنوان مختصر",
    text: "نص المادة 19 (Placeholder).",
    analysis: "تحليل مختصر للمادة 19 (Placeholder للتحليل).",
    related: [18, 20]
},
{
    id: 20,
    title: "مادة 20 – عنوان مختصر",
    text: "نص المادة 20 (Placeholder).",
    analysis: "تحليل مختصر للمادة 20 (Placeholder للتحليل).",
    related: [19, 21]
},
{
    id: 21,
    title: "مادة 21 – عنوان مختصر",
    text: "نص المادة 21 (Placeholder).",
    analysis: "تحليل مختصر للمادة 21 (Placeholder للتحليل).",
    related: [20, 22]
},
{
    id: 22,
    title: "مادة 22 – عنوان مختصر",
    text: "نص المادة 22 (Placeholder).",
    analysis: "تحليل مختصر للمادة 22 (Placeholder للتحليل).",
    related: [21, 23]
},
{
    id: 23,
    title: "مادة 23 – عنوان مختصر",
    text: "نص المادة 23 (Placeholder).",
    analysis: "تحليل مختصر للمادة 23 (Placeholder للتحليل).",
    related: [22, 24]
},
{
    id: 24,
    title: "مادة 24 – عنوان مختصر",
    text: "نص المادة 24 (Placeholder).",
    analysis: "تحليل مختصر للمادة 24 (Placeholder للتحليل).",
    related: [23, 25]
},
{
    id: 25,
    title: "مادة 25 – عنوان مختصر",
    text: "نص المادة 25 (Placeholder).",
    analysis: "تحليل مختصر للمادة 25 (Placeholder للتحليل).",
    related: [24, 26]
},
{
    id: 26,
    title: "مادة 26 – عنوان مختصر",
    text: "نص المادة 26 (Placeholder).",
    analysis: "تحليل مختصر للمادة 26 (Placeholder للتحليل).",
    related: [25, 27]
},
{
    id: 27,
    title: "مادة 27 – عنوان مختصر",
    text: "نص المادة 27 (Placeholder).",
    analysis: "تحليل مختصر للمادة 27 (Placeholder للتحليل).",
    related: [26, 28]
},
{
    id: 28,
    title: "مادة 28 – عنوان مختصر",
    text: "نص المادة 28 (Placeholder).",
    analysis: "تحليل مختصر للمادة 28 (Placeholder للتحليل).",
    related: [27, 29]
},
{
    id: 29,
    title: "مادة 29 – عنوان مختصر",
    text: "نص المادة 29 (Placeholder).",
    analysis: "تحليل مختصر للمادة 29 (Placeholder للتحليل).",
    related: [28, 30]
},
{
    id: 30,
    title: "مادة 30 – عنوان مختصر",
    text: "نص المادة 30 (Placeholder).",
    analysis: "تحليل مختصر للمادة 30 (Placeholder للتحليل).",
    related: [29, 31]
},
{
    id: 31,
    title: "مادة 31 – عنوان مختصر",
    text: "نص المادة 31 (Placeholder).",
    analysis: "تحليل مختصر للمادة 31 (Placeholder للتحليل).",
    related: [30, 32]
},
{
    id: 32,
    title: "مادة 32 – عنوان مختصر",
    text: "نص المادة 32 (Placeholder).",
    analysis: "تحليل مختصر للمادة 32 (Placeholder للتحليل).",
    related: [31, 33]
},
{
    id: 33,
    title: "مادة 33 – عنوان مختصر",
    text: "نص المادة 33 (Placeholder).",
    analysis: "تحليل مختصر للمادة 33 (Placeholder للتحليل).",
    related: [32, 34]
},
{
    id: 34,
    title: "مادة 34 – عنوان مختصر",
    text: "نص المادة 34 (Placeholder).",
    analysis: "تحليل مختصر للمادة 34 (Placeholder للتحليل).",
    related: [33, 35]
},
{
    id: 35,
    title: "مادة 35 – عنوان مختصر",
    text: "نص المادة 35 (Placeholder).",
    analysis: "تحليل مختصر للمادة 35 (Placeholder للتحليل).",
    related: [34, 36]
},
{
    id: 36,
    title: "مادة 36 – عنوان مختصر",
    text: "نص المادة 36 (Placeholder).",
    analysis: "تحليل مختصر للمادة 36 (Placeholder للتحليل).",
    related: [35, 37]
},
{
    id: 37,
    title: "مادة 37 – عنوان مختصر",
    text: "نص المادة 37 (Placeholder).",
    analysis: "تحليل مختصر للمادة 37 (Placeholder للتحليل).",
    related: [36, 38]
},
{
    id: 38,
    title: "مادة 38 – عنوان مختصر",
    text: "نص المادة 38 (Placeholder).",
    analysis: "تحليل مختصر للمادة 38 (Placeholder للتحليل).",
    related: [37, 39]
},
{
    id: 39,
    title: "مادة 39 – عنوان مختصر",
    text: "نص المادة 39 (Placeholder).",
    analysis: "تحليل مختصر للمادة 39 (Placeholder للتحليل).",
    related: [38, 40]
},
{
    id: 40,
    title: "مادة 40 – عنوان مختصر",
    text: "نص المادة 40 (Placeholder).",
    analysis: "تحليل مختصر للمادة 40 (Placeholder للتحليل).",
    related: [39, 41]
},
{
    id: 41,
    title: "مادة 41 – عنوان مختصر",
    text: "نص المادة 41 (Placeholder).",
    analysis: "تحليل مختصر للمادة 41 (Placeholder للتحليل).",
    related: [40, 42]
},
{
    id: 42,
    title: "مادة 42 – عنوان مختصر",
    text: "نص المادة 42 (Placeholder).",
    analysis: "تحليل مختصر للمادة 42 (Placeholder للتحليل).",
    related: [41, 43]
},
{
    id: 43,
    title: "مادة 43 – عنوان مختصر",
    text: "نص المادة 43 (Placeholder).",
    analysis: "تحليل مختصر للمادة 43 (Placeholder للتحليل).",
    related: [42, 44]
},
{
    id: 44,
    title: "مادة 44 – عنوان مختصر",
    text: "نص المادة 44 (Placeholder).",
    analysis: "تحليل مختصر للمادة 44 (Placeholder للتحليل).",
    related: [43, 45]
},
{
    id: 45,
    title: "مادة 45 – عنوان مختصر",
    text: "نص المادة 45 (Placeholder).",
    analysis: "تحليل مختصر للمادة 45 (Placeholder للتحليل).",
    related: [44, 46]
},
{
    id: 46,
    title: "مادة 46 – عنوان مختصر",
    text: "نص المادة 46 (Placeholder).",
    analysis: "تحليل مختصر للمادة 46 (Placeholder للتحليل).",
    related: [45, 47]
},
{
    id: 47,
    title: "مادة 47 – عنوان مختصر",
    text: "نص المادة 47 (Placeholder).",
    analysis: "تحليل مختصر للمادة 47 (Placeholder للتحليل).",
    related: [46, 48]
},
{
    id: 48,
    title: "مادة 48 – عنوان مختصر",
    text: "نص المادة 48 (Placeholder).",
    analysis: "تحليل مختصر للمادة 48 (Placeholder للتحليل).",
    related: [47, 49]
},
{
    id: 49,
    title: "مادة 49 – عنوان مختصر",
    text: "نص المادة 49 (Placeholder).",
    analysis: "تحليل مختصر للمادة 49 (Placeholder للتحليل).",
    related: [48, 50]
},
{
    id: 50,
    title: "مادة 50 – عنوان مختصر",
    text: "نص المادة 50 (Placeholder).",
    analysis: "تحليل مختصر للمادة 50 (Placeholder للتحليل).",
    related: [49, 51]
},
{
    id: 51,
    title: "مادة 51 – عنوان مختصر",
    text: "نص المادة 51 (Placeholder).",
    analysis: "تحليل مختصر للمادة 51 (Placeholder للتحليل).",
    related: [50, 52]
},
{
    id: 52,
    title: "مادة 52 – عنوان مختصر",
    text: "نص المادة 52 (Placeholder).",
    analysis: "تحليل مختصر للمادة 52 (Placeholder للتحليل).",
    related: [51, 53]
},
{
    id: 53,
    title: "مادة 53 – عنوان مختصر",
    text: "نص المادة 53 (Placeholder).",
    analysis: "تحليل مختصر للمادة 53 (Placeholder للتحليل).",
    related: [52, 54]
},
{
    id: 54,
    title: "مادة 54 – عنوان مختصر",
    text: "نص المادة 54 (Placeholder).",
    analysis: "تحليل مختصر للمادة 54 (Placeholder للتحليل).",
    related: [53, 55]
},
{
    id: 55,
    title: "مادة 55 – عنوان مختصر",
    text: "نص المادة 55 (Placeholder).",
    analysis: "تحليل مختصر للمادة 55 (Placeholder للتحليل).",
    related: [54, 56]
},
{
    id: 56,
    title: "مادة 56 – عنوان مختصر",
    text: "نص المادة 56 (Placeholder).",
    analysis: "تحليل مختصر للمادة 56 (Placeholder للتحليل).",
    related: [55, 57]
},
{
    id: 57,
    title: "مادة 57 – عنوان مختصر",
    text: "نص المادة 57 (Placeholder).",
    analysis: "تحليل مختصر للمادة 57 (Placeholder للتحليل).",
    related: [56, 58]
},
{
    id: 58,
    title: "مادة 58 – عنوان مختصر",
    text: "نص المادة 58 (Placeholder).",
    analysis: "تحليل مختصر للمادة 58 (Placeholder للتحليل).",
    related: [57, 59]
},
{
    id: 59,
    title: "مادة 59 – عنوان مختصر",
    text: "نص المادة 59 (Placeholder).",
    analysis: "تحليل مختصر للمادة 59 (Placeholder للتحليل).",
    related: [58, 60]
},
{
    id: 60,
    title: "مادة 60 – عنوان مختصر",
    text: "نص المادة 60 (Placeholder).",
    analysis: "تحليل مختصر للمادة 60 (Placeholder للتحليل).",
    related: [59, 61]
},
{
    id: 61,
    title: "مادة 61 – عنوان مختصر",
    text: "نص المادة 61 (Placeholder).",
    analysis: "تحليل مختصر للمادة 61 (Placeholder للتحليل).",
    related: [60, 62]
},
{
    id: 62,
    title: "مادة 62 – عنوان مختصر",
    text: "نص المادة 62 (Placeholder).",
    analysis: "تحليل مختصر للمادة 62 (Placeholder للتحليل).",
    related: [61, 63]
},
{
    id: 63,
    title: "مادة 63 – عنوان مختصر",
    text: "نص المادة 63 (Placeholder).",
    analysis: "تحليل مختصر للمادة 63 (Placeholder للتحليل).",
    related: [62, 64]
},
{
    id: 64,
    title: "مادة 64 – عنوان مختصر",
    text: "نص المادة 64 (Placeholder).",
    analysis: "تحليل مختصر للمادة 64 (Placeholder للتحليل).",
    related: [63, 65]
},
{
    id: 65,
    title: "مادة 65 – عنوان مختصر",
    text: "نص المادة 65 (Placeholder).",
    analysis: "تحليل مختصر للمادة 65 (Placeholder للتحليل).",
    related: [64, 66]
},
{
    id: 66,
    title: "مادة 66 – عنوان مختصر",
    text: "نص المادة 66 (Placeholder).",
    analysis: "تحليل مختصر للمادة 66 (Placeholder للتحليل).",
    related: [65, 67]
},
{
    id: 67,
    title: "مادة 67 – عنوان مختصر",
    text: "نص المادة 67 (Placeholder).",
    analysis: "تحليل مختصر للمادة 67 (Placeholder للتحليل).",
    related: [66, 68]
},
{
    id: 68,
    title: "مادة 68 – عنوان مختصر",
    text: "نص المادة 68 (Placeholder).",
    analysis: "تحليل مختصر للمادة 68 (Placeholder للتحليل).",
    related: [67, 69]
},
{
    id: 69,
    title: "مادة 69 – عنوان مختصر",
    text: "نص المادة 69 (Placeholder).",
    analysis: "تحليل مختصر للمادة 69 (Placeholder للتحليل).",
    related: [68, 70]
},
{
    id: 70,
    title: "مادة 70 – عنوان مختصر",
    text: "نص المادة 70 (Placeholder).",
    analysis: "تحليل مختصر للمادة 70 (Placeholder للتحليل).",
    related: [69, 71]
},
{
    id: 71,
    title: "مادة 71 – عنوان مختصر",
    text: "نص المادة 71 (Placeholder).",
    analysis: "تحليل مختصر للمادة 71 (Placeholder للتحليل).",
    related: [70, 72]
},
{
    id: 72,
    title: "مادة 72 – عنوان مختصر",
    text: "نص المادة 72 (Placeholder).",
    analysis: "تحليل مختصر للمادة 72 (Placeholder للتحليل).",
    related: [71, 73]
},
{
    id: 73,
    title: "مادة 73 – عنوان مختصر",
    text: "نص المادة 73 (Placeholder).",
    analysis: "تحليل مختصر للمادة 73 (Placeholder للتحليل).",
    related: [72, 74]
},
{
    id: 74,
    title: "مادة 74 – عنوان مختصر",
    text: "نص المادة 74 (Placeholder).",
    analysis: "تحليل مختصر للمادة 74 (Placeholder للتحليل).",
    related: [73, 75]
},
{
    id: 75,
    title: "مادة 75 – عنوان مختصر",
    text: "نص المادة 75 (Placeholder).",
    analysis: "تحليل مختصر للمادة 75 (Placeholder للتحليل).",
    related: [74, 76]
},
{
    id: 76,
    title: "مادة 76 – عنوان مختصر",
    text: "نص المادة 76 (Placeholder).",
    analysis: "تحليل مختصر للمادة 76 (Placeholder للتحليل).",
    related: [75, 77]
},
{
    id: 77,
    title: "مادة 77 – عنوان مختصر",
    text: "نص المادة 77 (Placeholder).",
    analysis: "تحليل مختصر للمادة 77 (Placeholder للتحليل).",
    related: [76, 78]
},
{
    id: 78,
    title: "مادة 78 – عنوان مختصر",
    text: "نص المادة 78 (Placeholder).",
    analysis: "تحليل مختصر للمادة 78 (Placeholder للتحليل).",
    related: [77, 79]
},
{
    id: 79,
    title: "مادة 79 – عنوان مختصر",
    text: "نص المادة 79 (Placeholder).",
    analysis: "تحليل مختصر للمادة 79 (Placeholder للتحليل).",
    related: [78, 80]
},
{
    id: 80,
    title: "مادة 80 – عنوان مختصر",
    text: "نص المادة 80 (Placeholder).",
    analysis: "تحليل مختصر للمادة 80 (Placeholder للتحليل).",
    related: [79, 81]
},
{
    id: 81,
    title: "مادة 81 – عنوان مختصر",
    text: "نص المادة 81 (Placeholder).",
    analysis: "تحليل مختصر للمادة 81 (Placeholder للتحليل).",
    related: [80, 82]
},
{
    id: 82,
    title: "مادة 82 – عنوان مختصر",
    text: "نص المادة 82 (Placeholder).",
    analysis: "تحليل مختصر للمادة 82 (Placeholder للتحليل).",
    related: [81, 83]
},
{
    id: 83,
    title: "مادة 83 – عنوان مختصر",
    text: "نص المادة 83 (Placeholder).",
    analysis: "تحليل مختصر للمادة 83 (Placeholder للتحليل).",
    related: [82, 84]
},
{
    id: 84,
    title: "مادة 84 – عنوان مختصر",
    text: "نص المادة 84 (Placeholder).",
    analysis: "تحليل مختصر للمادة 84 (Placeholder للتحليل).",
    related: [83, 85]
},
{
    id: 85,
    title: "مادة 85 – عنوان مختصر",
    text: "نص المادة 85 (Placeholder).",
    analysis: "تحليل مختصر للمادة 85 (Placeholder للتحليل).",
    related: [84, 86]
},
{
    id: 86,
    title: "مادة 86 – عنوان مختصر",
    text: "نص المادة 86 (Placeholder).",
    analysis: "تحليل مختصر للمادة 86 (Placeholder للتحليل).",
    related: [85, 87]
},
{
    id: 87,
    title: "مادة 87 – عنوان مختصر",
    text: "نص المادة 87 (Placeholder).",
    analysis: "تحليل مختصر للمادة 87 (Placeholder للتحليل).",
    related: [86, 88]
},
{
    id: 88,
    title: "مادة 88 – عنوان مختصر",
    text: "نص المادة 88 (Placeholder).",
    analysis: "تحليل مختصر للمادة 88 (Placeholder للتحليل).",
    related: [87, 89]
},
{
    id: 89,
    title: "مادة 89 – عنوان مختصر",
    text: "نص المادة 89 (Placeholder).",
    analysis: "تحليل مختصر للمادة 89 (Placeholder للتحليل).",
    related: [88, 90]
},
{
    id: 90,
    title: "مادة 90 – عنوان مختصر",
    text: "نص المادة 90 (Placeholder).",
    analysis: "تحليل مختصر للمادة 90 (Placeholder للتحليل).",
    related: [89, 91]
},
{
    id: 91,
    title: "مادة 91 – عنوان مختصر",
    text: "نص المادة 91 (Placeholder).",
    analysis: "تحليل مختصر للمادة 91 (Placeholder للتحليل).",
    related: [90, 92]
},
{
    id: 92,
    title: "مادة 92 – عنوان مختصر",
    text: "نص المادة 92 (Placeholder).",
    analysis: "تحليل مختصر للمادة 92 (Placeholder للتحليل).",
    related: [91, 93]
},
{
    id: 93,
    title: "مادة 93 – عنوان مختصر",
    text: "نص المادة 93 (Placeholder).",
    analysis: "تحليل مختصر للمادة 93 (Placeholder للتحليل).",
    related: [92, 94]
},
{
    id: 94,
    title: "مادة 94 – عنوان مختصر",
    text: "نص المادة 94 (Placeholder).",
    analysis: "تحليل مختصر للمادة 94 (Placeholder للتحليل).",
    related: [93, 95]
},
{
    id: 95,
    title: "مادة 95 – عنوان مختصر",
    text: "نص المادة 95 (Placeholder).",
    analysis: "تحليل مختصر للمادة 95 (Placeholder للتحليل).",
    related: [94, 96]
},
{
    id: 96,
    title: "مادة 96 – عنوان مختصر",
    text: "نص المادة 96 (Placeholder).",
    analysis: "تحليل مختصر للمادة 96 (Placeholder للتحليل).",
    related: [95, 97]
},
{
    id: 97,
    title: "مادة 97 – عنوان مختصر",
    text: "نص المادة 97 (Placeholder).",
    analysis: "تحليل مختصر للمادة 97 (Placeholder للتحليل).",
    related: [96, 98]
},
{
    id: 98,
    title: "مادة 98 – عنوان مختصر",
    text: "نص المادة 98 (Placeholder).",
    analysis: "تحليل مختصر للمادة 98 (Placeholder للتحليل).",
    related: [97, 99]
},
{
    id: 99,
    title: "مادة 99 – عنوان مختصر",
    text: "نص المادة 99 (Placeholder).",
    analysis: "تحليل مختصر للمادة 99 (Placeholder للتحليل).",
    related: [98, 100]
},
{
    id: 100,
    title: "مادة 100 – عنوان مختصر",
    text: "نص المادة 100 (Placeholder).",
    analysis: "تحليل مختصر للمادة 100 (Placeholder للتحليل).",
    related: [99, 101]
},
{
    id: 101,
    title: "مادة 101 – عنوان مختصر",
    text: "نص المادة 101 (Placeholder).",
    analysis: "تحليل مختصر للمادة 101 (Placeholder للتحليل).",
    related: [100, 102]
},
{
    id: 102,
    title: "مادة 102 – عنوان مختصر",
    text: "نص المادة 102 (Placeholder).",
    analysis: "تحليل مختصر للمادة 102 (Placeholder للتحليل).",
    related: [101, 103]
},
{
    id: 103,
    title: "مادة 103 – عنوان مختصر",
    text: "نص المادة 103 (Placeholder).",
    analysis: "تحليل مختصر للمادة 103 (Placeholder للتحليل).",
    related: [102, 104]
},
{
    id: 104,
    title: "مادة 104 – عنوان مختصر",
    text: "نص المادة 104 (Placeholder).",
    analysis: "تحليل مختصر للمادة 104 (Placeholder للتحليل).",
    related: [103, 105]
},
{
    id: 105,
    title: "مادة 105 – عنوان مختصر",
    text: "نص المادة 105 (Placeholder).",
    analysis: "تحليل مختصر للمادة 105 (Placeholder للتحليل).",
    related: [104, 106]
},
{
    id: 106,
    title: "مادة 106 – عنوان مختصر",
    text: "نص المادة 106 (Placeholder).",
    analysis: "تحليل مختصر للمادة 106 (Placeholder للتحليل).",
    related: [105, 107]
},
{
    id: 107,
    title: "مادة 107 – عنوان مختصر",
    text: "نص المادة 107 (Placeholder).",
    analysis: "تحليل مختصر للمادة 107 (Placeholder للتحليل).",
    related: [106, 108]
},
{
    id: 108,
    title: "مادة 108 – عنوان مختصر",
    text: "نص المادة 108 (Placeholder).",
    analysis: "تحليل مختصر للمادة 108 (Placeholder للتحليل).",
    related: [107, 109]
},
{
    id: 109,
    title: "مادة 109 – عنوان مختصر",
    text: "نص المادة 109 (Placeholder).",
    analysis: "تحليل مختصر للمادة 109 (Placeholder للتحليل).",
    related: [108, 110]
},
{
    id: 110,
    title: "مادة 110 – عنوان مختصر",
    text: "نص المادة 110 (Placeholder).",
    analysis: "تحليل مختصر للمادة 110 (Placeholder للتحليل).",
    related: [109, 111]
},
{
    id: 111,
    title: "مادة 111 – عنوان مختصر",
    text: "نص المادة 111 (Placeholder).",
    analysis: "تحليل مختصر للمادة 111 (Placeholder للتحليل).",
    related: [110, 112]
},
{
    id: 112,
    title: "مادة 112 – عنوان مختصر",
    text: "نص المادة 112 (Placeholder).",
    analysis: "تحليل مختصر للمادة 112 (Placeholder للتحليل).",
    related: [111, 113]
},
{
    id: 113,
    title: "مادة 113 – عنوان مختصر",
    text: "نص المادة 113 (Placeholder).",
    analysis: "تحليل مختصر للمادة 113 (Placeholder للتحليل).",
    related: [112, 114]
},
{
    id: 114,
    title: "مادة 114 – عنوان مختصر",
    text: "نص المادة 114 (Placeholder).",
    analysis: "تحليل مختصر للمادة 114 (Placeholder للتحليل).",
    related: [113, 115]
},
{
    id: 115,
    title: "مادة 115 – عنوان مختصر",
    text: "نص المادة 115 (Placeholder).",
    analysis: "تحليل مختصر للمادة 115 (Placeholder للتحليل).",
    related: [114, 116]
},
{
    id: 116,
    title: "مادة 116 – عنوان مختصر",
    text: "نص المادة 116 (Placeholder).",
    analysis: "تحليل مختصر للمادة 116 (Placeholder للتحليل).",
    related: [115, 117]
},
{
    id: 117,
    title: "مادة 117 – عنوان مختصر",
    text: "نص المادة 117 (Placeholder).",
    analysis: "تحليل مختصر للمادة 117 (Placeholder للتحليل).",
    related: [116, 118]
},
{
    id: 118,
    title: "مادة 118 – عنوان مختصر",
    text: "نص المادة 118 (Placeholder).",
    analysis: "تحليل مختصر للمادة 118 (Placeholder للتحليل).",
    related: [117, 119]
},
{
    id: 119,
    title: "مادة 119 – عنوان مختصر",
    text: "نص المادة 119 (Placeholder).",
    analysis: "تحليل مختصر للمادة 119 (Placeholder للتحليل).",
    related: [118, 120]
},
{
    id: 120,
    title: "مادة 120 – عنوان مختصر",
    text: "نص المادة 120 (Placeholder).",
    analysis: "تحليل مختصر للمادة 120 (Placeholder للتحليل).",
    related: [119, 121]
},
{
    id: 121,
    title: "مادة 121 – عنوان مختصر",
    text: "نص المادة 121 (Placeholder).",
    analysis: "تحليل مختصر للمادة 121 (Placeholder للتحليل).",
    related: [120, 122]
},
{
    id: 122,
    title: "مادة 122 – عنوان مختصر",
    text: "نص المادة 122 (Placeholder).",
    analysis: "تحليل مختصر للمادة 122 (Placeholder للتحليل).",
    related: [121, 123]
},
{
    id: 123,
    title: "مادة 123 – عنوان مختصر",
    text: "نص المادة 123 (Placeholder).",
    analysis: "تحليل مختصر للمادة 123 (Placeholder للتحليل).",
    related: [122, 124]
},
{
    id: 124,
    title: "مادة 124 – عنوان مختصر",
    text: "نص المادة 124 (Placeholder).",
    analysis: "تحليل مختصر للمادة 124 (Placeholder للتحليل).",
    related: [123, 125]
},
{
    id: 125,
    title: "مادة 125 – عنوان مختصر",
    text: "نص المادة 125 (Placeholder).",
    analysis: "تحليل مختصر للمادة 125 (Placeholder للتحليل).",
    related: [124, 126]
},
{
    id: 126,
    title: "مادة 126 – عنوان مختصر",
    text: "نص المادة 126 (Placeholder).",
    analysis: "تحليل مختصر للمادة 126 (Placeholder للتحليل).",
    related: [125, 127]
},
{
    id: 127,
    title: "مادة 127 – عنوان مختصر",
    text: "نص المادة 127 (Placeholder).",
    analysis: "تحليل مختصر للمادة 127 (Placeholder للتحليل).",
    related: [126, 128]
},
{
    id: 128,
    title: "مادة 128 – عنوان مختصر",
    text: "نص المادة 128 (Placeholder).",
    analysis: "تحليل مختصر للمادة 128 (Placeholder للتحليل).",
    related: [127, 129]
},
{
    id: 129,
    title: "مادة 129 – عنوان مختصر",
    text: "نص المادة 129 (Placeholder).",
    analysis: "تحليل مختصر للمادة 129 (Placeholder للتحليل).",
    related: [128, 130]
},
{
    id: 130,
    title: "مادة 130 – عنوان مختصر",
    text: "نص المادة 130 (Placeholder).",
    analysis: "تحليل مختصر للمادة 130 (Placeholder للتحليل).",
    related: [129, 131]
},
{
    id: 131,
    title: "مادة 131 – عنوان مختصر",
    text: "نص المادة 131 (Placeholder).",
    analysis: "تحليل مختصر للمادة 131 (Placeholder للتحليل).",
    related: [130, 132]
},
{
    id: 132,
    title: "مادة 132 – عنوان مختصر",
    text: "نص المادة 132 (Placeholder).",
    analysis: "تحليل مختصر للمادة 132 (Placeholder للتحليل).",
    related: [131, 133]
},
{
    id: 133,
    title: "مادة 133 – عنوان مختصر",
    text: "نص المادة 133 (Placeholder).",
    analysis: "تحليل مختصر للمادة 133 (Placeholder للتحليل).",
    related: [132, 134]
},
{
    id: 134,
    title: "مادة 134 – عنوان مختصر",
    text: "نص المادة 134 (Placeholder).",
    analysis: "تحليل مختصر للمادة 134 (Placeholder للتحليل).",
    related: [133, 135]
},
{
    id: 135,
    title: "مادة 135 – عنوان مختصر",
    text: "نص المادة 135 (Placeholder).",
    analysis: "تحليل مختصر للمادة 135 (Placeholder للتحليل).",
    related: [134, 136]
},
{
    id: 136,
    title: "مادة 136 – عنوان مختصر",
    text: "نص المادة 136 (Placeholder).",
    analysis: "تحليل مختصر للمادة 136 (Placeholder للتحليل).",
    related: [135, 137]
},
{
    id: 137,
    title: "مادة 137 – عنوان مختصر",
    text: "نص المادة 137 (Placeholder).",
    analysis: "تحليل مختصر للمادة 137 (Placeholder للتحليل).",
    related: [136, 138]
},
{
    id: 138,
    title: "مادة 138 – عنوان مختصر",
    text: "نص المادة 138 (Placeholder).",
    analysis: "تحليل مختصر للمادة 138 (Placeholder للتحليل).",
    related: [137, 139]
},
{
    id: 139,
    title: "مادة 139 – عنوان مختصر",
    text: "نص المادة 139 (Placeholder).",
    analysis: "تحليل مختصر للمادة 139 (Placeholder للتحليل).",
    related: [138, 140]
},
{
    id: 140,
    title: "مادة 140 – عنوان مختصر",
    text: "نص المادة 140 (Placeholder).",
    analysis: "تحليل مختصر للمادة 140 (Placeholder للتحليل).",
    related: [139, 141]
},
{
    id: 141,
    title: "مادة 141 – عنوان مختصر",
    text: "نص المادة 141 (Placeholder).",
    analysis: "تحليل مختصر للمادة 141 (Placeholder للتحليل).",
    related: [140, 142]
},
{
    id: 142,
    title: "مادة 142 – عنوان مختصر",
    text: "نص المادة 142 (Placeholder).",
    analysis: "تحليل مختصر للمادة 142 (Placeholder للتحليل).",
    related: [141, 143]
},
{
    id: 143,
    title: "مادة 143 – عنوان مختصر",
    text: "نص المادة 143 (Placeholder).",
    analysis: "تحليل مختصر للمادة 143 (Placeholder للتحليل).",
    related: [142, 144]
},
{
    id: 144,
    title: "مادة 144 – عنوان مختصر",
    text: "نص المادة 144 (Placeholder).",
    analysis: "تحليل مختصر للمادة 144 (Placeholder للتحليل).",
    related: [143, 145]
},
{
    id: 145,
    title: "مادة 145 – عنوان مختصر",
    text: "نص المادة 145 (Placeholder).",
    analysis: "تحليل مختصر للمادة 145 (Placeholder للتحليل).",
    related: [144, 146]
},
{
    id: 146,
    title: "مادة 146 – عنوان مختصر",
    text: "نص المادة 146 (Placeholder).",
    analysis: "تحليل مختصر للمادة 146 (Placeholder للتحليل).",
    related: [145, 147]
},
{
    id: 147,
    title: "مادة 147 – عنوان مختصر",
    text: "نص المادة 147 (Placeholder).",
    analysis: "تحليل مختصر للمادة 147 (Placeholder للتحليل).",
    related: [146, 148]
},
{
    id: 148,
    title: "مادة 148 – عنوان مختصر",
    text: "نص المادة 148 (Placeholder).",
    analysis: "تحليل مختصر للمادة 148 (Placeholder للتحليل).",
    related: [147, 149]
},
{
    id: 149,
    title: "مادة 149 – عنوان مختصر",
    text: "نص المادة 149 (Placeholder).",
    analysis: "تحليل مختصر للمادة 149 (Placeholder للتحليل).",
    related: [148, 150]
},
{
    id: 150,
    title: "مادة 150 – عنوان مختصر",
    text: "نص المادة 150 (Placeholder).",
    analysis: "تحليل مختصر للمادة 150 (Placeholder للتحليل).",
    related: [149, 151]
},
{
    id: 151,
    title: "مادة 151 – عنوان مختصر",
    text: "نص المادة 151 (Placeholder).",
    analysis: "تحليل مختصر للمادة 151 (Placeholder للتحليل).",
    related: [150, 152]
},
{
    id: 152,
    title: "مادة 152 – عنوان مختصر",
    text: "نص المادة 152 (Placeholder).",
    analysis: "تحليل مختصر للمادة 152 (Placeholder للتحليل).",
    related: [151, 153]
},
{
    id: 153,
    title: "مادة 153 – عنوان مختصر",
    text: "نص المادة 153 (Placeholder).",
    analysis: "تحليل مختصر للمادة 153 (Placeholder للتحليل).",
    related: [152, 154]
},
{
    id: 154,
    title: "مادة 154 – عنوان مختصر",
    text: "نص المادة 154 (Placeholder).",
    analysis: "تحليل مختصر للمادة 154 (Placeholder للتحليل).",
    related: [153, 155]
},
{
    id: 155,
    title: "مادة 155 – عنوان مختصر",
    text: "نص المادة 155 (Placeholder).",
    analysis: "تحليل مختصر للمادة 155 (Placeholder للتحليل).",
    related: [154, 156]
},
{
    id: 156,
    title: "مادة 156 – عنوان مختصر",
    text: "نص المادة 156 (Placeholder).",
    analysis: "تحليل مختصر للمادة 156 (Placeholder للتحليل).",
    related: [155, 157]
},
{
    id: 157,
    title: "مادة 157 – عنوان مختصر",
    text: "نص المادة 157 (Placeholder).",
    analysis: "تحليل مختصر للمادة 157 (Placeholder للتحليل).",
    related: [156, 158]
},
{
    id: 158,
    title: "مادة 158 – عنوان مختصر",
    text: "نص المادة 158 (Placeholder).",
    analysis: "تحليل مختصر للمادة 158 (Placeholder للتحليل).",
    related: [157, 159]
},
{
    id: 159,
    title: "مادة 159 – عنوان مختصر",
    text: "نص المادة 159 (Placeholder).",
    analysis: "تحليل مختصر للمادة 159 (Placeholder للتحليل).",
    related: [158, 160]
},
{
    id: 160,
    title: "مادة 160 – عنوان مختصر",
    text: "نص المادة 160 (Placeholder).",
    analysis: "تحليل مختصر للمادة 160 (Placeholder للتحليل).",
    related: [159, 161]
},
{
    id: 161,
    title: "مادة 161 – عنوان مختصر",
    text: "نص المادة 161 (Placeholder).",
    analysis: "تحليل مختصر للمادة 161 (Placeholder للتحليل).",
    related: [160, 162]
},
{
    id: 162,
    title: "مادة 162 – عنوان مختصر",
    text: "نص المادة 162 (Placeholder).",
    analysis: "تحليل مختصر للمادة 162 (Placeholder للتحليل).",
    related: [161, 163]
},
{
    id: 163,
    title: "مادة 163 – عنوان مختصر",
    text: "نص المادة 163 (Placeholder).",
    analysis: "تحليل مختصر للمادة 163 (Placeholder للتحليل).",
    related: [162, 164]
},
{
    id: 164,
    title: "مادة 164 – عنوان مختصر",
    text: "نص المادة 164 (Placeholder).",
    analysis: "تحليل مختصر للمادة 164 (Placeholder للتحليل).",
    related: [163, 165]
},
{
    id: 165,
    title: "مادة 165 – عنوان مختصر",
    text: "نص المادة 165 (Placeholder).",
    analysis: "تحليل مختصر للمادة 165 (Placeholder للتحليل).",
    related: [164, 166]
},
{
    id: 166,
    title: "مادة 166 – عنوان مختصر",
    text: "نص المادة 166 (Placeholder).",
    analysis: "تحليل مختصر للمادة 166 (Placeholder للتحليل).",
    related: [165, 167]
},
{
    id: 167,
    title: "مادة 167 – عنوان مختصر",
    text: "نص المادة 167 (Placeholder).",
    analysis: "تحليل مختصر للمادة 167 (Placeholder للتحليل).",
    related: [166, 168]
},
{
    id: 168,
    title: "مادة 168 – عنوان مختصر",
    text: "نص المادة 168 (Placeholder).",
    analysis: "تحليل مختصر للمادة 168 (Placeholder للتحليل).",
    related: [167, 169]
},
{
    id: 169,
    title: "مادة 169 – عنوان مختصر",
    text: "نص المادة 169 (Placeholder).",
    analysis: "تحليل مختصر للمادة 169 (Placeholder للتحليل).",
    related: [168, 170]
},
{
    id: 170,
    title: "مادة 170 – عنوان مختصر",
    text: "نص المادة 170 (Placeholder).",
    analysis: "تحليل مختصر للمادة 170 (Placeholder للتحليل).",
    related: [169, 171]
},
{
    id: 171,
    title: "مادة 171 – عنوان مختصر",
    text: "نص المادة 171 (Placeholder).",
    analysis: "تحليل مختصر للمادة 171 (Placeholder للتحليل).",
    related: [170, 172]
},
{
    id: 172,
    title: "مادة 172 – عنوان مختصر",
    text: "نص المادة 172 (Placeholder).",
    analysis: "تحليل مختصر للمادة 172 (Placeholder للتحليل).",
    related: [171, 173]
},
{
    id: 173,
    title: "مادة 173 – عنوان مختصر",
    text: "نص المادة 173 (Placeholder).",
    analysis: "تحليل مختصر للمادة 173 (Placeholder للتحليل).",
    related: [172, 174]
},
{
    id: 174,
    title: "مادة 174 – عنوان مختصر",
    text: "نص المادة 174 (Placeholder).",
    analysis: "تحليل مختصر للمادة 174 (Placeholder للتحليل).",
    related: [173, 175]
},
{
    id: 175,
    title: "مادة 175 – عنوان مختصر",
    text: "نص المادة 175 (Placeholder).",
    analysis: "تحليل مختصر للمادة 175 (Placeholder للتحليل).",
    related: [174, 176]
},
{
    id: 176,
    title: "مادة 176 – عنوان مختصر",
    text: "نص المادة 176 (Placeholder).",
    analysis: "تحليل مختصر للمادة 176 (Placeholder للتحليل).",
    related: [175, 177]
},
{
    id: 177,
    title: "مادة 177 – عنوان مختصر",
    text: "نص المادة 177 (Placeholder).",
    analysis: "تحليل مختصر للمادة 177 (Placeholder للتحليل).",
    related: [176, 178]
},
{
    id: 178,
    title: "مادة 178 – عنوان مختصر",
    text: "نص المادة 178 (Placeholder).",
    analysis: "تحليل مختصر للمادة 178 (Placeholder للتحليل).",
    related: [177, 179]
},
{
    id: 179,
    title: "مادة 179 – عنوان مختصر",
    text: "نص المادة 179 (Placeholder).",
    analysis: "تحليل مختصر للمادة 179 (Placeholder للتحليل).",
    related: [178, 180]
},
{
    id: 180,
    title: "مادة 180 – عنوان مختصر",
    text: "نص المادة 180 (Placeholder).",
    analysis: "تحليل مختصر للمادة 180 (Placeholder للتحليل).",
    related: [179, 181]
},
{
    id: 181,
    title: "مادة 181 – عنوان مختصر",
    text: "نص المادة 181 (Placeholder).",
    analysis: "تحليل مختصر للمادة 181 (Placeholder للتحليل).",
    related: [180, 182]
},
{
    id: 182,
    title: "مادة 182 – عنوان مختصر",
    text: "نص المادة 182 (Placeholder).",
    analysis: "تحليل مختصر للمادة 182 (Placeholder للتحليل).",
    related: [181, 183]
},
{
    id: 183,
    title: "مادة 183 – عنوان مختصر",
    text: "نص المادة 183 (Placeholder).",
    analysis: "تحليل مختصر للمادة 183 (Placeholder للتحليل).",
    related: [182, 184]
},
{
    id: 184,
    title: "مادة 184 – عنوان مختصر",
    text: "نص المادة 184 (Placeholder).",
    analysis: "تحليل مختصر للمادة 184 (Placeholder للتحليل).",
    related: [183, 185]
},
{
    id: 185,
    title: "مادة 185 – عنوان مختصر",
    text: "نص المادة 185 (Placeholder).",
    analysis: "تحليل مختصر للمادة 185 (Placeholder للتحليل).",
    related: [184, 186]
},
{
    id: 186,
    title: "مادة 186 – عنوان مختصر",
    text: "نص المادة 186 (Placeholder).",
    analysis: "تحليل مختصر للمادة 186 (Placeholder للتحليل).",
    related: [185, 187]
},
{
    id: 187,
    title: "مادة 187 – عنوان مختصر",
    text: "نص المادة 187 (Placeholder).",
    analysis: "تحليل مختصر للمادة 187 (Placeholder للتحليل).",
    related: [186, 188]
},
{
    id: 188,
    title: "مادة 188 – عنوان مختصر",
    text: "نص المادة 188 (Placeholder).",
    analysis: "تحليل مختصر للمادة 188 (Placeholder للتحليل).",
    related: [187, 189]
},
{
    id: 189,
    title: "مادة 189 – عنوان مختصر",
    text: "نص المادة 189 (Placeholder).",
    analysis: "تحليل مختصر للمادة 189 (Placeholder للتحليل).",
    related: [188, 190]
},
{
    id: 190,
    title: "مادة 190 – عنوان مختصر",
    text: "نص المادة 190 (Placeholder).",
    analysis: "تحليل مختصر للمادة 190 (Placeholder للتحليل).",
    related: [189, 191]
},
{
    id: 191,
    title: "مادة 191 – عنوان مختصر",
    text: "نص المادة 191 (Placeholder).",
    analysis: "تحليل مختصر للمادة 191 (Placeholder للتحليل).",
    related: [190, 192]
},
{
    id: 192,
    title: "مادة 192 – عنوان مختصر",
    text: "نص المادة 192 (Placeholder).",
    analysis: "تحليل مختصر للمادة 192 (Placeholder للتحليل).",
    related: [191, 193]
},
{
    id: 193,
    title: "مادة 193 – عنوان مختصر",
    text: "نص المادة 193 (Placeholder).",
    analysis: "تحليل مختصر للمادة 193 (Placeholder للتحليل).",
    related: [192, 194]
},
{
    id: 194,
    title: "مادة 194 – عنوان مختصر",
    text: "نص المادة 194 (Placeholder).",
    analysis: "تحليل مختصر للمادة 194 (Placeholder للتحليل).",
    related: [193, 195]
},
{
    id: 195,
    title: "مادة 195 – عنوان مختصر",
    text: "نص المادة 195 (Placeholder).",
    analysis: "تحليل مختصر للمادة 195 (Placeholder للتحليل).",
    related: [194, 196]
},
{
    id: 196,
    title: "مادة 196 – عنوان مختصر",
    text: "نص المادة 196 (Placeholder).",
    analysis: "تحليل مختصر للمادة 196 (Placeholder للتحليل).",
    related: [195, 197]
},
{
    id: 197,
    title: "مادة 197 – عنوان مختصر",
    text: "نص المادة 197 (Placeholder).",
    analysis: "تحليل مختصر للمادة 197 (Placeholder للتحليل).",
    related: [196, 198]
},
{
    id: 198,
    title: "مادة 198 – عنوان مختصر",
    text: "نص المادة 198 (Placeholder).",
    analysis: "تحليل مختصر للمادة 198 (Placeholder للتحليل).",
    related: [197, 199]
},
{
    id: 199,
    title: "مادة 199 – عنوان مختصر",
    text: "نص المادة 199 (Placeholder).",
    analysis: "تحليل مختصر للمادة 199 (Placeholder للتحليل).",
    related: [198, 200]
},
{
    id: 200,
    title: "مادة 200 – عنوان مختصر",
    text: "نص المادة 200 (Placeholder).",
    analysis: "تحليل مختصر للمادة 200 (Placeholder للتحليل).",
    related: [199]
}
];