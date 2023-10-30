/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CS_CategoryMenuItem, CS_filterItems, CS_Item } from "@ianlucas/cslib";

export const baseUrl =
  "https://cdn.statically.io/gh/ianlucas/cslib/main/dist/images";

export const instaSelectCategory = [
  "sticker",
  "agent",
  "pin",
  "patch",
  "musickit"
];

const modelFromType = {
  "agent": "Agent",
  "glove": "Glove",
  "melee": "Knife",
  "musickit": "Music Kit",
  "patch": "Patch",
  "pin": "Pin",
  "sticker": "Sticker",
  "weapon": "Weapon"
} as const;

export function getCSItemName(csItem: CS_Item) {
  if (["weapon", "melee", "glove"].includes(csItem.type)) {
    const [weaponName, ...paintName] = csItem.name.split("|");
    return {
      model: (csItem.type === "melee" ? "★ " : "") + weaponName.trim(),
      name: paintName.join("|")
    };
  }
  return {
    model: modelFromType[csItem.type],
    name: csItem.name
  };
}

export function getBaseItems({ category }: CS_CategoryMenuItem) {
  const isDisplayAll = instaSelectCategory.includes(category);
  return CS_filterItems({
    category: category !== "sticker" ? category : undefined,
    type: category === "sticker" ? "sticker" : undefined,
    base: isDisplayAll ? undefined : true
  }).filter(({ free }) =>
    !["glove", "melee", "musickit"].includes(category) || !free
    || (isDisplayAll && (category !== "musickit" || !free))
  );
}

export function getPaidItems(
  { category }: CS_CategoryMenuItem,
  model: string
) {
  return CS_filterItems({
    model
  }).filter(({ base }) => category === "melee" || !base);
}
