const maximumPositivNegativeCount = (nums) => {
  if (nums[0] >= 1) {
    return nums.length;
  }

  if (nums[nums.length - 1] <= -1) {
    return nums.length;
  }
  let start = 0;
  let end = nums.length - 1;
  let pos = 0;
  let neg = 0;

  //   while (start <= end) {
  //     let mid = Math.floor((start + end) / 2);
  //     if (nums[mid] >= 1) {
  //       pos = nums.length - mid;
  //       end = mid - 1;
  //     } else if (nums[mid] <= -1) {
  //       neg = mid + 1;
  //       start = mid + 1;
  //     } else {
  //       end = mid - 1;
  //     }
  //   }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] >= 1) {
      pos = nums.length - mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  start = 0;
  end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] <= -1) {
      neg = mid + 1;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return Math.max(pos, neg);
};

console.log(maximumPositivNegativeCount([-2, -1, -1, 1, 2, 3])); // pos = 3 neg = 3 O/p = 3
console.log(maximumPositivNegativeCount([-3, -2, -1, 0, 0, 1, 2])); // pos = 2 neg = 3 O/p = 3
console.log(maximumPositivNegativeCount([-3, -2, -1, 0, 0, 0, 1, 2])); // pos = 2 neg = 3 O/p = 3
console.log(maximumPositivNegativeCount([5, 20, 66, 1314])); // pos = 4 neg = 0 O/p = 3
console.log(
  maximumPositivNegativeCount([
    // O/p 532
    -1992, -1988, -1986, -1980, -1976, -1976, -1971, -1969, -1968, -1965, -1965,
    -1964, -1961, -1957, -1953, -1944, -1944, -1944, -1930, -1928, -1926, -1926,
    -1921, -1916, -1911, -1910, -1909, -1909, -1907, -1900, -1891, -1887, -1884,
    -1882, -1876, -1871, -1867, -1866, -1864, -1863, -1860, -1858, -1850, -1844,
    -1841, -1840, -1822, -1815, -1813, -1810, -1797, -1796, -1795, -1788, -1785,
    -1782, -1780, -1779, -1772, -1771, -1769, -1768, -1763, -1760, -1760, -1757,
    -1752, -1751, -1750, -1750, -1745, -1745, -1744, -1741, -1729, -1728, -1713,
    -1712, -1699, -1697, -1696, -1691, -1690, -1690, -1688, -1687, -1685, -1681,
    -1680, -1677, -1669, -1665, -1663, -1657, -1657, -1652, -1651, -1645, -1645,
    -1636, -1633, -1626, -1620, -1618, -1617, -1616, -1613, -1613, -1611, -1605,
    -1592, -1577, -1575, -1572, -1567, -1566, -1563, -1563, -1561, -1559, -1557,
    -1556, -1554, -1552, -1541, -1540, -1527, -1524, -1517, -1516, -1494, -1489,
    -1483, -1481, -1470, -1466, -1463, -1458, -1456, -1455, -1450, -1438, -1435,
    -1422, -1422, -1415, -1407, -1406, -1395, -1377, -1376, -1375, -1374, -1370,
    -1369, -1367, -1362, -1350, -1349, -1345, -1345, -1342, -1342, -1341, -1331,
    -1329, -1327, -1321, -1318, -1312, -1311, -1303, -1302, -1301, -1300, -1298,
    -1285, -1282, -1281, -1280, -1279, -1270, -1270, -1269, -1269, -1268, -1260,
    -1256, -1255, -1254, -1251, -1248, -1230, -1229, -1226, -1222, -1207, -1206,
    -1206, -1203, -1199, -1196, -1191, -1174, -1172, -1160, -1152, -1150, -1146,
    -1140, -1140, -1133, -1123, -1101, -1096, -1095, -1095, -1094, -1094, -1087,
    -1083, -1080, -1073, -1072, -1067, -1065, -1059, -1057, -1056, -1052, -1039,
    -1038, -1030, -1026, -1018, -1018, -1017, -1013, -1007, -1001, -990, -982,
    -976, -968, -939, -925, -923, -923, -921, -918, -912, -898, -897, -893,
    -893, -884, -884, -880, -880, -874, -871, -869, -865, -862, -859, -854,
    -851, -845, -845, -839, -836, -835, -833, -827, -824, -823, -813, -812,
    -812, -811, -805, -802, -802, -802, -802, -795, -792, -786, -782, -780,
    -775, -770, -769, -767, -761, -760, -760, -749, -748, -743, -740, -739,
    -735, -735, -729, -724, -690, -688, -687, -684, -683, -678, -676, -671,
    -664, -646, -640, -628, -626, -622, -615, -611, -611, -606, -598, -596,
    -593, -591, -580, -576, -572, -569, -563, -563, -560, -559, -555, -548,
    -544, -535, -533, -527, -525, -522, -521, -517, -512, -510, -508, -507,
    -504, -501, -499, -497, -497, -489, -486, -486, -483, -477, -473, -471,
    -466, -462, -462, -456, -450, -445, -444, -437, -434, -427, -415, -413,
    -411, -405, -405, -394, -377, -377, -376, -376, -368, -368, -368, -364,
    -348, -347, -347, -333, -333, -332, -332, -331, -327, -320, -318, -306,
    -303, -289, -287, -277, -277, -273, -272, -268, -262, -262, -256, -254,
    -249, -248, -248, -242, -237, -229, -220, -207, -205, -202, -200, -198,
    -196, -194, -192, -191, -190, -190, -188, -183, -183, -178, -171, -171,
    -169, -168, -168, -156, -154, -152, -144, -137, -137, -134, -129, -119,
    -104, -100, -97, -87, -80, -77, -73, -70, -69, -62, -57, -56, -46, -43, -40,
    -27, -27, -23, -20, -17, -10, 0, 4, 5, 8, 8, 11, 12, 12, 15, 17, 19, 25, 26,
    29, 33, 36, 40, 42, 44, 44, 46, 50, 52, 58, 62, 66, 68, 70, 72, 73, 74, 85,
    88, 88, 91, 93, 95, 95, 108, 112, 113, 118, 136, 136, 154, 155, 156, 158,
    159, 173, 174, 176, 184, 185, 200, 201, 204, 216, 217, 225, 225, 234, 235,
    238, 239, 248, 248, 253, 261, 273, 276, 276, 284, 287, 291, 295, 296, 297,
    299, 301, 301, 302, 302, 305, 312, 324, 331, 333, 334, 344, 344, 346, 346,
    346, 347, 348, 349, 352, 353, 354, 359, 360, 365, 365, 366, 375, 376, 379,
    386, 395, 400, 403, 404, 408, 409, 410, 410, 422, 426, 426, 433, 437, 451,
    452, 453, 455, 461, 465, 470, 480, 492, 503, 512, 515, 517, 524, 524, 529,
    531, 534, 535, 540, 549, 549, 552, 553, 554, 563, 563, 563, 564, 564, 570,
    577, 582, 583, 601, 605, 605, 610, 612, 613, 613, 618, 620, 625, 631, 632,
    637, 645, 647, 654, 660, 661, 661, 663, 664, 667, 672, 679, 682, 682, 684,
    690, 690, 695, 706, 706, 717, 720, 726, 728, 743, 743, 743, 749, 753, 760,
    761, 765, 771, 771, 784, 785, 786, 787, 790, 793, 793, 801, 806, 810, 811,
    814, 818, 827, 828, 828, 831, 837, 838, 848, 851, 859, 861, 861, 861, 868,
    869, 869, 878, 882, 892, 893, 899, 899, 900, 905, 909, 910, 914, 915, 917,
    921, 927, 928, 931, 939, 942, 949, 959, 963, 963, 965, 989, 991, 992, 995,
    995, 996, 1000, 1001, 1002, 1005, 1008, 1010, 1010, 1012, 1013, 1013, 1025,
    1028, 1032, 1033, 1036, 1040, 1042, 1054, 1057, 1058, 1062, 1062, 1069,
    1069, 1070, 1073, 1075, 1076, 1080, 1080, 1082, 1083, 1085, 1089, 1098,
    1099, 1099, 1103, 1107, 1109, 1120, 1124, 1127, 1128, 1131, 1135, 1145,
    1151, 1152, 1153, 1155, 1163, 1169, 1177, 1177, 1178, 1184, 1186, 1187,
    1191, 1193, 1196, 1207, 1209, 1211, 1216, 1218, 1221, 1237, 1248, 1249,
    1251, 1252, 1254, 1263, 1264, 1272, 1280, 1299, 1299, 1301, 1302, 1302,
    1309, 1310, 1313, 1316, 1319, 1320, 1323, 1325, 1326, 1327, 1327, 1340,
    1343, 1345, 1346, 1347, 1348, 1349, 1352, 1355, 1362, 1363, 1365, 1365,
    1365, 1366, 1366, 1367, 1372, 1376, 1377, 1378, 1378, 1394, 1398, 1401,
    1402, 1404, 1407, 1411, 1426, 1426, 1432, 1438, 1442, 1448, 1451, 1455,
    1456, 1459, 1463, 1466, 1471, 1476, 1478, 1481, 1485, 1485, 1486, 1489,
    1492, 1495, 1500, 1501, 1504, 1508, 1508, 1509, 1515, 1518, 1530, 1542,
    1542, 1544, 1546, 1549, 1557, 1559, 1561, 1561, 1562, 1567, 1571, 1572,
    1575, 1577, 1583, 1584, 1585, 1590, 1590, 1592, 1594, 1595, 1602, 1606,
    1607, 1610, 1616, 1618, 1622, 1627, 1628, 1642, 1646, 1647, 1647, 1654,
    1658, 1659, 1660, 1661, 1667, 1675, 1680, 1700, 1707, 1707, 1708, 1715,
    1722, 1724, 1725, 1729, 1731, 1737, 1740, 1747, 1751, 1753, 1760, 1760,
    1771, 1784, 1786, 1788, 1799, 1800, 1801, 1802, 1807, 1808, 1810, 1818,
    1832, 1833, 1838, 1844, 1849, 1852, 1860, 1868, 1869, 1878, 1881, 1888,
    1891, 1893, 1898, 1903, 1903, 1907, 1912, 1913, 1917, 1917, 1919, 1924,
    1937, 1947, 1947, 1947, 1953, 1956, 1958, 1960, 1960, 1967, 1968, 1970,
    1971, 1972, 1980, 1983, 1987, 1987, 1989, 1992, 1992, 1997,
  ])
);