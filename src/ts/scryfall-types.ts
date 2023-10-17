// Only included card fields that the application cares about. To see all fields: https://scryfall.com/docs/api/cards
export interface ScryfallMtgCard {
  // Core card fields. Cards have the following core properties:
  object: 'card'
  arena_id?: number
  id: string
  lang: string
  layout: string
  prints_search_uri: string
  rulings_uri: string
  uri: string
  // Gameplay fields
  keywords: string[]
  legalities: string[]
  name: string
  reserved: boolean
  type_line: string
  // Print fields. Cards have the following properties unique to their particular re/print:
  artist?: string
  artists_ids: string[]
  booster: boolean
  border_color: string
  card_back_id: string
  collector_number: string
  content_warning?: boolean
  digital: boolean
  finishes: string[]
  flavor_name: string
  flavor_text: string
  frame: string
  full_art: boolean
  games: string[]
  highres_image: boolean
  image_status: string
  image_uris: ScryfallImageUris
  oversized: boolean
  prices: ScryfallMtgCardPrices
  purchase_uris: ScryfallPurchaseUris
  promo: boolean
  rarity: MtgCardRarity
  released_at: Date
  reprint: boolean
  scryfall_set_uri: string
  set_name: string
  set_search_uri: string
  set_type: string
  set_uri: string
  set: string
  set_id: string
  story_spotlight: boolean
  textless: boolean
  variation: boolean
  // Card face objects. Multiface cards have a card_faces property containing at least two Card Face objects.
  card_faces?: ScryfallMtgCardFaceObject[]
  // Related cards object. Cards that are closely related to other cards (because they call them by name, or generate a token, or meld, etc)
  // have a all_parts property that contains Related Card objects. Those objects have the following properties:
  all_parts?: ScryfallMtgRelatedCardObject
}

// Can find this in 'prices' field: https://scryfall.com/docs/api/cards
interface ScryfallMtgCardPrices {
  usd: string
  usd_foil: string
  usd_etched: string
  eur: string
  eur_foil: string
  eur_etched: string
  tix: string
}

// Can find this in 'rarity' field: https://scryfall.com/docs/api/cards
type MtgCardRarity = 'common' | 'uncommon' | 'rare' | 'mythic' | 'special' | 'bonus'

// Card face objects. Multiface cards have a card_faces property containing at least two Card Face objects. Those objects have the following properties:
interface ScryfallMtgCardFaceObject {
  object: 'card_face'
  mana_cost: string
  name: string
}

// Related cards object. Cards that are closely related to other cards (because they call them by name, or generate a token, or meld, etc)
// have a all_parts property that contains Related Card objects. Those objects have the following properties:
interface ScryfallMtgRelatedCardObject {
  object: 'related_card'
  id: string
  component: string
  name: string
  type_line: string
  uri: string
}

interface ScryfallImageUris {
  small: string
  normal: string
  large: string
  png: string
  art_crop: string
  border_crop: string
}

interface ScryfallPurchaseUris {
  tcgplayer?: string
}
