// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** action_dispatch_uploaded_file */
  File: any;
  /** An ISO 8601-encoded date */
  ISO8601Date: any;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
  Json: any;
  /** ETH amount expressed in wei as a string */
  WeiAmount: any;
};

/** An Account */
export type Account = Node & {
  __typename?: 'Account';
  accountable: Accountable;
  escrowAccount: Scalars['Boolean'];
  id: Scalars['ID'];
  owner?: Maybe<AccountOwner>;
  sorareManaged: Scalars['Boolean'];
};

/** Object that can be an account owner */
export type AccountOwner = Contract | User;

/** Object that can be an account accountable */
export type Accountable = CommonAccount | EthereumAccount | LoomAccount | StarkwareAccount;

export type Age = {
  __typename?: 'Age';
  cutOffDate: Scalars['ISO8601Date'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

/** An announcement */
export type Announcement = Node & {
  __typename?: 'Announcement';
  content: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

/** The connection type for Announcement. */
export type AnnouncementConnection = {
  __typename?: 'AnnouncementConnection';
  /** A list of edges. */
  edges: Array<AnnouncementEdge>;
  /** A list of nodes. */
  nodes: Array<Announcement>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnnouncementEdge = {
  __typename?: 'AnnouncementEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Announcement>;
};

/** A user notification regarding an Announcement */
export type AnnouncementNotification = NotificationInterface & {
  __typename?: 'AnnouncementNotification';
  announcement: Announcement;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  read: Scalars['Boolean'];
  user: CurrentUser;
};

/** An anonymous User */
export type AnonymousUser = BlockchainUserInterface & {
  __typename?: 'AnonymousUser';
  cardsCount: Scalars['Int'];
  ethVaultId?: Maybe<Scalars['Int']>;
  ethereumAddress: Scalars['String'];
  id: Scalars['ID'];
  sorareAddress?: Maybe<Scalars['String']>;
  starkKey?: Maybe<Scalars['String']>;
  starkKeyRegistered: Scalars['Boolean'];
};

/** An Auction on a Card */
export type Auction = EnglishAuctionInterface & Node & {
  __typename?: 'Auction';
  /** @deprecated subscriptions do not scale if user dependent */
  belongsToUser: Scalars['Boolean'];
  bestBid?: Maybe<BidWithRates>;
  /** @deprecated subscriptions do not scale if user dependent */
  bestBidBelongsToUser: Scalars['Boolean'];
  /** The `bids` field cannot be nested within a list. */
  bids: BidConnection;
  bidsCount: Scalars['Int'];
  blockchainId: Scalars['String'];
  cancelled: Scalars['Boolean'];
  /** @deprecated Use `cards` instead */
  card: Card;
  cards: Array<Card>;
  contentProvider?: Maybe<EnglishAuctionContentProvider>;
  contract: Contract;
  creditCardFee: Scalars['Float'];
  /** Current price, in wei. */
  currentPrice: Scalars['String'];
  /** @deprecated Use limitOrders instead */
  deal: Deal;
  endDate: Scalars['ISO8601DateTime'];
  /** ID of the object. */
  id: Scalars['ID'];
  /** List of LimitOrder objects used as a payload to sign for the `bid` mutation. */
  limitOrders?: Maybe<Array<LimitOrder>>;
  /** Minimum next bid amount, in wei. */
  minNextBid: Scalars['String'];
  minSignatureExpirationDate: Scalars['ISO8601DateTime'];
  name: Scalars['String'];
  /** @deprecated Use blockchainId as unique identifier */
  number: Scalars['Int'];
  open: Scalars['Boolean'];
  slug: Scalars['String'];
  startDate: Scalars['ISO8601DateTime'];
};


/** An Auction on a Card */
export type AuctionBidsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** An Auction on a Card */
export type AuctionLimitOrdersArgs = {
  amount: Scalars['String'];
};

/** The connection type for Auction. */
export type AuctionConnection = {
  __typename?: 'AuctionConnection';
  /** A list of edges. */
  edges: Array<AuctionEdge>;
  /** A list of nodes. */
  nodes: Array<Auction>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type AuctionEdge = {
  __typename?: 'AuctionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Auction>;
};

/** A user notification regarding an Auction */
export type AuctionNotification = NotificationInterface & {
  __typename?: 'AuctionNotification';
  auction: BundledAuction;
  bid?: Maybe<Bid>;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  read: Scalars['Boolean'];
  user: CurrentUser;
};

export enum Award {
  ChildhoodTeam = 'CHILDHOOD_TEAM',
  FavoriteNumber = 'FAVORITE_NUMBER',
  FirstComeFirstServed = 'FIRST_COME_FIRST_SERVED',
  FirstDip = 'FIRST_DIP',
  HighestBidder = 'HIGHEST_BIDDER',
  MakingItRain = 'MAKING_IT_RAIN',
  MatchingNumbers = 'MATCHING_NUMBERS',
  NationalService = 'NATIONAL_SERVICE',
  OutTheDoor = 'OUT_THE_DOOR',
  YourBiggestFan = 'YOUR_BIGGEST_FAN'
}

export enum AwardCategory {
  Collector = 'COLLECTOR',
  Manager = 'MANAGER'
}

/** A Bid in an auction */
export type Bid = Node & {
  __typename?: 'Bid';
  /** Bid amount, in wei. */
  amount: Scalars['String'];
  bidder?: Maybe<BlockchainUser>;
  createdAt: Scalars['ISO8601DateTime'];
  englishAuction: BundledAuction;
  fiatPayment: Scalars['Boolean'];
  id: Scalars['ID'];
};

/** The connection type for Bid. */
export type BidConnection = {
  __typename?: 'BidConnection';
  /** A list of edges. */
  edges: Array<BidEdge>;
  /** A list of nodes. */
  nodes: Array<Bid>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type BidEdge = {
  __typename?: 'BidEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Bid>;
};

/** A bid with conversion rates */
export type BidWithRates = Node & {
  __typename?: 'BidWithRates';
  /** Bid amount, in wei. */
  amount: Scalars['String'];
  amountInFiat: Fiat;
  bidder?: Maybe<BlockchainUser>;
  createdAt: Scalars['ISO8601DateTime'];
  englishAuction: BundledAuction;
  fiatPayment: Scalars['Boolean'];
  id: Scalars['ID'];
};

/** Object that have a blockchain address to interact with the platform */
export type BlockchainUser = AnonymousUser | User;

/** Blockchain info */
export type BlockchainUserInterface = {
  cardsCount: Scalars['Int'];
  ethVaultId?: Maybe<Scalars['Int']>;
  ethereumAddress: Scalars['String'];
  sorareAddress?: Maybe<Scalars['String']>;
  starkKey?: Maybe<Scalars['String']>;
  starkKeyRegistered: Scalars['Boolean'];
};

/** An Auction on a bundle of Cards */
export type BundledAuction = EnglishAuctionInterface & Node & {
  __typename?: 'BundledAuction';
  /** @deprecated subscriptions do not scale if user dependent */
  belongsToUser: Scalars['Boolean'];
  bestBid?: Maybe<BidWithRates>;
  /** @deprecated subscriptions do not scale if user dependent */
  bestBidBelongsToUser: Scalars['Boolean'];
  /** The `bids` field cannot be nested within a list. */
  bids: BidConnection;
  bidsCount: Scalars['Int'];
  blockchainId: Scalars['String'];
  cancelled: Scalars['Boolean'];
  /** @deprecated Use field cards instead */
  card: Card;
  cards: Array<Card>;
  contentProvider?: Maybe<EnglishAuctionContentProvider>;
  contract: Contract;
  creditCardFee: Scalars['Float'];
  /** Current price, in wei. */
  currentPrice: Scalars['String'];
  /** @deprecated Use limitOrders instead */
  deal: Deal;
  endDate: Scalars['ISO8601DateTime'];
  /** ID of the object. */
  id: Scalars['ID'];
  /** List of LimitOrder objects used as a payload to sign for the `bid` mutation. */
  limitOrders?: Maybe<Array<LimitOrder>>;
  /** Minimum next bid amount, in wei. */
  minNextBid: Scalars['String'];
  minSignatureExpirationDate: Scalars['ISO8601DateTime'];
  name: Scalars['String'];
  /** @deprecated Use blockchainId as unique identifier */
  number: Scalars['Int'];
  open: Scalars['Boolean'];
  slug: Scalars['String'];
  startDate: Scalars['ISO8601DateTime'];
};


/** An Auction on a bundle of Cards */
export type BundledAuctionBidsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** An Auction on a bundle of Cards */
export type BundledAuctionLimitOrdersArgs = {
  amount: Scalars['String'];
};

/** The connection type for BundledAuction. */
export type BundledAuctionConnection = {
  __typename?: 'BundledAuctionConnection';
  /** A list of edges. */
  edges: Array<BundledAuctionEdge>;
  /** A list of nodes. */
  nodes: Array<BundledAuction>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type BundledAuctionEdge = {
  __typename?: 'BundledAuctionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<BundledAuction>;
};

/** A card representing a professional football player */
export type Card = CardGameInterface & CardMarketInterface & CollectibleInterface & Node & WithPictureInterface & WithSubscriptionsInterface & {
  __typename?: 'Card';
  age?: Maybe<Scalars['Int']>;
  /** @deprecated subscriptions do not scale if user dependent */
  belongsToUser: Scalars['Boolean'];
  birthTxHash?: Maybe<Scalars['String']>;
  blockchain: Scalars['String'];
  blockchainId?: Maybe<Scalars['String']>;
  canBuy: Scalars['Boolean'];
  /** @deprecated Not optimized */
  canSell: Scalars['Boolean'];
  cardEdition?: Maybe<CardEdition>;
  /** @deprecated Use cardEdition and layout instead */
  cardPrint?: Maybe<CardPrint>;
  /** @deprecated replaced by team */
  club?: Maybe<Club>;
  createdAt: Scalars['ISO8601DateTime'];
  /** @deprecated replaced by power breakdown */
  currentSeasonBonus: Scalars['Boolean'];
  currentUserSingleBuyOfferMinPrice?: Maybe<SingleBuyOfferMinPrice>;
  currentUserSubscription?: Maybe<EmailSubscription>;
  /** @deprecated Use `gameForLeague` instead */
  gameForFixture?: Maybe<Game>;
  gameForLeague?: Maybe<Game>;
  /** Current card level */
  grade: Scalars['Int'];
  gradeAfterTransfer: Scalars['Int'];
  id: Scalars['ID'];
  inRollup: Scalars['Boolean'];
  /** @deprecated Use latestEnglishAuction instead */
  latestAuction?: Maybe<Auction>;
  latestEnglishAuction?: Maybe<EnglishAuction>;
  layout?: Maybe<CardLayout>;
  license: License;
  liveSingleBuyOffers: Array<Offer>;
  liveSingleSaleOffer?: Maybe<SingleSaleOffer>;
  /** @deprecated Use liveSingleSaleOffer instead */
  mintedSingleSaleOffer?: Maybe<SingleSaleOffer>;
  myMintedSingleSaleOffer?: Maybe<SingleSaleOffer>;
  name: Scalars['String'];
  nextVaultId?: Maybe<Scalars['Int']>;
  notContractOwners: Array<OwnerWithRates>;
  onSale: Scalars['Boolean'];
  /** @deprecated Use openEnglishAuctions instead */
  openAuction?: Maybe<Auction>;
  openEnglishAuction?: Maybe<EnglishAuction>;
  openForDomesticStats: Scalars['Boolean'];
  openForGameStats: Scalars['Boolean'];
  openForGameStatsCompetitions: Array<Competition>;
  owner?: Maybe<Owner>;
  ownerSince?: Maybe<Scalars['ISO8601DateTime']>;
  ownerWithRates?: Maybe<OwnerWithRates>;
  owners: Array<Owner>;
  pendingWithdrawal?: Maybe<StarkwareWithdrawal>;
  pictureUrl?: Maybe<Scalars['String']>;
  player: Player;
  /** @deprecated injury data not reliable */
  playerInjuries: Array<Injury>;
  /** The `player_season_picture` field cannot be nested within a list. */
  playerSeasonPicture: SeasonPicture;
  position: Scalars['String'];
  power: Scalars['String'];
  powerBreakdown: PowerBreakdown;
  powerMalusAfterTransfer: Scalars['String'];
  /** @deprecated not relevant */
  price: Scalars['String'];
  priceRange?: Maybe<Range>;
  publicSingleBuyOfferMinPrice?: Maybe<SingleBuyOfferMinPrice>;
  rarity: Scalars['String'];
  /** @deprecated replaced by power breakdown */
  sameClubBonus: Scalars['Boolean'];
  /** @deprecated use the So5Scores of the player instead */
  scoreForPreviousFixture: Scalars['Int'];
  season: Season;
  serialNumber: Scalars['Int'];
  shirtNumber?: Maybe<Scalars['Int']>;
  singleCivilYear: Scalars['Boolean'];
  slug: Scalars['String'];
  starkwareTokenId?: Maybe<Scalars['String']>;
  subscriptionsCount: Scalars['Int'];
  team: Team;
  /** The `team_picture_url` field cannot be nested within a list. */
  teamPictureUrl?: Maybe<Scalars['String']>;
  tradeableStatus: Tradeable;
  u23Eligible: Scalars['Boolean'];
  user?: Maybe<User>;
  userOwner?: Maybe<UserOwner>;
  /** @deprecated replaced by ownerWithRate */
  userOwnerWithRate?: Maybe<UserOwnerWithRates>;
  userOwners: Array<UserOwner>;
  userOwnersWithRate: Array<UserOwnerWithRates>;
  vaultId?: Maybe<Scalars['Int']>;
  visible: Scalars['Boolean'];
  walletStatus: WalletStatus;
  xp: Scalars['Int'];
  xpAfterTransfer: Scalars['Int'];
  /** XP start range of current card level */
  xpNeededForCurrentGrade: Scalars['Int'];
  /** XP end range of current card level */
  xpNeededForNextGrade?: Maybe<Scalars['Int']>;
};


/** A card representing a professional football player */
export type CardGameForFixtureArgs = {
  so5FixtureSlug?: InputMaybe<Scalars['String']>;
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
};


/** A card representing a professional football player */
export type CardGameForLeagueArgs = {
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
  so5LeagueSlug?: InputMaybe<Scalars['String']>;
};


/** A card representing a professional football player */
export type CardPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


/** A card representing a professional football player */
export type CardPlayerSeasonPictureArgs = {
  type?: InputMaybe<Scalars['String']>;
};


/** A card representing a professional football player */
export type CardScoreForPreviousFixtureArgs = {
  so5FixtureSlug: Scalars['String'];
};


/** A card representing a professional football player */
export type CardTeamPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

/** The connection type for Card. */
export type CardConnection = {
  __typename?: 'CardConnection';
  /** A list of edges. */
  edges: Array<CardEdge>;
  /** A list of nodes. */
  nodes: Array<Card>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A user card count breakdown */
export type CardCount = {
  __typename?: 'CardCount';
  common: Scalars['Int'];
  limited: Scalars['Int'];
  rare: Scalars['Int'];
  superRare: Scalars['Int'];
  total: Scalars['Int'];
  unique: Scalars['Int'];
};

/** A card dropped during onboarding */
export type CardDrop = {
  __typename?: 'CardDrop';
  pictureUrl: Scalars['String'];
  slug: Scalars['String'];
};

/** An edge in a connection. */
export type CardEdge = {
  __typename?: 'CardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Card>;
};

/** Represents a card edition */
export type CardEdition = WithPublicCardsInterface & {
  __typename?: 'CardEdition';
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  displayName: Scalars['String'];
  name: Scalars['String'];
};


/** Represents a card edition */
export type CardEditionCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};

/** Card Game Interface */
export type CardGameInterface = {
  gameForLeague?: Maybe<Game>;
  /** Current card level */
  grade: Scalars['Int'];
  gradeAfterTransfer: Scalars['Int'];
  power: Scalars['String'];
  powerBreakdown: PowerBreakdown;
  powerMalusAfterTransfer: Scalars['String'];
  u23Eligible: Scalars['Boolean'];
  xp: Scalars['Int'];
  xpAfterTransfer: Scalars['Int'];
  /** XP start range of current card level */
  xpNeededForCurrentGrade: Scalars['Int'];
  /** XP end range of current card level */
  xpNeededForNextGrade?: Maybe<Scalars['Int']>;
};


/** Card Game Interface */
export type CardGameInterfaceGameForLeagueArgs = {
  so5LeaderboardSlug?: InputMaybe<Scalars['String']>;
  so5LeagueSlug?: InputMaybe<Scalars['String']>;
};

/** Represents a card layout */
export type CardLayout = {
  __typename?: 'CardLayout';
  backgroundUrl?: Maybe<Scalars['String']>;
  layerUrl?: Maybe<Scalars['String']>;
  playerMaskUrl?: Maybe<Scalars['String']>;
  teamLogoUrl?: Maybe<Scalars['String']>;
};

/** Card Market Resolvers */
export type CardMarketInterface = {
  canBuy: Scalars['Boolean'];
  currentUserSingleBuyOfferMinPrice?: Maybe<SingleBuyOfferMinPrice>;
  latestEnglishAuction?: Maybe<EnglishAuction>;
  liveSingleBuyOffers: Array<Offer>;
  liveSingleSaleOffer?: Maybe<SingleSaleOffer>;
  myMintedSingleSaleOffer?: Maybe<SingleSaleOffer>;
  onSale: Scalars['Boolean'];
  openEnglishAuction?: Maybe<EnglishAuction>;
  priceRange?: Maybe<Range>;
  publicSingleBuyOfferMinPrice?: Maybe<SingleBuyOfferMinPrice>;
};

/** A user notification regarding a Card */
export type CardNotification = NotificationInterface & {
  __typename?: 'CardNotification';
  card: Card;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  read: Scalars['Boolean'];
  user: CurrentUser;
  withdrawal?: Maybe<StarkwareWithdrawal>;
};

/** A CardOffer links a Card to an Offer */
export type CardOffer = Node & {
  __typename?: 'CardOffer';
  card?: Maybe<Card>;
  id: Scalars['ID'];
  offer: Offer;
  rarity: Scalars['String'];
};

/** Represents a print of a card */
export type CardPrint = {
  __typename?: 'CardPrint';
  backgroundUrlByRarity: Scalars['Json'];
  cardEdition: CardEdition;
  clubUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  layoutByRarity: RaritiesCardLayout;
  maskUrl?: Maybe<Scalars['String']>;
};


/** Represents a print of a card */
export type CardPrintBackgroundUrlByRarityArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

export enum CardQuality {
  Tier_0 = 'TIER_0',
  Tier_1 = 'TIER_1',
  Tier_2 = 'TIER_2',
  Tier_3 = 'TIER_3',
  Tier_4 = 'TIER_4'
}

/** The supply of cards for a Player in a Season */
export type CardSeasonSupply = {
  __typename?: 'CardSeasonSupply';
  limited: Scalars['Int'];
  player: Player;
  rare: Scalars['Int'];
  season: Season;
  superRare: Scalars['Int'];
  unique: Scalars['Int'];
};

export type Club = Node & TeamInterface & WithSubscriptionsInterface & {
  __typename?: 'Club';
  activeCompetitions: Array<Competition>;
  /** The `active_memberships` field cannot be nested within a list. */
  activeMemberships: MembershipConnection;
  /** The `active_players` field cannot be nested within a list. */
  activePlayers: PlayerConnection;
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  code?: Maybe<Scalars['String']>;
  /** @deprecated replaced by colorRight on customBanner */
  colorBottom?: Maybe<Scalars['String']>;
  /** @deprecated replaced by colorLeft on customBanner */
  colorTop?: Maybe<Scalars['String']>;
  country: Country;
  currentUserSubscription?: Maybe<EmailSubscription>;
  customBanner?: Maybe<CustomBanner>;
  domesticLeague?: Maybe<Competition>;
  founded?: Maybe<Scalars['String']>;
  /** The `games` field cannot be nested within a list. */
  games: GameConnection;
  id: Scalars['ID'];
  lastFiveGames: Array<Game>;
  /** The `latest_games` field cannot be nested within a list. */
  latestGames: GameConnection;
  license: License;
  name: Scalars['String'];
  /** The `open_auctions` field cannot be nested within a list. */
  openAuctions: AuctionConnection;
  optaId?: Maybe<Scalars['String']>;
  pictureSecondaryUrl?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  /** @deprecated Replaced teamPictureUrl on CardType */
  pictureUrlByRarity: Scalars['Json'];
  /** The `players` field cannot be nested within a list. */
  players: PlayerConnection;
  ready: Scalars['Boolean'];
  /** The `recent_departures` field cannot be nested within a list. */
  recentDepartures: PlayerConnection;
  slug: Scalars['String'];
  subscriptionsCount: Scalars['Int'];
  upcomingGames: Array<Maybe<Game>>;
};


export type ClubActiveMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ClubActivePlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ClubCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


export type ClubGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate: Scalars['ISO8601DateTime'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  startDate: Scalars['ISO8601DateTime'];
};


export type ClubLatestGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ClubOpenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ClubPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


export type ClubPictureUrlByRarityArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


export type ClubPlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ClubRecentDeparturesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ClubUpcomingGamesArgs = {
  first: Scalars['Int'];
};

/** The connection type for Club. */
export type ClubConnection = {
  __typename?: 'ClubConnection';
  /** A list of edges. */
  edges: Array<ClubEdge>;
  /** A list of nodes. */
  nodes: Array<Club>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ClubEdge = {
  __typename?: 'ClubEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Club>;
};

/** Collectible Resolvers */
export type CollectibleInterface = {
  cardEdition?: Maybe<CardEdition>;
  layout?: Maybe<CardLayout>;
};

/** A Common Account */
export type CommonAccount = {
  __typename?: 'CommonAccount';
  id: Scalars['ID'];
};

/** A professional football competition */
export type Competition = Node & WithPictureInterface & {
  __typename?: 'Competition';
  /** The `clubs` field cannot be nested within a list. */
  clubs: ClubConnection;
  /** The `contestants` field cannot be nested within a list. */
  contestants: Array<Contestant>;
  country?: Maybe<Country>;
  customBanner?: Maybe<CustomBanner>;
  displayName: Scalars['String'];
  format: CompetitionFormat;
  id: Scalars['ID'];
  name: Scalars['String'];
  openForGameStats: Scalars['Boolean'];
  pictureUrl?: Maybe<Scalars['String']>;
  /** The `players_by_last_five_average` field cannot be nested within a list. */
  playersByLastFiveAverage: PlayerConnection;
  released: Scalars['Boolean'];
  /** The `seasons` field cannot be nested within a list. */
  seasons: Array<Season>;
  slug: Scalars['String'];
  type: CompetitionType;
};


/** A professional football competition */
export type CompetitionClubsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A professional football competition */
export type CompetitionContestantsArgs = {
  seasonStartYear: Scalars['Int'];
};


/** A professional football competition */
export type CompetitionPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


/** A professional football competition */
export type CompetitionPlayersByLastFiveAverageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export enum CompetitionFormat {
  DomesticCup = 'DOMESTIC_CUP',
  DomesticLeague = 'DOMESTIC_LEAGUE',
  DomesticSuperCup = 'DOMESTIC_SUPER_CUP',
  InternationalCup = 'INTERNATIONAL_CUP',
  InternationalSuperCup = 'INTERNATIONAL_SUPER_CUP'
}

export enum CompetitionType {
  Club = 'CLUB',
  International = 'INTERNATIONAL'
}

/** The frontend config */
export type Config = {
  __typename?: 'Config';
  /** @deprecated Migration completed */
  activateStarkware: Scalars['Boolean'];
  algoliaApplicationId: Scalars['String'];
  algoliaIndexSuffix: Scalars['String'];
  algoliaSearchApiKey: Scalars['String'];
  bankAddress: Scalars['String'];
  /** @deprecated Useless */
  cardPowerCap: Scalars['Float'];
  /** @deprecated Always enabled */
  cdnEnabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Draft does not exist anymore */
  draftMajorCompetitions: Array<Scalars['String']>;
  ethAssetType: Scalars['String'];
  ethQuantum: Scalars['String'];
  ethereumEndpoint: Scalars['String'];
  ethereumNetworkId: Scalars['String'];
  ethereumWsEndpoint: Scalars['String'];
  exchangeRate: ExchangeRate;
  frontendAssetsHost: Scalars['String'];
  frontendMinTimestampVersion: Scalars['String'];
  frontendPort: Scalars['String'];
  frontendPort5000Tcp: Scalars['String'];
  frontendPort5000TcpAddr: Scalars['String'];
  frontendPort5000TcpPort: Scalars['String'];
  frontendPort5000TcpProto: Scalars['String'];
  frontendServiceHost: Scalars['String'];
  frontendServicePort: Scalars['String'];
  id: Scalars['ID'];
  /** @deprecated Replaced by landingTheme */
  landingCards: Array<Scalars['String']>;
  landingClubCount: Scalars['String'];
  landingClubs: Array<LandingClub>;
  landingTheme: LandingTheme;
  migratorAddress?: Maybe<Scalars['String']>;
  /** Fetch teams playing in the upcoming So5 Fixture */
  nextSo5FixtureTeams: Array<Team>;
  /** @deprecated Draft does not exist anymore */
  onboardingDraft: OnboardingDraft;
  powerHourStartDate?: Maybe<Scalars['ISO8601DateTime']>;
  relayAddress: Scalars['String'];
  so5LeaguesAlgoliaFilters: Scalars['Json'];
  sorareCardsAddress: Scalars['String'];
  sorareEncryptionKey: Scalars['String'];
  sorareTokensAddress: Scalars['String'];
  sponsorAccountAddress: Scalars['String'];
  starkExchangeAddress?: Maybe<Scalars['String']>;
  stripePublicKey: Scalars['String'];
  /** @deprecated Moved to TransferMarketType */
  transferMarketBanner?: Maybe<TransferMarketBanner>;
  walletUrl: Scalars['String'];
};

/** A contestant */
export type Contestant = {
  __typename?: 'Contestant';
  id: Scalars['ID'];
  matchesDrawn?: Maybe<Scalars['Int']>;
  matchesLost?: Maybe<Scalars['Int']>;
  matchesPlayed?: Maybe<Scalars['Int']>;
  matchesWon?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  team: Team;
};

/** A smart contract */
export type Contract = Node & {
  __typename?: 'Contract';
  addressHex: Scalars['String'];
  blockchain: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** A country */
export type Country = Node & WithSubscriptionsInterface & {
  __typename?: 'Country';
  /** Country code in ISO 3166-1 format. */
  code: Scalars['String'];
  currentUserSubscription?: Maybe<EmailSubscription>;
  id: Scalars['ID'];
  /**
   * List of opened auctions from players of this country. The `open_auctions` field cannot be nested within a list.
   * @deprecated Will be removed in the near future
   */
  openAuctions: AuctionConnection;
  slug: Scalars['String'];
  subscriptionsCount: Scalars['Int'];
};


/** A country */
export type CountryOpenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Credit Card */
export type CreditCard = {
  __typename?: 'CreditCard';
  brand: CreditCardBrand;
  expMonth: Scalars['Int'];
  expYear: Scalars['Int'];
  last4: Scalars['String'];
};

export enum CreditCardBrand {
  /** American Express */
  AmericanExpress = 'AMERICAN_EXPRESS',
  /** Cartes Bancaires */
  CartesBancaires = 'CARTES_BANCAIRES',
  /** Diners Club */
  DinersClub = 'DINERS_CLUB',
  /** Discover */
  Discover = 'DISCOVER',
  /** JCB */
  Jcb = 'JCB',
  /** MasterCard */
  Mastercard = 'MASTERCARD',
  /** UnionPay */
  UnionPay = 'UNION_PAY',
  /** Unknown */
  Unknown = 'UNKNOWN',
  /** Visa */
  Visa = 'VISA'
}

export enum Currency {
  Eth = 'ETH',
  Fiat = 'FIAT'
}

/** Current Sorare user */
export type CurrentUser = PublicUserInfoInterface & UserOffersInterface & UserSocialInterface & WithFastWithdrawal & WithFavoriteInterface & WithNotifications & WithReferralsInterface & {
  __typename?: 'CurrentUser';
  accountEntries: UserAccountEntryConnection;
  activeMintingQuota?: Maybe<MintingQuota>;
  /** @deprecated Replaced by allTimeBestDecksInFormation */
  allTimeBestDecks: Array<Deck>;
  allTimeBestDecksInFormation: Array<DeckInFormation>;
  apiKey?: Maybe<Scalars['String']>;
  /**
   * The `auctions` field cannot be nested within a list.
   * @deprecated Use englishAuctions instead
   */
  auctions: AuctionConnection;
  /** Current user available balance, in wei. */
  availableBalance: Scalars['String'];
  /** Current user available balance for withdrawal, in wei. */
  availableBalanceForWithdrawal: Scalars['String'];
  awards: Array<UserAward>;
  /** Current user bank balance, in wei. */
  bankBalance: Scalars['String'];
  bankMappedEthereumAddress?: Maybe<Scalars['String']>;
  bankMappedEthereumAddressApprovedBank?: Maybe<Scalars['Boolean']>;
  /** @deprecated Migration completed */
  betaStarker: Scalars['Boolean'];
  betaTester: Scalars['Boolean'];
  /** @deprecated Replaced by blockedUsers */
  blocked: Array<User>;
  /** @deprecated removed soon */
  blockedBy: Array<User>;
  blockedUntil?: Maybe<Scalars['ISO8601DateTime']>;
  blockedUsers: UserConnection;
  /** The `bought_single_sale_offers` field cannot be nested within a list. */
  boughtSingleSaleOffers: SingleSaleOfferConnection;
  /**
   * The `buying_auctions` field cannot be nested within a list.
   * @deprecated Use buyingEnglishAuctions instead
   */
  buyingAuctions: Array<Auction>;
  /** The `buying_english_auctions` field cannot be nested within a list. */
  buyingEnglishAuctions: Array<EnglishAuction>;
  cardCounts: CardCount;
  /** @deprecated Use paginatedCards instead */
  cards: Array<Card>;
  cardsCount: Scalars['Int'];
  coinBalance: Scalars['Int'];
  createdAt: Scalars['ISO8601DateTime'];
  /** The `custom_decks` field cannot be nested within a list. */
  customDecks: CustomDeckConnection;
  depositedEth: Scalars['Boolean'];
  directOffers: OfferConnection;
  /** @deprecated Prefer using directOffers(direction: RECEIVED) instead. */
  directOffersReceived: Array<Offer>;
  /** @deprecated Prefer using directOffers(direction: SENT) instead. */
  directOffersSent: Array<Offer>;
  /** @deprecated Draft does not exist anymore */
  draftAvailableFunds: Scalars['Int'];
  email: Scalars['String'];
  /**
   * The `ended_buying_auctions` field cannot be nested within a list.
   * @deprecated Use endedBuyingEnglishAuctions instead
   */
  endedBuyingAuctions: AuctionConnection;
  endedDirectOffersReceived: OfferConnection;
  endedDirectOffersSent: OfferConnection;
  /** The `ended_with_no_buyer_single_sale_offers` field cannot be nested within a list. */
  endedWithNoBuyerSingleSaleOffers: SingleSaleOfferConnection;
  /** The `english_auctions` field cannot be nested within a list. */
  englishAuctions: EnglishAuctionConnection;
  ethMigration?: Maybe<EthMigration>;
  ethVaultId?: Maybe<Scalars['Int']>;
  ethereumAddress: Scalars['String'];
  /** Get a starkware conditional transfer request for a fast withdrawal */
  fastWithdrawal: FastWithdrawal;
  fastWithdrawals: Array<FastWithdrawal>;
  fastWithdrawalsWithRates: Array<FastWithdrawalWithRates>;
  favoriteCards: Array<Card>;
  favoriteClubs: Array<Club>;
  favoritePlayers: Array<Player>;
  fiatEnabled: Scalars['Boolean'];
  /** @deprecated Not available anymore */
  firstName?: Maybe<Scalars['String']>;
  followed?: Maybe<EmailSubscription>;
  /** The `followers` field cannot be nested within a list. */
  followers: UserWithSubscriptionSlugConnection;
  followersCount: Scalars['Int'];
  /** The `following` field cannot be nested within a list. */
  following: UserWithSubscriptionSlugConnection;
  followingCount: Scalars['Int'];
  fromPath?: Maybe<Scalars['String']>;
  /** @deprecated Front is not used anymore */
  frontChatUserHash: Scalars['String'];
  highlightedDeck?: Maybe<HighlightedDeck>;
  id: Scalars['ID'];
  /** Generate a JWT Token */
  jwtToken: JwtToken;
  /** @deprecated Not available anymore */
  lastName?: Maybe<Scalars['String']>;
  /**
   * The `live_single_sale_offers` field cannot be nested within a list.
   * @deprecated Use the paginated version instead
   */
  liveSingleSaleOffers: Array<SingleSaleOffer>;
  /**
   * The `lost_auctions` field cannot be nested within a list.
   * @deprecated Use lostEnglishAuctions instead
   */
  lostAuctions: AuctionConnection;
  /** The `lost_english_auctions` field cannot be nested within a list. */
  lostEnglishAuctions: EnglishAuctionConnection;
  moonpayParams: Scalars['String'];
  mySubscriptions: EmailSubscriptionConnection;
  /** @deprecated Not available */
  nextStarkwareNonce: Scalars['Int'];
  nickname: Scalars['String'];
  notifications: NotificationConnection;
  onboardingStatus: Onboarding;
  /** @deprecated Secondary market is offer only */
  openAuctions: Array<Auction>;
  /** @deprecated Secondary market is offer only */
  openEnglishAuctions: Array<EnglishAuction>;
  otpBackupCodes?: Maybe<Array<Scalars['String']>>;
  otpProvisioningUri: Scalars['String'];
  otpRequiredForLogin: Scalars['Boolean'];
  /** The `paginated_cards` field cannot be nested within a list. */
  paginatedCards: CardConnection;
  /** The `paginated_live_single_sale_offers` field cannot be nested within a list. */
  paginatedLiveSingleSaleOffers: SingleSaleOfferConnection;
  paymentMethods: Array<PaymentMethod>;
  pendingDirectOffersReceived: OfferConnection;
  pendingDirectOffersSent: OfferConnection;
  pendingDirectWithdrawalCount: Scalars['Int'];
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerificationRequested: Scalars['Boolean'];
  phoneNumberVerified: Scalars['Boolean'];
  profile: UserProfile;
  rampSupported: Scalars['Boolean'];
  referee: Scalars['Boolean'];
  refereeReward?: Maybe<ReferralReward>;
  referralAsReferee?: Maybe<Referral>;
  referralRewardsCount: Scalars['Int'];
  /** Get the list of referrals */
  referrals: ReferralPaginated;
  referrer?: Maybe<User>;
  /** @deprecated Rookie restrictions are no longer being enforced. */
  remainingRookieGameWeeks: Scalars['Int'];
  /** The `single_sale_offers` field cannot be nested within a list. */
  singleSaleOffers: SingleSaleOfferConnection;
  slug: Scalars['String'];
  /** The `sold_single_sale_offers` field cannot be nested within a list. */
  soldSingleSaleOffers: SingleSaleOfferConnection;
  sorareAddress?: Maybe<Scalars['String']>;
  sorareAddressApprovedBank: Scalars['Boolean'];
  sorareAddressApprovedBankPending?: Maybe<Scalars['String']>;
  sorarePrivateKey?: Maybe<SorarePrivateKey>;
  sorarePrivateKeyRecovery?: Maybe<Scalars['String']>;
  starkKey?: Maybe<Scalars['String']>;
  starkKeyRegistered: Scalars['Boolean'];
  starkRegistrationSignature?: Maybe<Scalars['String']>;
  /** @deprecated Use mySubscriptions instead */
  subscriptions: Array<EmailSubscription>;
  /** Current user total balance, in wei. */
  totalBalance: Scalars['String'];
  unclaimedReferralRewardsCount: Scalars['Int'];
  unclaimedSo5Rewards: Array<So5Reward>;
  unreadNotificationsCount: Scalars['Int'];
  userSettings: UserSettings;
  withdrawals: Array<Withdrawal>;
  withdrawalsWithRates: Array<WithdrawalWithRates>;
  /**
   * The `won_auctions` field cannot be nested within a list.
   * @deprecated Use wonEnglishAuctions instead
   */
  wonAuctions: AuctionConnection;
  /** The `won_english_auctions` field cannot be nested within a list. */
  wonEnglishAuctions: EnglishAuctionConnection;
};


/** Current Sorare user */
export type CurrentUserAccountEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['ISO8601DateTime']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  significant?: InputMaybe<Scalars['Boolean']>;
  sortType?: InputMaybe<SortingOption>;
  startDate?: InputMaybe<Scalars['ISO8601DateTime']>;
};


/** Current Sorare user */
export type CurrentUserAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserBlockedUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Current Sorare user */
export type CurrentUserBoughtSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserBuyingAuctionsArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** Current Sorare user */
export type CurrentUserBuyingEnglishAuctionsArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** Current Sorare user */
export type CurrentUserCustomDecksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Current Sorare user */
export type CurrentUserDirectOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  direction: OfferDirection;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserEndedBuyingAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Current Sorare user */
export type CurrentUserEndedDirectOffersReceivedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserEndedDirectOffersSentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserEndedWithNoBuyerSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserFastWithdrawalArgs = {
  amount: Scalars['String'];
  to: Scalars['String'];
};


/** Current Sorare user */
export type CurrentUserFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Current Sorare user */
export type CurrentUserFollowingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Current Sorare user */
export type CurrentUserJwtTokenArgs = {
  aud: Scalars['String'];
};


/** Current Sorare user */
export type CurrentUserLiveSingleSaleOffersArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** Current Sorare user */
export type CurrentUserLostAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserLostEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserMySubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
  types?: InputMaybe<Array<SubscribableType>>;
};


/** Current Sorare user */
export type CurrentUserNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<NotificationCategoryInput>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Current Sorare user */
export type CurrentUserPaginatedCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


/** Current Sorare user */
export type CurrentUserPaginatedLiveSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserPendingDirectOffersReceivedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserPendingDirectOffersSentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserReferralsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<ReferralState>;
};


/** Current Sorare user */
export type CurrentUserSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserSoldSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserWonAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Current Sorare user */
export type CurrentUserWonEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};

/** A custom banner */
export type CustomBanner = {
  __typename?: 'CustomBanner';
  colorLeft?: Maybe<Scalars['String']>;
  colorRight?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** A custom deck */
export type CustomDeck = DeckInterface & {
  __typename?: 'CustomDeck';
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  cardsCount: Scalars['Int'];
  deckCards: DeckCardConnection;
  deckCardsCount: Scalars['Int'];
  deckIndex: Scalars['Int'];
  firstCard?: Maybe<Card>;
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  user?: Maybe<User>;
  visible: Scalars['Boolean'];
};


/** A custom deck */
export type CustomDeckCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A custom deck */
export type CustomDeckDeckCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for CustomDeck. */
export type CustomDeckConnection = {
  __typename?: 'CustomDeckConnection';
  /** A list of edges. */
  edges: Array<CustomDeckEdge>;
  /** A list of nodes. */
  nodes: Array<CustomDeck>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CustomDeckEdge = {
  __typename?: 'CustomDeckEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CustomDeck>;
};

/** A Deal (deprecated: Used for our legacy smart contract on Ethereum) */
export type Deal = {
  __typename?: 'Deal';
  bankAddress: Scalars['String'];
  dealId: Scalars['String'];
  minReceiveAmountInWei?: Maybe<Scalars['String']>;
  receiveTokenIds?: Maybe<Array<Scalars['String']>>;
  receiverAddressHex?: Maybe<Scalars['String']>;
  sendAmountInWei?: Maybe<Scalars['String']>;
  sendTokenIds?: Maybe<Array<Scalars['String']>>;
  senderAddressHex: Scalars['String'];
};

/** A card deck */
export type Deck = Node & {
  __typename?: 'Deck';
  category: DeckCategory;
  deckCards: Array<DeckCard>;
  formation: DeckFormation;
  id: Scalars['ID'];
  pictureUrl?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  user?: Maybe<User>;
};

/** A deck card */
export type DeckCard = Node & {
  __typename?: 'DeckCard';
  card: Card;
  cardIndex?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
};

/** The connection type for DeckCard. */
export type DeckCardConnection = {
  __typename?: 'DeckCardConnection';
  /** A list of edges. */
  edges: Array<DeckCardEdge>;
  /** A list of nodes. */
  nodes: Array<DeckCard>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DeckCardEdge = {
  __typename?: 'DeckCardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<DeckCard>;
};

export enum DeckCategory {
  AllTimeBest = 'ALL_TIME_BEST',
  UserFavorite = 'USER_FAVORITE'
}

export enum DeckFormation {
  Free = 'FREE',
  OneOneTwo = 'ONE_ONE_TWO',
  OneTwoOne = 'ONE_TWO_ONE',
  TwoOneOne = 'TWO_ONE_ONE'
}

/** A card deck with a formation */
export type DeckInFormation = DeckInterface & {
  __typename?: 'DeckInFormation';
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  cardsCount: Scalars['Int'];
  category: DeckCategory;
  deckCards: DeckCardConnection;
  deckCardsCount: Scalars['Int'];
  firstCard?: Maybe<Card>;
  formation: DeckFormation;
  id: Scalars['ID'];
  pictureUrl?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  user?: Maybe<User>;
};


/** A card deck with a formation */
export type DeckInFormationCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A card deck with a formation */
export type DeckInFormationDeckCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type DeckInterface = {
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  cardsCount: Scalars['Int'];
  deckCards: DeckCardConnection;
  deckCardsCount: Scalars['Int'];
  firstCard?: Maybe<Card>;
  id: Scalars['ID'];
  slug: Scalars['String'];
  user?: Maybe<User>;
};


export type DeckInterfaceCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type DeckInterfaceDeckCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A subscription to a Card/Club/Player/Country/User */
export type EmailSubscription = {
  __typename?: 'EmailSubscription';
  id: Scalars['ID'];
  preferences: EmailSubscriptionPreferences;
  slug: Scalars['String'];
  subscribable?: Maybe<Subscribable>;
  subscriber?: Maybe<Subscriber>;
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for EmailSubscription. */
export type EmailSubscriptionConnection = {
  __typename?: 'EmailSubscriptionConnection';
  /** A list of edges. */
  edges: Array<EmailSubscriptionEdge>;
  /** A list of nodes. */
  nodes: Array<EmailSubscription>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EmailSubscriptionEdge = {
  __typename?: 'EmailSubscriptionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<EmailSubscription>;
};

/** A subscription preferences */
export type EmailSubscriptionPreferences = {
  __typename?: 'EmailSubscriptionPreferences';
  notifyForRarities: Array<Scalars['String']>;
  slug: Scalars['String'];
};

/** An EnglishAuction on a bundle of Cards */
export type EnglishAuction = EnglishAuctionInterface & Node & {
  __typename?: 'EnglishAuction';
  /** @deprecated subscriptions do not scale if user dependent */
  belongsToUser: Scalars['Boolean'];
  bestBid?: Maybe<BidWithRates>;
  /** @deprecated subscriptions do not scale if user dependent */
  bestBidBelongsToUser: Scalars['Boolean'];
  /** The `bids` field cannot be nested within a list. */
  bids: BidConnection;
  bidsCount: Scalars['Int'];
  blockchainId: Scalars['String'];
  cancelled: Scalars['Boolean'];
  cards: Array<Card>;
  contentProvider?: Maybe<EnglishAuctionContentProvider>;
  contract: Contract;
  creditCardFee: Scalars['Float'];
  /** Current price, in wei. */
  currentPrice: Scalars['String'];
  /** @deprecated Use limitOrders instead */
  deal: Deal;
  endDate: Scalars['ISO8601DateTime'];
  /** ID of the object. */
  id: Scalars['ID'];
  /** List of LimitOrder objects used as a payload to sign for the `bid` mutation. */
  limitOrders?: Maybe<Array<LimitOrder>>;
  /** Minimum next bid amount, in wei. */
  minNextBid: Scalars['String'];
  minSignatureExpirationDate: Scalars['ISO8601DateTime'];
  name: Scalars['String'];
  /** @deprecated Use blockchainId as unique identifier */
  number: Scalars['Int'];
  open: Scalars['Boolean'];
  slug: Scalars['String'];
  startDate: Scalars['ISO8601DateTime'];
};


/** An EnglishAuction on a bundle of Cards */
export type EnglishAuctionBidsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** An EnglishAuction on a bundle of Cards */
export type EnglishAuctionLimitOrdersArgs = {
  amount: Scalars['String'];
};

/** The connection type for EnglishAuction. */
export type EnglishAuctionConnection = {
  __typename?: 'EnglishAuctionConnection';
  /** A list of edges. */
  edges: Array<EnglishAuctionEdge>;
  /** A list of nodes. */
  nodes: Array<EnglishAuction>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** Object that can be an EnglishAuction content provider */
export type EnglishAuctionContentProvider = Club | Competition | NationalTeam;

/** An edge in a connection. */
export type EnglishAuctionEdge = {
  __typename?: 'EnglishAuctionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<EnglishAuction>;
};

export type EnglishAuctionInterface = {
  /** @deprecated subscriptions do not scale if user dependent */
  belongsToUser: Scalars['Boolean'];
  bestBid?: Maybe<BidWithRates>;
  /** @deprecated subscriptions do not scale if user dependent */
  bestBidBelongsToUser: Scalars['Boolean'];
  /** The `bids` field cannot be nested within a list. */
  bids: BidConnection;
  bidsCount: Scalars['Int'];
  blockchainId: Scalars['String'];
  cancelled: Scalars['Boolean'];
  cards: Array<Card>;
  contentProvider?: Maybe<EnglishAuctionContentProvider>;
  contract: Contract;
  creditCardFee: Scalars['Float'];
  /** Current price, in wei. */
  currentPrice: Scalars['String'];
  /** @deprecated Use limitOrders instead */
  deal: Deal;
  endDate: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  /** List of LimitOrder objects used as a payload to sign for the `bid` mutation. */
  limitOrders?: Maybe<Array<LimitOrder>>;
  /** Minimum next bid amount, in wei. */
  minNextBid: Scalars['String'];
  minSignatureExpirationDate: Scalars['ISO8601DateTime'];
  name: Scalars['String'];
  /** @deprecated Use blockchainId as unique identifier */
  number: Scalars['Int'];
  open: Scalars['Boolean'];
  slug: Scalars['String'];
  startDate: Scalars['ISO8601DateTime'];
};


export type EnglishAuctionInterfaceBidsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EnglishAuctionInterfaceLimitOrdersArgs = {
  amount: Scalars['String'];
};

/** A withdrawal signature */
export type EthBankWithdrawalIntent = {
  __typename?: 'EthBankWithdrawalIntent';
  amount: Scalars['String'];
  nonce: Scalars['Int'];
  signature: Scalars['String'];
  user: CurrentUser;
};

/** An ETH migration */
export type EthMigration = {
  __typename?: 'EthMigration';
  aasmState: Scalars['String'];
  id: Scalars['ID'];
  nonce: Scalars['String'];
  weiAmount: Scalars['String'];
};

/** An Ethereum Account */
export type EthereumAccount = {
  __typename?: 'EthereumAccount';
  address: Scalars['String'];
  id: Scalars['ID'];
};

/** An Ethereum Transaction */
export type EthereumTransaction = {
  __typename?: 'EthereumTransaction';
  confirmedAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  status?: Maybe<TransactionStatus>;
  transactionHash: Scalars['String'];
};

/** A ETH/EUR exchange rate */
export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  id: Scalars['ID'];
  rates: Scalars['Json'];
  time: Scalars['ISO8601DateTime'];
};

/** A landmark as detected on a Player picture by face recognition */
export type FaceLandmark = {
  __typename?: 'FaceLandmark';
  type: Scalars['String'];
  x: Scalars['Float'];
  xInPx: Scalars['Float'];
  y: Scalars['Float'];
  yInPx: Scalars['Float'];
};

/** The starkware fast withdrawal as a ConditionalTransferRequest */
export type FastWithdrawal = {
  __typename?: 'FastWithdrawal';
  amount: Scalars['String'];
  condition: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  expirationTimestamp: Scalars['Int'];
  id: Scalars['ID'];
  nonce: Scalars['Int'];
  receiverPublicKey: Scalars['String'];
  receiverVaultId: Scalars['Int'];
  salt: Scalars['String'];
  senderVaultId: Scalars['Int'];
  status: WithdrawalStatus;
  to: Scalars['String'];
  token: Scalars['String'];
  transactionHash?: Maybe<Scalars['String']>;
};

/** The starkware fast withdrawal with rates as a ConditionalTransferRequest */
export type FastWithdrawalWithRates = {
  __typename?: 'FastWithdrawalWithRates';
  amount: Scalars['String'];
  amountInFiat: Fiat;
  condition: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  expirationTimestamp: Scalars['Int'];
  id: Scalars['ID'];
  nonce: Scalars['Int'];
  receiverPublicKey: Scalars['String'];
  receiverVaultId: Scalars['Int'];
  salt: Scalars['String'];
  senderVaultId: Scalars['Int'];
  status: WithdrawalStatus;
  to: Scalars['String'];
  token: Scalars['String'];
  transactionHash?: Maybe<Scalars['String']>;
};

/** Starkware fee representation */
export type Fee = {
  __typename?: 'Fee';
  feeLimit: Scalars['String'];
  sourceVaultId: Scalars['Int'];
  tokenId: Scalars['String'];
};

export type Fiat = {
  __typename?: 'Fiat';
  eur: Scalars['Float'];
  gbp: Scalars['Float'];
  usd: Scalars['Float'];
};

export enum FiatCurrency {
  Eur = 'EUR',
  Gbp = 'GBP',
  Usd = 'USD'
}

/** The starkware Full withdrawal */
export type FullWithdrawalRequest = {
  __typename?: 'FullWithdrawalRequest';
  id: Scalars['ID'];
  served: Scalars['Boolean'];
  valid: Scalars['Boolean'];
};

/** A professional football game */
export type Game = Node & {
  __typename?: 'Game';
  /** @deprecated Replaced by awayTeam */
  away?: Maybe<Club>;
  awayGoals?: Maybe<Scalars['Int']>;
  awayTeam?: Maybe<Team>;
  competition: Competition;
  date: Scalars['ISO8601DateTime'];
  /** @deprecated Replaced by homeTeam */
  home?: Maybe<Club>;
  homeGoals: Scalars['Int'];
  homeTeam?: Maybe<Team>;
  id: Scalars['ID'];
  lowCoverage: Scalars['Boolean'];
  minute: Scalars['Int'];
  scored: Scalars['Boolean'];
  so5Fixture?: Maybe<So5Fixture>;
  status: Scalars['String'];
};

/** The connection type for Game. */
export type GameConnection = {
  __typename?: 'GameConnection';
  /** A list of edges. */
  edges: Array<GameEdge>;
  /** A list of nodes. */
  nodes: Array<Game>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type GameEdge = {
  __typename?: 'GameEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Game>;
};

/** A highlighted deck */
export type HighlightedDeck = DeckInterface & {
  __typename?: 'HighlightedDeck';
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  cardsCount: Scalars['Int'];
  deckCards: DeckCardConnection;
  deckCardsCount: Scalars['Int'];
  firstCard?: Maybe<Card>;
  id: Scalars['ID'];
  slug: Scalars['String'];
  user?: Maybe<User>;
};


/** A highlighted deck */
export type HighlightedDeckCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A highlighted deck */
export type HighlightedDeckDeckCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A player injury */
export type Injury = {
  __typename?: 'Injury';
  active: Scalars['Boolean'];
  expectedEndDate?: Maybe<Scalars['ISO8601DateTime']>;
  id: Scalars['ID'];
  kind: Scalars['String'];
  startDate: Scalars['ISO8601DateTime'];
};

/** Represents a jwt token */
export type JwtToken = {
  __typename?: 'JwtToken';
  /** JWT token expiration time. */
  expiredAt: Scalars['ISO8601DateTime'];
  /** JWT token, usable through a `Authorization: Bearer <token>` HTTP header. */
  token: Scalars['String'];
};

/** A club on the landing page */
export type LandingClub = {
  __typename?: 'LandingClub';
  league: Scalars['String'];
  logo: Scalars['String'];
  name: Scalars['String'];
};

/** A landing theme */
export type LandingTheme = {
  __typename?: 'LandingTheme';
  cards: Array<Scalars['String']>;
  id: Scalars['ID'];
  slug: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  userSource?: Maybe<UserSource>;
};

export enum License {
  ClubOnly = 'CLUB_ONLY',
  NotLicensed = 'NOT_LICENSED',
  PlayersAndClub = 'PLAYERS_AND_CLUB',
  PlayersOnly = 'PLAYERS_ONLY'
}

/** The limit order representation of one side of a Deal (Auction or Offer) */
export type LimitOrder = {
  __typename?: 'LimitOrder';
  amountBuy: Scalars['String'];
  amountSell: Scalars['String'];
  expirationTimestamp: Scalars['Int'];
  id: Scalars['String'];
  nonce: Scalars['Int'];
  tokenBuy: Scalars['String'];
  tokenSell: Scalars['String'];
  vaultIdBuy: Scalars['Int'];
  vaultIdSell: Scalars['Int'];
};

/** A Loom Account */
export type LoomAccount = {
  __typename?: 'LoomAccount';
  address: Scalars['String'];
  id: Scalars['ID'];
};

/** An object representing a club for which a player has played during a certain time. */
export type Membership = Node & {
  __typename?: 'Membership';
  aggregatedStats: Stats;
  club?: Maybe<Club>;
  endDate?: Maybe<Scalars['ISO8601DateTime']>;
  id: Scalars['ID'];
  membershipTeam: Team;
  player: Player;
  startDate: Scalars['ISO8601DateTime'];
  stats: Array<Stats>;
  /** @deprecated Replaced by membershipTeam */
  team?: Maybe<Club>;
};

/** The connection type for Membership. */
export type MembershipConnection = {
  __typename?: 'MembershipConnection';
  /** A list of edges. */
  edges: Array<MembershipEdge>;
  /** A list of nodes. */
  nodes: Array<Membership>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MembershipEdge = {
  __typename?: 'MembershipEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Membership>;
};

/** An intent to mint cards for other users */
export type MintCardsForUsersInput = {
  /** The slug of the player that should be on the Card. Either that or the tier of the player must be given. */
  playerSlug?: InputMaybe<Scalars['String']>;
  /** The rarity of the Card. */
  rarity: Rarity;
  /** The tier of the player that should be on the Card. Either that or the slug of the player must be given. */
  tier?: InputMaybe<CardQuality>;
  /** The slug of the user that will receive the Card. */
  userSlug: Scalars['String'];
};

/** Represents a quota of Cards that can be minted on demand by a User */
export type MintingQuota = {
  __typename?: 'MintingQuota';
  allocated: MintingQuotaAllocationConnection;
  endDate: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  playerPool?: Maybe<PlayerPool>;
  startDate: Scalars['ISO8601DateTime'];
  units: Array<MintingQuotaUnit>;
  user: User;
};


/** Represents a quota of Cards that can be minted on demand by a User */
export type MintingQuotaAllocatedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Represents a quota of Cards of a certain tiers and rarity that can be minted on demand by a User */
export type MintingQuotaAllocation = Node & {
  __typename?: 'MintingQuotaAllocation';
  card: Card;
  id: Scalars['ID'];
  tier: Scalars['Int'];
  user: User;
};

/** The connection type for MintingQuotaAllocation. */
export type MintingQuotaAllocationConnection = {
  __typename?: 'MintingQuotaAllocationConnection';
  /** A list of edges. */
  edges: Array<MintingQuotaAllocationEdge>;
  /** A list of nodes. */
  nodes: Array<MintingQuotaAllocation>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MintingQuotaAllocationEdge = {
  __typename?: 'MintingQuotaAllocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<MintingQuotaAllocation>;
};

/** Represents a quota of Cards of a certain tier and rarity that can be minted on demand by a User */
export type MintingQuotaUnit = {
  __typename?: 'MintingQuotaUnit';
  allocations: MintingQuotaAllocationConnection;
  id: Scalars['ID'];
  mintingQuota: MintingQuota;
  quantity: Scalars['Int'];
  rarity: Rarity;
  remaining: Scalars['Int'];
  tier?: Maybe<CardQuality>;
};


/** Represents a quota of Cards of a certain tier and rarity that can be minted on demand by a User */
export type MintingQuotaUnitAllocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Accept an offer */
  acceptOffer?: Maybe<AcceptOfferPayload>;
  /** Allows a user to add cards to a Deck. */
  addCardsToDeck?: Maybe<AddCardsToDeckPayload>;
  /** Add favourite clubs during the onboarding process */
  addFavouriteClubs?: Maybe<AddFavouriteClubsPayload>;
  /** Approve Migrator contract */
  approveMigrator?: Maybe<ApproveMigratorPayload>;
  /** Bid on an auction */
  bid?: Maybe<BidPayload>;
  /** Block another user from sending offers */
  blockUserOffers?: Maybe<BlockUserOffersPayload>;
  /** Buy a skin for your club */
  buySkin?: Maybe<BuySkinPayload>;
  cancelEthBankWithdrawals?: Maybe<CancelEthBankWithdrawalsPayload>;
  cancelFastWithdrawal?: Maybe<CancelFastWithdrawalPayload>;
  /** Cancel an offer */
  cancelOffer?: Maybe<CancelOfferPayload>;
  cancelWithdrawal?: Maybe<CancelWithdrawalPayload>;
  /** Check phone number verification code */
  checkPhoneNumberVerificationCode?: Maybe<CheckPhoneNumberVerificationCodePayload>;
  /** Claim an award */
  claimAward?: Maybe<ClaimAwardPayload>;
  /** Allows a user to claim a card drop */
  claimCardDrop?: Maybe<ClaimCardDropPayload>;
  /** Claim a referral reward */
  claimReferralReward?: Maybe<ClaimReferralRewardPayload>;
  /** Claim a reward */
  claimReward?: Maybe<ClaimRewardPayload>;
  /** Allows a user to mark an onboarding task as complete */
  completeOnboardingTask?: Maybe<CompleteOnboardingTaskPayload>;
  /** Confirms user Lineups */
  confirmSo5Lineups?: Maybe<ConfirmSo5LineupsPayload>;
  /** Withdraw a card to Ethereum */
  createCardWithdrawal?: Maybe<CreateCardWithdrawalPayload>;
  /** Allows a user to create a custom deck. */
  createCustomDeck?: Maybe<CreateCustomDeckPayload>;
  /** Send a Direct Offer to another manager */
  createDirectOffer?: Maybe<CreateDirectOfferPayload>;
  createEthBankWithdrawalIntent?: Maybe<CreateEthBankWithdrawalIntentPayload>;
  /** Creates an ETH migration */
  createEthMigration?: Maybe<CreateEthMigrationPayload>;
  /** Creates an eth vault */
  createEthVault?: Maybe<CreateEthVaultPayload>;
  createFastWithdrawal?: Maybe<CreateFastWithdrawalPayload>;
  /** Fix a minimum price for a card */
  createOrUpdateSingleBuyOfferMinPrice?: Maybe<CreateOrUpdateSingleBuyOfferMinPricePayload>;
  /** Create or update a user Lineup */
  createOrUpdateSo5Lineup?: Maybe<CreateOrUpdateSo5LineupPayload>;
  /** Create a payment intent */
  createPaymentIntent?: Maybe<CreatePaymentIntentPayload>;
  /** Offer to buy a single card for a fixed price */
  createSingleBuyOffer?: Maybe<CreateSingleBuyOfferPayload>;
  /** Sell a single card for a fixed price */
  createSingleSaleOffer?: Maybe<CreateSingleSaleOfferPayload>;
  /** Subscribe to new auctions on a Card, a Player, a Club or a Country */
  createSubscription?: Maybe<CreateSubscriptionPayload>;
  createWithdrawal?: Maybe<CreateWithdrawalPayload>;
  /** Allows a user to delete a custom deck. */
  deleteCustomDeck?: Maybe<DeleteCustomDeckPayload>;
  /** Deletes a user Lineup */
  deleteSo5Lineup?: Maybe<DeleteSo5LineupPayload>;
  /** Delete a subscription to new auctions on a Card, a Player, a Club or a Country */
  deleteSubscription?: Maybe<DeleteSubscriptionPayload>;
  /** Deletes user Lineups by leagues */
  deleteUserSo5Lineups?: Maybe<DeleteUserSo5LineupsPayload>;
  /** Destroy my Sorare account */
  destroyAccount?: Maybe<DestroyAccountPayload>;
  /** Destroy an expired referral */
  destroyReferral?: Maybe<DestroyReferralPayload>;
  detachPaymentMethod?: Maybe<DetachPaymentMethodPayload>;
  /** Disable 2FA requirement for login */
  disable2Fa?: Maybe<Disable2faPayload>;
  /** Disconnect from a social auth */
  disconnectOmniauthProvider?: Maybe<DisconnectOmniauthProviderPayload>;
  /** Draft a team of free common cards to start playing */
  draftCommonTeam?: Maybe<DraftCommonTeamPayload>;
  /** Allows a user to edit a card position in a Deck. */
  editCardInDeck?: Maybe<EditCardInDeckPayload>;
  /** Allows a user to edit a custom deck. */
  editCustomDeck?: Maybe<EditCustomDeckPayload>;
  /** Enable 2FA requirement for login */
  enable2Fa?: Maybe<Enable2faPayload>;
  /** Generate OTP backup codes */
  generateOtpBackupCodes?: Maybe<GenerateOtpBackupCodesPayload>;
  /** Mark notifications as read */
  markNotificationsAsRead?: Maybe<MarkNotificationsAsReadPayload>;
  /** Mint Cards for other users */
  mintCardsForUsers?: Maybe<MintCardsForUsersPayload>;
  /** Get the limit orders that need to be signed in order to accept an offer */
  prepareAcceptOffer?: Maybe<PrepareAcceptOfferPayload>;
  /** Get transfer request that needs to be signed in order to withdraw a card */
  prepareCardWithdrawal?: Maybe<PrepareCardWithdrawalPayload>;
  /** Get the limit orders that need to be signed in order to be able to create an offer */
  prepareOffer?: Maybe<PrepareOfferPayload>;
  /** Reject an Offer */
  rejectOffer?: Maybe<RejectOfferPayload>;
  relayCall?: Maybe<RelayCallPayload>;
  /** Allows a user to remove a card from a deck. */
  removeCardFromDeck?: Maybe<RemoveCardFromDeckPayload>;
  /** Resets a draft by deleting all free common cards */
  resetCommonDraft?: Maybe<ResetCommonDraftPayload>;
  resetPrivateKey?: Maybe<ResetPrivateKeyPayload>;
  /** Allows a user to restart a skipped onboarding process */
  resumeOnboarding?: Maybe<ResumeOnboardingPayload>;
  /** Add or update the given device token for push notifications */
  setDeviceToken?: Maybe<SetDeviceTokenPayload>;
  /** Sign in */
  signIn?: Maybe<SignInPayload>;
  /** Sign up */
  signUp?: Maybe<SignUpPayload>;
  /** Allows a user to skip his onboarding process */
  skipOnboarding?: Maybe<SkipOnboardingPayload>;
  /** Unblock another user from sending offers */
  unblockUserOffers?: Maybe<UnblockUserOffersPayload>;
  /** Update a subscription notification preferences */
  updateSubscription?: Maybe<UpdateSubscriptionPayload>;
  /** Update user profile */
  updateUserProfile?: Maybe<UpdateUserProfilePayload>;
  /** Update user settings */
  updateUserSettings?: Maybe<UpdateUserSettingsPayload>;
  /** Verify phone number */
  verifyPhoneNumber?: Maybe<VerifyPhoneNumberPayload>;
};


export type MutationAcceptOfferArgs = {
  input: AcceptOfferInput;
};


export type MutationAddCardsToDeckArgs = {
  input: AddCardsToDeckInput;
};


export type MutationAddFavouriteClubsArgs = {
  input: AddFavouriteClubsInput;
};


export type MutationApproveMigratorArgs = {
  input: ApproveMigratorInput;
};


export type MutationBidArgs = {
  input: BidInput;
};


export type MutationBlockUserOffersArgs = {
  input: BlockUserOffersInput;
};


export type MutationBuySkinArgs = {
  input: BuySkinInput;
};


export type MutationCancelEthBankWithdrawalsArgs = {
  input: CancelEthBankWithdrawalsInput;
};


export type MutationCancelFastWithdrawalArgs = {
  input: CancelFastWithdrawalInput;
};


export type MutationCancelOfferArgs = {
  input: CancelOfferInput;
};


export type MutationCancelWithdrawalArgs = {
  input: CancelWithdrawalInput;
};


export type MutationCheckPhoneNumberVerificationCodeArgs = {
  input: CheckPhoneNumberVerificationCodeInput;
};


export type MutationClaimAwardArgs = {
  input: ClaimAwardInput;
};


export type MutationClaimCardDropArgs = {
  input: ClaimCardDropInput;
};


export type MutationClaimReferralRewardArgs = {
  input: ClaimReferralRewardInput;
};


export type MutationClaimRewardArgs = {
  input: ClaimRewardInput;
};


export type MutationCompleteOnboardingTaskArgs = {
  input: CompleteOnboardingTaskInput;
};


export type MutationConfirmSo5LineupsArgs = {
  input: ConfirmSo5LineupsInput;
};


export type MutationCreateCardWithdrawalArgs = {
  input: CreateCardWithdrawalInput;
};


export type MutationCreateCustomDeckArgs = {
  input: CreateCustomDeckInput;
};


export type MutationCreateDirectOfferArgs = {
  input: CreateDirectOfferInput;
};


export type MutationCreateEthBankWithdrawalIntentArgs = {
  input: CreateEthBankWithdrawalIntentInput;
};


export type MutationCreateEthMigrationArgs = {
  input: CreateEthMigrationInput;
};


export type MutationCreateEthVaultArgs = {
  input: CreateEthVaultInput;
};


export type MutationCreateFastWithdrawalArgs = {
  input: CreateFastWithdrawalInput;
};


export type MutationCreateOrUpdateSingleBuyOfferMinPriceArgs = {
  input: CreateOrUpdateSingleBuyOfferMinPriceInput;
};


export type MutationCreateOrUpdateSo5LineupArgs = {
  input: CreateOrUpdateSo5LineupInput;
};


export type MutationCreatePaymentIntentArgs = {
  input: CreatePaymentIntentInput;
};


export type MutationCreateSingleBuyOfferArgs = {
  input: CreateSingleBuyOfferInput;
};


export type MutationCreateSingleSaleOfferArgs = {
  input: CreateSingleSaleOfferInput;
};


export type MutationCreateSubscriptionArgs = {
  input: CreateSubscriptionInput;
};


export type MutationCreateWithdrawalArgs = {
  input: CreateWithdrawalInput;
};


export type MutationDeleteCustomDeckArgs = {
  input: DeleteCustomDeckInput;
};


export type MutationDeleteSo5LineupArgs = {
  input: DeleteSo5LineupInput;
};


export type MutationDeleteSubscriptionArgs = {
  input: DeleteSubscriptionInput;
};


export type MutationDeleteUserSo5LineupsArgs = {
  input: DeleteUserSo5LineupsInput;
};


export type MutationDestroyAccountArgs = {
  input: DestroyAccountInput;
};


export type MutationDestroyReferralArgs = {
  input: DestroyReferralInput;
};


export type MutationDetachPaymentMethodArgs = {
  input: DetachPaymentMethodInput;
};


export type MutationDisable2FaArgs = {
  input: Disable2faInput;
};


export type MutationDisconnectOmniauthProviderArgs = {
  input: DisconnectOmniauthProviderInput;
};


export type MutationDraftCommonTeamArgs = {
  input: DraftCommonTeamInput;
};


export type MutationEditCardInDeckArgs = {
  input: EditCardInDeckInput;
};


export type MutationEditCustomDeckArgs = {
  input: EditCustomDeckInput;
};


export type MutationEnable2FaArgs = {
  input: Enable2faInput;
};


export type MutationGenerateOtpBackupCodesArgs = {
  input: GenerateOtpBackupCodesInput;
};


export type MutationMarkNotificationsAsReadArgs = {
  input: MarkNotificationsAsReadInput;
};


export type MutationMintCardsForUsersArgs = {
  input: MintCardsForUsersInput;
};


export type MutationPrepareAcceptOfferArgs = {
  input: PrepareAcceptOfferInput;
};


export type MutationPrepareCardWithdrawalArgs = {
  input: PrepareCardWithdrawalInput;
};


export type MutationPrepareOfferArgs = {
  input: PrepareOfferInput;
};


export type MutationRejectOfferArgs = {
  input: RejectOfferInput;
};


export type MutationRelayCallArgs = {
  input: RelayCallInput;
};


export type MutationRemoveCardFromDeckArgs = {
  input: RemoveCardFromDeckInput;
};


export type MutationResetCommonDraftArgs = {
  input: ResetCommonDraftInput;
};


export type MutationResetPrivateKeyArgs = {
  input: ResetPrivateKeyInput;
};


export type MutationResumeOnboardingArgs = {
  input: ResumeOnboardingInput;
};


export type MutationSetDeviceTokenArgs = {
  input: SetDeviceTokenInput;
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationSkipOnboardingArgs = {
  input: SkipOnboardingInput;
};


export type MutationUnblockUserOffersArgs = {
  input: UnblockUserOffersInput;
};


export type MutationUpdateSubscriptionArgs = {
  input: UpdateSubscriptionInput;
};


export type MutationUpdateUserProfileArgs = {
  input: UpdateUserProfileInput;
};


export type MutationUpdateUserSettingsArgs = {
  input: UpdateUserSettingsInput;
};


export type MutationVerifyPhoneNumberArgs = {
  input: VerifyPhoneNumberInput;
};

export type NationalTeam = Node & TeamInterface & WithPictureInterface & WithSubscriptionsInterface & {
  __typename?: 'NationalTeam';
  activeCompetitions: Array<Competition>;
  /** The `active_memberships` field cannot be nested within a list. */
  activeMemberships: MembershipConnection;
  /** The `active_players` field cannot be nested within a list. */
  activePlayers: PlayerConnection;
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  code?: Maybe<Scalars['String']>;
  /** @deprecated replaced by colorRight on customBanner */
  colorBottom?: Maybe<Scalars['String']>;
  /** @deprecated replaced by colorLeft on customBanner */
  colorTop?: Maybe<Scalars['String']>;
  country: Country;
  currentUserSubscription?: Maybe<EmailSubscription>;
  customBanner?: Maybe<CustomBanner>;
  founded?: Maybe<Scalars['String']>;
  /** The `games` field cannot be nested within a list. */
  games: GameConnection;
  id: Scalars['ID'];
  internationalCompetition?: Maybe<Competition>;
  lastFiveGames: Array<Game>;
  /** The `latest_games` field cannot be nested within a list. */
  latestGames: GameConnection;
  license: License;
  name: Scalars['String'];
  /** The `open_auctions` field cannot be nested within a list. */
  openAuctions: AuctionConnection;
  optaId?: Maybe<Scalars['String']>;
  pictureSecondaryUrl?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  /** @deprecated Replaced teamPictureUrl on CardType */
  pictureUrlByRarity: Scalars['Json'];
  /** The `players` field cannot be nested within a list. */
  players: PlayerConnection;
  ready: Scalars['Boolean'];
  /** The `recent_departures` field cannot be nested within a list. */
  recentDepartures: PlayerConnection;
  slug: Scalars['String'];
  subscriptionsCount: Scalars['Int'];
  upcomingGames: Array<Maybe<Game>>;
};


export type NationalTeamActiveMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type NationalTeamActivePlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type NationalTeamCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


export type NationalTeamGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate: Scalars['ISO8601DateTime'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  startDate: Scalars['ISO8601DateTime'];
};


export type NationalTeamLatestGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type NationalTeamOpenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type NationalTeamPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


export type NationalTeamPictureUrlByRarityArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


export type NationalTeamPlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type NationalTeamRecentDeparturesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type NationalTeamUpcomingGamesArgs = {
  first: Scalars['Int'];
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID'];
};

/** User notification */
export type Notification = AnnouncementNotification | AuctionNotification | CardNotification | OfferNotification | ReferralRewardNotification | SaleNotification | So5LineupNotification | UserAwardNotification;

/** A notification filter */
export type NotificationCategoryInput = {
  name: Scalars['String'];
  type: Scalars['String'];
};

/** The connection type for Notification. */
export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<NotificationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Notification>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Notification>;
};

/** User Notification */
export type NotificationInterface = {
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  read: Scalars['Boolean'];
  user: CurrentUser;
};

/** A Sorare user notification preference */
export type NotificationPreference = {
  __typename?: 'NotificationPreference';
  defaultValue: Scalars['Json'];
  id: Scalars['ID'];
  name: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
  values: Array<Scalars['Json']>;
};

/** A notification preference */
export type NotificationPreferenceInput = {
  name: Scalars['String'];
  value: Scalars['Json'];
};

/** An OAuth application */
export type OAuthApplication = WithPictureInterface & {
  __typename?: 'OAuthApplication';
  name: Scalars['String'];
  pictureUrl?: Maybe<Scalars['String']>;
  scopes?: Maybe<Scalars['String']>;
};


/** An OAuth application */
export type OAuthApplicationPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

/** An Offer */
export type Offer = Node & OfferInterface & {
  __typename?: 'Offer';
  aasmState: Scalars['String'];
  acceptedAt?: Maybe<Scalars['ISO8601DateTime']>;
  blockchainId?: Maybe<Scalars['String']>;
  cancelledAt?: Maybe<Scalars['ISO8601DateTime']>;
  contract?: Maybe<Contract>;
  createdAt: Scalars['ISO8601DateTime'];
  creditCardFee: Scalars['Float'];
  deal?: Maybe<Deal>;
  endDate: Scalars['ISO8601DateTime'];
  ethereumTransaction?: Maybe<EthereumTransaction>;
  id: Scalars['ID'];
  minSignatureExpirationDate: Scalars['ISO8601DateTime'];
  /** @deprecated Prefer using createdAt instead. */
  mintedAt?: Maybe<Scalars['ISO8601DateTime']>;
  receiveCardOffers: Array<CardOffer>;
  receiveWeiAmount?: Maybe<Scalars['String']>;
  /** Receive Amount in fiat currencies. Not broadcastable for performance reasons. */
  receiveWeiAmountInFiat?: Maybe<Fiat>;
  receiver?: Maybe<Ownerable>;
  /**
   * List of LimitOrder objects used as payload to sign for the `acceptOffer` mutation.
   * @deprecated Use the `prepareAcceptOffer` mutation
   */
  receiverLimitOrders?: Maybe<Array<LimitOrder>>;
  sendCardOffers: Array<CardOffer>;
  sendWeiAmount?: Maybe<Scalars['String']>;
  /** Send Amount in fiat currencies. Not broadcastable for performance reasons. */
  sendWeiAmountInFiat?: Maybe<Fiat>;
  sender: Ownerable;
  startDate: Scalars['ISO8601DateTime'];
};

/** The connection type for Offer. */
export type OfferConnection = {
  __typename?: 'OfferConnection';
  /** A list of edges. */
  edges: Array<OfferEdge>;
  /** A list of nodes. */
  nodes: Array<Offer>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum OfferDirection {
  Received = 'RECEIVED',
  Sent = 'SENT'
}

/** An edge in a connection. */
export type OfferEdge = {
  __typename?: 'OfferEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Offer>;
};

/** An Offer */
export type OfferInterface = {
  aasmState: Scalars['String'];
  acceptedAt?: Maybe<Scalars['ISO8601DateTime']>;
  blockchainId?: Maybe<Scalars['String']>;
  cancelledAt?: Maybe<Scalars['ISO8601DateTime']>;
  contract?: Maybe<Contract>;
  createdAt: Scalars['ISO8601DateTime'];
  creditCardFee: Scalars['Float'];
  deal?: Maybe<Deal>;
  endDate: Scalars['ISO8601DateTime'];
  ethereumTransaction?: Maybe<EthereumTransaction>;
  id: Scalars['ID'];
  minSignatureExpirationDate: Scalars['ISO8601DateTime'];
  /** @deprecated Prefer using createdAt instead. */
  mintedAt?: Maybe<Scalars['ISO8601DateTime']>;
  /**
   * List of LimitOrder objects used as payload to sign for the `acceptOffer` mutation.
   * @deprecated Use the `prepareAcceptOffer` mutation
   */
  receiverLimitOrders?: Maybe<Array<LimitOrder>>;
  sender: Ownerable;
  startDate: Scalars['ISO8601DateTime'];
};

/** An object including all arguments to migrate an offer */
export type OfferMigrationInput = {
  expirationBlock: Scalars['Int'];
  migrateInternalCardsSignature?: InputMaybe<Scalars['String']>;
  migrateMappedCardsSignature?: InputMaybe<Scalars['String']>;
};

/** A user notification regarding an Offer */
export type OfferNotification = NotificationInterface & {
  __typename?: 'OfferNotification';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  offer: Offer;
  read: Scalars['Boolean'];
  user: CurrentUser;
};

export enum OfferType {
  DirectOffer = 'DIRECT_OFFER',
  SingleBuyOffer = 'SINGLE_BUY_OFFER',
  SingleSaleOffer = 'SINGLE_SALE_OFFER'
}

/** An object representing the state of a user onboarding */
export type Onboarding = {
  __typename?: 'Onboarding';
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  skipped: Scalars['Boolean'];
  tasks: Array<OnboardingTask>;
};

/** Onboarding draft configuration */
export type OnboardingDraft = {
  __typename?: 'OnboardingDraft';
  minimumPlayerByPosition: Scalars['Int'];
  redraftCampaign?: Maybe<Scalars['String']>;
  rosterSize: Scalars['Int'];
};

/** An object representing the state of a task in the user onboarding */
export type OnboardingTask = {
  __typename?: 'OnboardingTask';
  /** @deprecated Replaced by drop */
  cardDrop?: Maybe<Array<Card>>;
  drop?: Maybe<Array<CardDrop>>;
  forced: Scalars['Boolean'];
  id: Scalars['ID'];
  name: OnboardingTaskEnum;
  state: OnboardingTaskState;
};

export enum OnboardingTaskEnum {
  AddFavouriteClubs = 'ADD_FAVOURITE_CLUBS',
  ComposeTeam = 'COMPOSE_TEAM',
  FollowPlayer = 'FOLLOW_PLAYER',
  JoinRookie = 'JOIN_ROOKIE',
  PlaceFirstBid = 'PLACE_FIRST_BID'
}

export enum OnboardingTaskState {
  Done = 'DONE',
  Todo = 'TODO',
  ToClaim = 'TO_CLAIM'
}

/** A list of best So5Score by position */
export type OrderedSo5Scores = {
  __typename?: 'OrderedSo5Scores';
  position: Scalars['String'];
  so5Scores: Array<So5Score>;
};

/** An object representing the past or present ownership of a card by a user or a contract */
export type Owner = OwnerInterface & {
  __typename?: 'Owner';
  account?: Maybe<Account>;
  address: Scalars['String'];
  blockchain: Scalars['String'];
  card: Card;
  /** The deal id that created this owner in case it comes from an offer */
  dealId?: Maybe<Scalars['String']>;
  from: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  migratorApproval: Scalars['Boolean'];
  optimistic: Scalars['Boolean'];
  ownerable?: Maybe<Ownerable>;
  /** Card price, in wei. */
  price: Scalars['String'];
  transferType: Scalars['String'];
  userNonce?: Maybe<Scalars['Int']>;
};

/** Card owner (contract or user) */
export type OwnerInterface = {
  account?: Maybe<Account>;
  address: Scalars['String'];
  blockchain: Scalars['String'];
  card: Card;
  /** The deal id that created this owner in case it comes from an offer */
  dealId?: Maybe<Scalars['String']>;
  from: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  migratorApproval: Scalars['Boolean'];
  optimistic: Scalars['Boolean'];
  /** Card price, in wei. */
  price: Scalars['String'];
  transferType: Scalars['String'];
  userNonce?: Maybe<Scalars['Int']>;
};

/** An owner with conversion rates */
export type OwnerWithRates = OwnerInterface & {
  __typename?: 'OwnerWithRates';
  account?: Maybe<Account>;
  address: Scalars['String'];
  blockchain: Scalars['String'];
  card: Card;
  /** The deal id that created this owner in case it comes from an offer */
  dealId?: Maybe<Scalars['String']>;
  from: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  migratorApproval: Scalars['Boolean'];
  optimistic: Scalars['Boolean'];
  ownerable?: Maybe<Ownerable>;
  /** Card price, in wei. */
  price: Scalars['String'];
  priceInFiat: Fiat;
  transferType: Scalars['String'];
  userNonce?: Maybe<Scalars['Int']>;
};

/** Object that can be an owner */
export type Ownerable = AnonymousUser | Contract | User;

/** A pack of cards */
export type Pack = Node & {
  __typename?: 'Pack';
  blockchainId: Scalars['String'];
  blockedByUser: Scalars['Boolean'];
  boughtByUser: Scalars['Boolean'];
  cards: Array<Card>;
  category: Scalars['String'];
  contract: Contract;
  cutOff: Scalars['ISO8601DateTime'];
  deadline: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  priceInEuroCents: Scalars['String'];
  priceInWei: Scalars['String'];
  serial: Scalars['Int'];
  slug: Scalars['String'];
  sold: Scalars['Boolean'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** A Stripe Payment Intent */
export type PaymentIntent = {
  __typename?: 'PaymentIntent';
  amount: Scalars['Int'];
  clientSecret: Scalars['String'];
  id: Scalars['String'];
  paymentMethod?: Maybe<Scalars['String']>;
  saveCard: Scalars['Boolean'];
};

/** Stripe Payment Method */
export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  card: CreditCard;
  id: Scalars['String'];
};

/** A professional football player */
export type Player = Node & WithMemberships & WithPictureInterface & WithPublicCardsInterface & WithSubscriptionsInterface & {
  __typename?: 'Player';
  activeClub?: Maybe<Club>;
  activeClubMembership?: Maybe<Membership>;
  /** @deprecated injury data not reliable */
  activeInjuries: Array<Injury>;
  activeNationalTeam?: Maybe<NationalTeam>;
  age: Scalars['Int'];
  /** All player So5Scores ordered by descending game date */
  allSo5Scores: So5ScoreConnection;
  appearances: Scalars['Int'];
  beforeLastOwningMembership?: Maybe<Membership>;
  bestFoot: Scalars['String'];
  birthDate?: Maybe<Scalars['ISO8601DateTime']>;
  cardSampleUrl?: Maybe<Scalars['String']>;
  cardSupply: Array<CardSeasonSupply>;
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  careerSeasons: Array<Season>;
  clubMemberships: Array<Membership>;
  country: Country;
  currentSeason?: Maybe<Season>;
  currentUserSubscription?: Maybe<EmailSubscription>;
  displayName: Scalars['String'];
  /** @deprecated no more draft */
  draftValue: Scalars['Int'];
  gameStats: Array<Maybe<PlayerGameStats>>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  lastClub?: Maybe<Club>;
  matchName: Scalars['String'];
  memberships: Array<Membership>;
  /** @deprecated Use the auction field on Transfer Market Type */
  openAuctions: AuctionConnection;
  optaId?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  position: Scalars['String'];
  shirtNumber?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  /** Up to 5 last So5Scores used in a So5Fixture */
  so5Scores: Array<Maybe<So5Score>>;
  stats?: Maybe<Stats>;
  status: PlayerStatus;
  subscriptionsCount: Scalars['Int'];
  /** @deprecated Replaced by pictureUrl(derivative: "avatar") */
  tmktImageUrl?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  weight?: Maybe<Scalars['Int']>;
};


/** A professional football player */
export type PlayerAllSo5ScoresArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A professional football player */
export type PlayerCardSampleUrlArgs = {
  rarity: Scalars['String'];
};


/** A professional football player */
export type PlayerCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


/** A professional football player */
export type PlayerCareerSeasonsArgs = {
  type?: InputMaybe<CompetitionType>;
};


/** A professional football player */
export type PlayerGameStatsArgs = {
  last: Scalars['Int'];
  lowCoverage?: InputMaybe<Scalars['Boolean']>;
};


/** A professional football player */
export type PlayerOpenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A professional football player */
export type PlayerPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


/** A professional football player */
export type PlayerSo5ScoresArgs = {
  last: Scalars['Int'];
  lowCoverage?: InputMaybe<Scalars['Boolean']>;
};


/** A professional football player */
export type PlayerStatsArgs = {
  seasonStartYear: Scalars['Int'];
};

/** The connection type for Player. */
export type PlayerConnection = {
  __typename?: 'PlayerConnection';
  /** A list of edges. */
  edges: Array<PlayerEdge>;
  /** A list of nodes. */
  nodes: Array<Player>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PlayerEdge = {
  __typename?: 'PlayerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Player>;
};

/** Stats of a player for a game */
export type PlayerGameStats = {
  __typename?: 'PlayerGameStats';
  accuratePass?: Maybe<Scalars['Int']>;
  cleanSheet?: Maybe<Scalars['Int']>;
  /** @deprecated Replaced by team */
  club: Club;
  crossAccuracy?: Maybe<Scalars['Int']>;
  formationPlace?: Maybe<Scalars['Int']>;
  fouls?: Maybe<Scalars['Int']>;
  game: Game;
  gameStarted?: Maybe<Scalars['Int']>;
  /** @deprecated Replaced by status on game field */
  gameStatus: Scalars['String'];
  goalAssist?: Maybe<Scalars['Int']>;
  goalKicks?: Maybe<Scalars['Int']>;
  goals?: Maybe<Scalars['Int']>;
  goalsConceded?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  live: Scalars['Boolean'];
  lostCorners?: Maybe<Scalars['Int']>;
  minsPlayed?: Maybe<Scalars['Int']>;
  onGameSheet: Scalars['Boolean'];
  ontargetScoringAtt?: Maybe<Scalars['Int']>;
  ownGoals?: Maybe<Scalars['Int']>;
  parries?: Maybe<Scalars['Int']>;
  passAccuracy?: Maybe<Scalars['Int']>;
  penaltiesSaved?: Maybe<Scalars['Int']>;
  penaltyKickMissed?: Maybe<Scalars['Int']>;
  penaltySave?: Maybe<Scalars['Int']>;
  player: Player;
  redCard?: Maybe<Scalars['Int']>;
  /** @deprecated Not relevant with scoring V4 */
  relevantStats: Scalars['Json'];
  reviewed: Scalars['Boolean'];
  saves?: Maybe<Scalars['Int']>;
  shotAccuracy?: Maybe<Scalars['Int']>;
  shotEfficiency?: Maybe<Scalars['Int']>;
  singleGoalGame?: Maybe<Scalars['Int']>;
  so5Score?: Maybe<So5Score>;
  team: Team;
  totalClearance?: Maybe<Scalars['Int']>;
  totalPass?: Maybe<Scalars['Int']>;
  totalScoringAtt?: Maybe<Scalars['Int']>;
  totalTackle?: Maybe<Scalars['Int']>;
  wasFouled?: Maybe<Scalars['Int']>;
  yellowCard?: Maybe<Scalars['Int']>;
};

/** Represents a list of players available for a minting quota */
export type PlayerPool = {
  __typename?: 'PlayerPool';
  common?: Maybe<TieredPlayerPool>;
  computedAt: Scalars['ISO8601DateTime'];
  limited?: Maybe<TieredPlayerPool>;
  rare?: Maybe<TieredPlayerPool>;
  superRare?: Maybe<TieredPlayerPool>;
  unique?: Maybe<TieredPlayerPool>;
};

/** Player status based on latest games he has played */
export type PlayerStatus = {
  __typename?: 'PlayerStatus';
  id: Scalars['ID'];
  lastFifteenSo5Appearances?: Maybe<Scalars['Int']>;
  lastFifteenSo5AverageScore?: Maybe<Scalars['Float']>;
  lastFiveSo5Appearances?: Maybe<Scalars['Int']>;
  lastFiveSo5AverageScore?: Maybe<Scalars['Float']>;
  playingStatus?: Maybe<Scalars['String']>;
};

/** A draftable football player */
export type PlayerValue = {
  __typename?: 'PlayerValue';
  displayName: Scalars['String'];
  draftValue: Scalars['Int'];
  id: Scalars['ID'];
  position: Scalars['String'];
  slug: Scalars['String'];
};

/** A professional football player with current season supply */
export type PlayerWithSupply = {
  __typename?: 'PlayerWithSupply';
  availableSupply?: Maybe<Scalars['Int']>;
  player: Player;
  slug: Scalars['String'];
};

export enum Position {
  Coach = 'Coach',
  Defender = 'Defender',
  Forward = 'Forward',
  Goalkeeper = 'Goalkeeper',
  Midfielder = 'Midfielder',
  Unknown = 'Unknown'
}

/** An object representing the breakdown of the power of a Card */
export type PowerBreakdown = {
  __typename?: 'PowerBreakdown';
  captain: Scalars['String'];
  fidelity: Scalars['String'];
  scarcity: Scalars['String'];
  season: Scalars['String'];
  version: Scalars['Int'];
  xp: Scalars['String'];
};

/** Public user information */
export type PublicUserInfoInterface = {
  /** @deprecated Replaced by allTimeBestDecksInFormation */
  allTimeBestDecks: Array<Deck>;
  allTimeBestDecksInFormation: Array<DeckInFormation>;
  /**
   * The `auctions` field cannot be nested within a list.
   * @deprecated Use englishAuctions instead
   */
  auctions: AuctionConnection;
  awards: Array<UserAward>;
  /** The `bought_single_sale_offers` field cannot be nested within a list. */
  boughtSingleSaleOffers: SingleSaleOfferConnection;
  /**
   * The `buying_auctions` field cannot be nested within a list.
   * @deprecated Use buyingEnglishAuctions instead
   */
  buyingAuctions: Array<Auction>;
  /** The `buying_english_auctions` field cannot be nested within a list. */
  buyingEnglishAuctions: Array<EnglishAuction>;
  cardCounts: CardCount;
  /** @deprecated Use paginatedCards instead */
  cards: Array<Card>;
  cardsCount: Scalars['Int'];
  createdAt: Scalars['ISO8601DateTime'];
  /** The `custom_decks` field cannot be nested within a list. */
  customDecks: CustomDeckConnection;
  /**
   * The `ended_buying_auctions` field cannot be nested within a list.
   * @deprecated Use endedBuyingEnglishAuctions instead
   */
  endedBuyingAuctions: AuctionConnection;
  /** The `ended_with_no_buyer_single_sale_offers` field cannot be nested within a list. */
  endedWithNoBuyerSingleSaleOffers: SingleSaleOfferConnection;
  /** The `english_auctions` field cannot be nested within a list. */
  englishAuctions: EnglishAuctionConnection;
  ethVaultId?: Maybe<Scalars['Int']>;
  ethereumAddress: Scalars['String'];
  followed?: Maybe<EmailSubscription>;
  /** The `followers` field cannot be nested within a list. */
  followers: UserWithSubscriptionSlugConnection;
  followersCount: Scalars['Int'];
  /** The `following` field cannot be nested within a list. */
  following: UserWithSubscriptionSlugConnection;
  followingCount: Scalars['Int'];
  highlightedDeck?: Maybe<HighlightedDeck>;
  id: Scalars['ID'];
  /**
   * The `live_single_sale_offers` field cannot be nested within a list.
   * @deprecated Use the paginated version instead
   */
  liveSingleSaleOffers: Array<SingleSaleOffer>;
  /**
   * The `lost_auctions` field cannot be nested within a list.
   * @deprecated Use lostEnglishAuctions instead
   */
  lostAuctions: AuctionConnection;
  /** The `lost_english_auctions` field cannot be nested within a list. */
  lostEnglishAuctions: EnglishAuctionConnection;
  nickname: Scalars['String'];
  /** @deprecated Secondary market is offer only */
  openAuctions: Array<Auction>;
  /** @deprecated Secondary market is offer only */
  openEnglishAuctions: Array<EnglishAuction>;
  /** The `paginated_cards` field cannot be nested within a list. */
  paginatedCards: CardConnection;
  /** The `paginated_live_single_sale_offers` field cannot be nested within a list. */
  paginatedLiveSingleSaleOffers: SingleSaleOfferConnection;
  profile: UserProfile;
  /** The `single_sale_offers` field cannot be nested within a list. */
  singleSaleOffers: SingleSaleOfferConnection;
  slug: Scalars['String'];
  /** The `sold_single_sale_offers` field cannot be nested within a list. */
  soldSingleSaleOffers: SingleSaleOfferConnection;
  sorareAddress?: Maybe<Scalars['String']>;
  starkKey?: Maybe<Scalars['String']>;
  starkKeyRegistered: Scalars['Boolean'];
  /**
   * The `won_auctions` field cannot be nested within a list.
   * @deprecated Use wonEnglishAuctions instead
   */
  wonAuctions: AuctionConnection;
  /** The `won_english_auctions` field cannot be nested within a list. */
  wonEnglishAuctions: EnglishAuctionConnection;
};


/** Public user information */
export type PublicUserInfoInterfaceAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceBoughtSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceBuyingAuctionsArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** Public user information */
export type PublicUserInfoInterfaceBuyingEnglishAuctionsArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** Public user information */
export type PublicUserInfoInterfaceCustomDecksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Public user information */
export type PublicUserInfoInterfaceEndedBuyingAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Public user information */
export type PublicUserInfoInterfaceEndedWithNoBuyerSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Public user information */
export type PublicUserInfoInterfaceFollowingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Public user information */
export type PublicUserInfoInterfaceLiveSingleSaleOffersArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** Public user information */
export type PublicUserInfoInterfaceLostAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceLostEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfacePaginatedCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


/** Public user information */
export type PublicUserInfoInterfacePaginatedLiveSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceSoldSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceWonAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** Public user information */
export type PublicUserInfoInterfaceWonEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a list of all cards */
  allCards: CardConnection;
  /** Get latest announcements */
  announcements: AnnouncementConnection;
  /**
   * Fetch auctions
   * @deprecated Use transferMarket type instead
   */
  auctions: AuctionConnection;
  /** Get a bundled auction */
  bundledAuction: BundledAuction;
  /**
   * Fetch bundled auctions
   * @deprecated Use transferMarket type instead
   */
  bundledAuctions: BundledAuctionConnection;
  /** Get a card */
  card: Card;
  /** Get a card with its blockchain ID */
  cardByBlockchainId: Card;
  /** Get a cart edition */
  cardEdition: CardEdition;
  /** Get a card sample picture quacking like a card */
  cardSamplePicture: Card;
  /** Get a list of cards */
  cards: Array<Card>;
  /** Get a club */
  club: Club;
  /** Get the list of clubs that are released and minted */
  clubsReady: Array<Club>;
  /** Get a Competition */
  competition: Competition;
  /** Get config */
  config: Config;
  /** Get a country */
  country: Country;
  /** Get the current block height of Ethereum blockchain */
  currentBlockHeight: Scalars['Int'];
  /**
   * Fetch the current So5 Fixture
   * @deprecated Use default value of so5Fixture
   */
  currentSo5Fixture: So5Fixture;
  /** Fetch the current user. */
  currentUser?: Maybe<CurrentUser>;
  /** Get a CustomDeck */
  customDeck: CustomDeck;
  /**
   * Get a Deck by slug
   * @deprecated Replaced by deckInFormation
   */
  deck: Deck;
  /** Get a DeckInFormation */
  deckInFormation: DeckInFormation;
  /** Get an english auction */
  englishAuction: BundledAuction;
  /** Get a list of cards owned by an ethereum account */
  ethereumCards: Array<Card>;
  /** Get the featured list of So5Fixture (currently relevant So5 fixtures) */
  featuredSo5Fixtures: Array<So5Fixture>;
  /** Get a Game */
  game: Game;
  leaguesOpenForGameStats: Array<Competition>;
  /** Get a national team */
  nationalTeam: NationalTeam;
  /** Get the next batch nonce for a given address */
  nextRelayBatchNonce: Scalars['Int'];
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Fetches a list of objects given a list of IDs. */
  nodes: Array<Maybe<Node>>;
  /** Get an OAuth application from the client id */
  oauthApplication: OAuthApplication;
  /**
   * Get a pack
   * @deprecated We do not sell packs anymore
   */
  pack: Pack;
  /**
   * Get packs on sale
   * @deprecated We do not sell packs anymore
   */
  packs: Array<Pack>;
  /** Get a player */
  player: Player;
  /** Get a list of players */
  players: Array<Player>;
  /** Get a potential referrer for a given name */
  referrer?: Maybe<Scalars['String']>;
  /**
   * Get a list of released players with their value
   * @deprecated Not maintained anymore
   */
  releasedPlayerValues: Array<PlayerValue>;
  /** Get a season */
  season: Season;
  /**
   * Fetch single sale offers
   * @deprecated Use transferMarket type instead
   */
  singleSaleOffers: SingleSaleOfferConnection;
  /** Get paginated available skins */
  skins: SkinConnection;
  /** Get a So5Fixture */
  so5Fixture: So5Fixture;
  /** Get a list of So5Fixture */
  so5Fixtures: So5FixtureConnection;
  /** Get a So5Leaderboard */
  so5Leaderboard: So5Leaderboard;
  /** Get a So5League */
  so5League: So5League;
  /** Get a So5Lineup */
  so5Lineup: So5Lineup;
  /** Get a So5Ranking */
  so5Ranking: So5Ranking;
  /**
   * Get paginated rankings for a leaderboard
   * @deprecated use so5Leaderboard query
   */
  so5Rankings: So5RankingsPaginated;
  /** Get a So5Reward */
  so5Reward: So5Reward;
  /** Get a So5Score */
  so5Score: So5Score;
  /** Get a Starkware account. */
  starkwareAccount: StarkwareAccount;
  transferMarket: TransferMarket;
  /** Get a user. */
  user: User;
  /** Get a list of users. */
  users: Array<User>;
};


export type QueryAllCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryAnnouncementsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryBundledAuctionArgs = {
  slug: Scalars['String'];
};


export type QueryBundledAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryCardArgs = {
  slug: Scalars['String'];
};


export type QueryCardByBlockchainIdArgs = {
  blockchainId: Scalars['String'];
};


export type QueryCardEditionArgs = {
  name: Scalars['String'];
};


export type QueryCardSamplePictureArgs = {
  id: Scalars['String'];
};


export type QueryCardsArgs = {
  age?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryClubArgs = {
  slug: Scalars['String'];
};


export type QueryCompetitionArgs = {
  slug: Scalars['String'];
};


export type QueryCountryArgs = {
  slug: Scalars['String'];
};


export type QueryCustomDeckArgs = {
  slug: Scalars['String'];
};


export type QueryDeckArgs = {
  slug: Scalars['String'];
};


export type QueryDeckInFormationArgs = {
  slug: Scalars['String'];
};


export type QueryEnglishAuctionArgs = {
  slug: Scalars['String'];
};


export type QueryEthereumCardsArgs = {
  address: Scalars['String'];
};


export type QueryFeaturedSo5FixturesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryGameArgs = {
  id: Scalars['ID'];
};


export type QueryNationalTeamArgs = {
  slug: Scalars['String'];
};


export type QueryNextRelayBatchNonceArgs = {
  address: Scalars['String'];
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryOauthApplicationArgs = {
  clientId: Scalars['String'];
};


export type QueryPackArgs = {
  id: Scalars['String'];
};


export type QueryPacksArgs = {
  size?: InputMaybe<Scalars['Int']>;
};


export type QueryPlayerArgs = {
  slug: Scalars['String'];
};


export type QueryPlayersArgs = {
  slugs: Array<Scalars['String']>;
};


export type QueryReferrerArgs = {
  name: Scalars['String'];
};


export type QuerySeasonArgs = {
  startYear: Scalars['Int'];
};


export type QuerySingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QuerySkinsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<SkinPosition>;
  unlockedOnly?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySo5FixtureArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QuerySo5FixturesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QuerySo5LeaderboardArgs = {
  slug: Scalars['String'];
};


export type QuerySo5LeagueArgs = {
  slug: Scalars['String'];
};


export type QuerySo5LineupArgs = {
  id: Scalars['ID'];
};


export type QuerySo5RankingArgs = {
  id: Scalars['ID'];
};


export type QuerySo5RankingsArgs = {
  page: Scalars['Int'];
  pageSize?: InputMaybe<Scalars['Int']>;
  so5LeaderboardSlug: Scalars['String'];
};


export type QuerySo5RewardArgs = {
  slug: Scalars['String'];
};


export type QuerySo5ScoreArgs = {
  id: Scalars['ID'];
};


export type QueryStarkwareAccountArgs = {
  starkKey: Scalars['String'];
};


export type QueryUserArgs = {
  slug: Scalars['String'];
};


export type QueryUsersArgs = {
  slugs: Array<Scalars['String']>;
};

export type Range = {
  __typename?: 'Range';
  /** Max price, in wei. */
  max: Scalars['String'];
  /** Min price, in wei. */
  min: Scalars['String'];
};

export type RaritiesCardLayout = {
  __typename?: 'RaritiesCardLayout';
  common?: Maybe<CardLayout>;
  limited?: Maybe<CardLayout>;
  rare?: Maybe<CardLayout>;
  superRare?: Maybe<CardLayout>;
  unique?: Maybe<CardLayout>;
};

export enum Rarity {
  Common = 'common',
  Limited = 'limited',
  Rare = 'rare',
  SuperRare = 'super_rare',
  Unique = 'unique'
}

/** A referral */
export type Referral = Node & {
  __typename?: 'Referral';
  aasmState: Scalars['String'];
  expirationDate: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  referee: User;
  refereeCardsBoughtAtAuctionCount: Scalars['Int'];
  refereeConfirmedAt?: Maybe<Scalars['ISO8601DateTime']>;
  refereeIdentification?: Maybe<Scalars['String']>;
  refereeInvitationSentAt?: Maybe<Scalars['ISO8601DateTime']>;
  referrer: Referrer;
  referrerReward?: Maybe<ReferralReward>;
};

export type ReferralPaginated = {
  __typename?: 'ReferralPaginated';
  id: Scalars['String'];
  pages: Scalars['Int'];
  referrals: Array<Referral>;
  totalCount: Scalars['Int'];
};

/** A referral reward */
export type ReferralReward = {
  __typename?: 'ReferralReward';
  card: Card;
  id: Scalars['ID'];
  shippingState: ShippingState;
};

/** A user notification regarding a referral reward */
export type ReferralRewardNotification = NotificationInterface & {
  __typename?: 'ReferralRewardNotification';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  read: Scalars['Boolean'];
  referralReward: ReferralReward;
  user: CurrentUser;
};

export enum ReferralState {
  All = 'ALL',
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  InProgress = 'IN_PROGRESS'
}

/** Object that can be a referrer */
export type Referrer = User | UserSource;

/** A rewarded card */
export type RewardCard = {
  __typename?: 'RewardCard';
  card: Card;
  id: Scalars['ID'];
  pictureUrl?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['String']>;
  so5Reward?: Maybe<So5Reward>;
  upgradedQuality?: Maybe<Scalars['String']>;
};

/** A user notification regarding a Sale */
export type SaleNotification = NotificationInterface & {
  __typename?: 'SaleNotification';
  buyer?: Maybe<User>;
  card: Card;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  priceInWei: Scalars['String'];
  read: Scalars['Boolean'];
  seller: User;
  user: CurrentUser;
};

/** A football season */
export type Season = WithPublicCardsInterface & {
  __typename?: 'Season';
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  id: Scalars['ID'];
  name: Scalars['String'];
  startYear: Scalars['Int'];
};


/** A football season */
export type SeasonCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};

/** A player season picture */
export type SeasonPicture = Node & WithPictureInterface & {
  __typename?: 'SeasonPicture';
  chinY?: Maybe<Scalars['Float']>;
  chinYTarget?: Maybe<Scalars['Int']>;
  /** @deprecated Replaced by team */
  club?: Maybe<Club>;
  eyeLeft: FaceLandmark;
  eyeRight: FaceLandmark;
  height: Scalars['Int'];
  id: Scalars['ID'];
  kit?: Maybe<Scalars['String']>;
  nose: FaceLandmark;
  offsetX: Scalars['Int'];
  offsetY: Scalars['Int'];
  pictureUrl?: Maybe<Scalars['String']>;
  player: Player;
  team: Team;
  width: Scalars['Int'];
};


/** A player season picture */
export type SeasonPicturePictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

export enum ShippingState {
  Claimed = 'CLAIMED',
  ReadyToClaim = 'READY_TO_CLAIM'
}

/** A Single Buy Offer Min Price */
export type SingleBuyOfferMinPrice = Node & {
  __typename?: 'SingleBuyOfferMinPrice';
  amount: Scalars['String'];
  card: Card;
  id: Scalars['ID'];
  isPrivate: Scalars['Boolean'];
  user: User;
};

/** An Single Sale Offer on a Card */
export type SingleSaleOffer = Node & OfferInterface & {
  __typename?: 'SingleSaleOffer';
  aasmState: Scalars['String'];
  acceptedAt?: Maybe<Scalars['ISO8601DateTime']>;
  acceptor?: Maybe<User>;
  /** @deprecated Prefer using acceptor instead */
  actualReceiver?: Maybe<User>;
  /** @deprecated subscriptions do not scale if user dependent */
  belongsToUser: Scalars['Boolean'];
  blockchainId?: Maybe<Scalars['String']>;
  cancelledAt?: Maybe<Scalars['ISO8601DateTime']>;
  card: Card;
  contract?: Maybe<Contract>;
  createdAt: Scalars['ISO8601DateTime'];
  creditCardFee: Scalars['Float'];
  deal?: Maybe<Deal>;
  endDate: Scalars['ISO8601DateTime'];
  ethereumTransaction?: Maybe<EthereumTransaction>;
  id: Scalars['ID'];
  minSignatureExpirationDate: Scalars['ISO8601DateTime'];
  /** @deprecated Prefer using createdAt instead. */
  mintedAt?: Maybe<Scalars['ISO8601DateTime']>;
  open: Scalars['Boolean'];
  price: Scalars['String'];
  priceInFiat: Fiat;
  /**
   * List of LimitOrder objects used as payload to sign for the `acceptOffer` mutation.
   * @deprecated Use the `prepareAcceptOffer` mutation
   */
  receiverLimitOrders?: Maybe<Array<LimitOrder>>;
  sender: Ownerable;
  startDate: Scalars['ISO8601DateTime'];
};

/** The connection type for SingleSaleOffer. */
export type SingleSaleOfferConnection = {
  __typename?: 'SingleSaleOfferConnection';
  /** A list of edges. */
  edges: Array<SingleSaleOfferEdge>;
  /** A list of nodes. */
  nodes: Array<SingleSaleOffer>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type SingleSaleOfferEdge = {
  __typename?: 'SingleSaleOfferEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<SingleSaleOffer>;
};

/** A skin to customize a user gallery */
export type Skin = Node & {
  __typename?: 'Skin';
  color?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  pictureUrl: Scalars['String'];
  position: SkinPosition;
  price: Scalars['Int'];
  quality: SkinQuality;
  unlocked: Scalars['Boolean'];
};

/** The connection type for Skin. */
export type SkinConnection = {
  __typename?: 'SkinConnection';
  /** A list of edges. */
  edges: Array<SkinEdge>;
  /** A list of nodes. */
  nodes: Array<Skin>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SkinEdge = {
  __typename?: 'SkinEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Skin>;
};

export enum SkinPosition {
  Banner = 'BANNER',
  Shield = 'SHIELD'
}

export enum SkinQuality {
  Amateur = 'AMATEUR',
  Legend = 'LEGEND',
  Pro = 'PRO',
  SemiPro = 'SEMI_PRO'
}

/** A SO5 Appearance - a card selected in a team for a SO5 fixture */
export type So5Appearance = Node & {
  __typename?: 'So5Appearance';
  bonus?: Maybe<Scalars['Float']>;
  captain: Scalars['Boolean'];
  card: Card;
  cleanScore?: Maybe<Scalars['Float']>;
  game?: Maybe<Game>;
  id: Scalars['ID'];
  playerGameStats?: Maybe<PlayerGameStats>;
  relevantStats: Scalars['Json'];
  score?: Maybe<Scalars['Float']>;
  so5Fixture: So5Fixture;
  /** @deprecated Not maintained anymore, use game instead */
  so5Game?: Maybe<So5Game>;
  so5Lineup: So5Lineup;
  so5Score?: Maybe<So5Score>;
  status: Scalars['String'];
};

/** A SO5 Appearance - a card selected in a team for a SO5 fixture */
export type So5AppearanceInput = {
  captain: Scalars['Boolean'];
  cardSlug: Scalars['String'];
};

/** The at least of clubs rule of a So5Leaderboard */
export type So5AtLeastOfClubs = {
  __typename?: 'So5AtLeastOfClubs';
  clubs: Array<Club>;
  min: Scalars['Int'];
};

/** The at least of competitions rule of a So5Leaderboard */
export type So5AtLeastOfCompetitions = {
  __typename?: 'So5AtLeastOfCompetitions';
  competitions: Array<Competition>;
  min: Scalars['Int'];
};

/** A SO5 fixture */
export type So5Fixture = Node & {
  __typename?: 'So5Fixture';
  aasmState: Scalars['String'];
  /** @deprecated Can be found with mySo5Lineups */
  appearancesInFixtureInterval: Array<So5Appearance>;
  canCompose: Scalars['Boolean'];
  cutOffDate: Scalars['ISO8601DateTime'];
  endDate: Scalars['ISO8601DateTime'];
  eventType: Scalars['String'];
  gameWeek: Scalars['Int'];
  /** The `games` field cannot be nested within a list. */
  games: Array<Game>;
  hashedSalt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The `my_so5_games` field cannot be nested within a list. */
  mySo5Games: Array<Game>;
  mySo5Lineups: Array<So5Lineup>;
  mySo5Rankings: Array<So5Ranking>;
  mySo5Rewards: Array<So5Reward>;
  myTotalXpWon: Scalars['Int'];
  /** The `next` field cannot be nested within a list. */
  next?: Maybe<So5Fixture>;
  /** The `ordered_so5_scores` field cannot be nested within a list. */
  orderedSo5Scores: Array<OrderedSo5Scores>;
  /** Get ordered So5Score by position */
  orderedSo5ScoresByPosition: So5ScoreConnection;
  /** The `previous` field cannot be nested within a list. */
  previous?: Maybe<So5Fixture>;
  replayedFixture?: Maybe<So5Fixture>;
  salt?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  /** The `so5_leaderboards` field cannot be nested within a list. */
  so5Leaderboards: Array<So5Leaderboard>;
  /** The `so5_leagues` field cannot be nested within a list. */
  so5Leagues: Array<So5League>;
  /** @deprecated Use leaderboard rewards instead */
  so5Rewards: Array<So5Reward>;
  specialWeeklyBanner?: Maybe<SpecialWeeklyBanner>;
  startDate: Scalars['ISO8601DateTime'];
};


/** A SO5 fixture */
export type So5FixtureOrderedSo5ScoresArgs = {
  first: Scalars['Int'];
};


/** A SO5 fixture */
export type So5FixtureOrderedSo5ScoresByPositionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  minScore?: InputMaybe<Scalars['Int']>;
  position: Scalars['String'];
};

/** The connection type for So5Fixture. */
export type So5FixtureConnection = {
  __typename?: 'So5FixtureConnection';
  /** A list of edges. */
  edges: Array<So5FixtureEdge>;
  /** A list of nodes. */
  nodes: Array<So5Fixture>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type So5FixtureEdge = {
  __typename?: 'So5FixtureEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<So5Fixture>;
};

/** A SO5 Game - a game included in a SO5 fixture (deprecated) */
export type So5Game = Node & {
  __typename?: 'So5Game';
  game: Game;
  id: Scalars['ID'];
  so5Fixture: So5Fixture;
};

/** A SO5 Leaderboard */
export type So5Leaderboard = So5LeaderboardRulesInterface & {
  __typename?: 'So5Leaderboard';
  algoliaFilters?: Maybe<Scalars['String']>;
  division: Scalars['Int'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  mySo5Lineups: Array<So5Lineup>;
  mySo5Rankings: Array<So5Ranking>;
  name: Scalars['String'];
  powerCap?: Maybe<Scalars['Float']>;
  rewardedLineupsCount: Scalars['Int'];
  rewards: Scalars['Json'];
  rules?: Maybe<So5Rules>;
  scoringEngine?: Maybe<Scalars['String']>;
  /** @deprecated Not in use anymore */
  shieldName?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  so5Fixture: So5Fixture;
  so5League: So5League;
  so5Lineup?: Maybe<So5Lineup>;
  /** @deprecated Use so5LineupsPaginated instead */
  so5Lineups: Array<So5Lineup>;
  so5LineupsCount: Scalars['Int'];
  /** The `so5_lineups_paginated` field cannot be nested within a list. */
  so5LineupsPaginated: So5LineupConnection;
  /** The `so5_rankings` field cannot be nested within a list. */
  so5Rankings: So5RankingConnection;
  /** Get paginated rankings for a leaderboard */
  so5RankingsPaginated: So5RankingsPaginated;
  /** The `so5_rankings_preview` field cannot be nested within a list. */
  so5RankingsPreview: Array<So5Ranking>;
  /** The `so5_rewards` field cannot be nested within a list. */
  so5Rewards: So5RewardConnection;
  teamsCap?: Maybe<Scalars['Int']>;
};


/** A SO5 Leaderboard */
export type So5LeaderboardSo5LineupArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** A SO5 Leaderboard */
export type So5LeaderboardSo5LineupsPaginatedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A SO5 Leaderboard */
export type So5LeaderboardSo5RankingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A SO5 Leaderboard */
export type So5LeaderboardSo5RankingsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


/** A SO5 Leaderboard */
export type So5LeaderboardSo5RewardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** So5Leaderboard Rules */
export type So5LeaderboardRulesInterface = {
  rules?: Maybe<So5Rules>;
};

/** A So5 league */
export type So5League = Node & {
  __typename?: 'So5League';
  category: Scalars['String'];
  /** @deprecated No longer maintained */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  rewardPool: Array<PlayerWithSupply>;
  slug: Scalars['String'];
  so5Fixture: So5Fixture;
  so5Leaderboards: Array<So5Leaderboard>;
};


/** A So5 league */
export type So5LeagueRewardPoolArgs = {
  quality: Scalars['String'];
  rarity: Scalars['String'];
};

/** A SO5 lineup */
export type So5Lineup = Node & SocialPicturesInterface & {
  __typename?: 'So5Lineup';
  draft: Scalars['Boolean'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** @deprecated use so5Rankings.score */
  score?: Maybe<Scalars['String']>;
  so5Appearances: Array<So5Appearance>;
  so5Fixture: So5Fixture;
  so5Leaderboard?: Maybe<So5Leaderboard>;
  so5Rankings: Array<So5Ranking>;
  socialPictureUrls: SocialPictureDerivative;
  user: User;
};

/** The connection type for So5Lineup. */
export type So5LineupConnection = {
  __typename?: 'So5LineupConnection';
  /** A list of edges. */
  edges: Array<So5LineupEdge>;
  /** A list of nodes. */
  nodes: Array<So5Lineup>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type So5LineupEdge = {
  __typename?: 'So5LineupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<So5Lineup>;
};

/** A user notification regarding a So5Lineup */
export type So5LineupNotification = NotificationInterface & {
  __typename?: 'So5LineupNotification';
  card?: Maybe<Card>;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  read: Scalars['Boolean'];
  so5Lineup: So5Lineup;
  user: CurrentUser;
};

/** A SO5 Ranking */
export type So5Ranking = Node & {
  __typename?: 'So5Ranking';
  eligibleForReward: Scalars['Boolean'];
  id: Scalars['ID'];
  ranking?: Maybe<Scalars['Int']>;
  score: Scalars['Float'];
  so5Fixture: So5Fixture;
  so5Leaderboard: So5Leaderboard;
  so5Lineup: So5Lineup;
};

/** The connection type for So5Ranking. */
export type So5RankingConnection = {
  __typename?: 'So5RankingConnection';
  /** A list of edges. */
  edges: Array<So5RankingEdge>;
  /** A list of nodes. */
  nodes: Array<So5Ranking>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type So5RankingEdge = {
  __typename?: 'So5RankingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<So5Ranking>;
};

export type So5RankingsPaginated = {
  __typename?: 'So5RankingsPaginated';
  currentPage: Scalars['Int'];
  id: Scalars['String'];
  pages: Scalars['Int'];
  so5Rankings: Array<So5Ranking>;
  totalCount: Scalars['Int'];
};

/** The rarity rule of a So5Leaderboard */
export type So5Rarity = {
  __typename?: 'So5Rarity';
  common: ValueBoundaries;
  limited: ValueBoundaries;
  rare: ValueBoundaries;
  superRare: ValueBoundaries;
  unique: ValueBoundaries;
};

/** A SO5 Reward */
export type So5Reward = Node & {
  __typename?: 'So5Reward';
  aasmState: Scalars['String'];
  /** @deprecated Replaced by rewardCards */
  cards: Array<Card>;
  id: Scalars['ID'];
  /** @deprecated Replaced by so5Ranking */
  ranking: Scalars['Int'];
  rewardCards: Array<RewardCard>;
  slug: Scalars['String'];
  so5Fixture: So5Fixture;
  so5Leaderboard: So5Leaderboard;
  so5Ranking?: Maybe<So5Ranking>;
  weiAmount: Scalars['String'];
};

/** The connection type for So5Reward. */
export type So5RewardConnection = {
  __typename?: 'So5RewardConnection';
  /** A list of edges. */
  edges: Array<So5RewardEdge>;
  /** A list of nodes. */
  nodes: Array<So5Reward>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type So5RewardEdge = {
  __typename?: 'So5RewardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<So5Reward>;
};

/** The rule set of a So5Leaderboard */
export type So5Rules = {
  __typename?: 'So5Rules';
  activeClubs?: Maybe<Array<Club>>;
  age?: Maybe<Age>;
  atLeastOfClubs?: Maybe<So5AtLeastOfClubs>;
  atLeastOfCompetitions?: Maybe<So5AtLeastOfCompetitions>;
  averageScore?: Maybe<ValueOpenBoundaries>;
  captainRarities?: Maybe<Array<Scalars['String']>>;
  /** @deprecated No longer maintained */
  clubs?: Maybe<Array<Club>>;
  competitions?: Maybe<Array<Competition>>;
  id: Scalars['ID'];
  internationalCompetitions?: Maybe<Array<Competition>>;
  leagues?: Maybe<Array<Competition>>;
  /** @deprecated replaced by age */
  maxAge?: Maybe<Scalars['Int']>;
  /** @deprecated replaced by age */
  minAge?: Maybe<Scalars['Int']>;
  nationalities?: Maybe<Array<Country>>;
  notDomesticCompetitions?: Maybe<Array<Competition>>;
  notNationalities?: Maybe<Array<Country>>;
  rarities?: Maybe<Array<Scalars['String']>>;
  rarityLimits?: Maybe<So5Rarity>;
  /** @deprecated No longer maintained */
  sameClub?: Maybe<Scalars['Boolean']>;
  sameNationality?: Maybe<Scalars['Boolean']>;
  seasons?: Maybe<Array<Season>>;
  serialNumber?: Maybe<Scalars['String']>;
};

/** A SO5 Score */
export type So5Score = Node & {
  __typename?: 'So5Score';
  detailedScore: Array<StatScore>;
  id: Scalars['ID'];
  player: Player;
  playerGameStats: PlayerGameStats;
  position: Scalars['String'];
  score?: Maybe<Scalars['Float']>;
  scoringVersion: Scalars['Int'];
};

/** The connection type for So5Score. */
export type So5ScoreConnection = {
  __typename?: 'So5ScoreConnection';
  /** A list of edges. */
  edges: Array<So5ScoreEdge>;
  /** A list of nodes. */
  nodes: Array<So5Score>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type So5ScoreEdge = {
  __typename?: 'So5ScoreEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<So5Score>;
};

/** A Social picture with all its derivative */
export type SocialPictureDerivative = {
  __typename?: 'SocialPictureDerivative';
  post?: Maybe<Scalars['String']>;
  square?: Maybe<Scalars['String']>;
  story?: Maybe<Scalars['String']>;
};

/** Social pictures */
export type SocialPicturesInterface = {
  socialPictureUrls: SocialPictureDerivative;
};

/** An encrypted private key */
export type SorarePrivateKey = {
  __typename?: 'SorarePrivateKey';
  encryptedPrivateKey: Scalars['String'];
  iv: Scalars['String'];
  salt: Scalars['String'];
};

/** An encrypted private key */
export type SorarePrivateKeyAttributes = {
  encryptedPrivateKey: Scalars['String'];
  iv: Scalars['String'];
  salt: Scalars['String'];
};

export enum SortingOption {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** A special weekly banner */
export type SpecialWeeklyBanner = WithPictureInterface & {
  __typename?: 'SpecialWeeklyBanner';
  background?: Maybe<Scalars['String']>;
  cardUrl?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  hrefLabel?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  logoUrl?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  prizeLabel?: Maybe<Scalars['String']>;
  sectionName?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};


/** A special weekly banner */
export type SpecialWeeklyBannerPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

export type StarkSignatureInput = {
  /** Signature of the associated LimitOrder object, transported as JSON. Computed with `@sorare/crypto`. */
  data: Scalars['String'];
  /** Mandatory if expirationTimestamp is not set */
  expiration?: InputMaybe<Scalars['ISO8601DateTime']>;
  /** Required if expiration is not set */
  expirationTimestamp?: InputMaybe<Scalars['Int']>;
  /** Nonce of the associated LimitOrder object. Retrieved through the `limitOrders` field. */
  nonce: Scalars['Int'];
  starkKey?: InputMaybe<Scalars['String']>;
};

/** A Starkware Account */
export type StarkwareAccount = {
  __typename?: 'StarkwareAccount';
  id: Scalars['ID'];
  starkKey: Scalars['String'];
  user?: Maybe<User>;
};

/** Withdrawal of a token to Ethereum */
export type StarkwareWithdrawal = {
  __typename?: 'StarkwareWithdrawal';
  aasmState: Scalars['String'];
  card?: Maybe<Card>;
  destination?: Maybe<Scalars['String']>;
  ethereumTransaction?: Maybe<EthereumTransaction>;
  id: Scalars['ID'];
};

export enum StatCategory {
  Attacking = 'ATTACKING',
  Defending = 'DEFENDING',
  General = 'GENERAL',
  Goalkeeping = 'GOALKEEPING',
  NegativeDecisiveStat = 'NEGATIVE_DECISIVE_STAT',
  Passing = 'PASSING',
  PositiveDecisiveStat = 'POSITIVE_DECISIVE_STAT',
  Possession = 'POSSESSION',
  Unknown = 'UNKNOWN'
}

/** Score contribution of a given stat */
export type StatScore = {
  __typename?: 'StatScore';
  category: StatCategory;
  points: Scalars['Float'];
  stat: Scalars['String'];
  statValue: Scalars['Float'];
  totalScore: Scalars['Float'];
};

/** Stats of a player for a competition */
export type Stats = {
  __typename?: 'Stats';
  appearances: Scalars['Int'];
  assists: Scalars['Int'];
  goals: Scalars['Int'];
  id: Scalars['String'];
  minutesPlayed: Scalars['Int'];
  /** @deprecated Use the player in the upper context instead */
  player?: Maybe<Player>;
  redCards: Scalars['Int'];
  season?: Maybe<Season>;
  substituteIn: Scalars['Int'];
  substituteOut: Scalars['Int'];
  yellowCards: Scalars['Int'];
};

/** Object that can be subscribed to */
export type Subscribable = Card | Club | Country | Player | User;

export type SubscribableInput = {
  slug: Scalars['String'];
  type: Scalars['String'];
};

export enum SubscribableType {
  Card = 'CARD',
  Country = 'COUNTRY',
  Player = 'PLAYER',
  Team = 'TEAM',
  User = 'USER'
}

/** Type of a subscriber to a new card, player, country or club related auction */
export type Subscriber = CurrentUser;

export type Subscription = {
  __typename?: 'Subscription';
  aCardWasUpdated: Card;
  bundledAuctionWasUpdated: BundledAuction;
  currentUserWasUpdated: CurrentUser;
  gameWasUpdated: Game;
  offerWasUpdated: Offer;
  /** @deprecated Not used anymore. */
  packWasSold: Pack;
  /** Triggered on new bid or card sold on the public market */
  publicMarketWasUpdated: Card;
};


export type SubscriptionPackWasSoldArgs = {
  id: Scalars['ID'];
};

/** Object that can be a team */
export type Team = Club | NationalTeam;

/** Objects with publicly accessible cards */
export type TeamInterface = {
  activeCompetitions: Array<Competition>;
  /** The `active_memberships` field cannot be nested within a list. */
  activeMemberships: MembershipConnection;
  /** The `active_players` field cannot be nested within a list. */
  activePlayers: PlayerConnection;
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
  code?: Maybe<Scalars['String']>;
  /** @deprecated replaced by colorRight on customBanner */
  colorBottom?: Maybe<Scalars['String']>;
  /** @deprecated replaced by colorLeft on customBanner */
  colorTop?: Maybe<Scalars['String']>;
  country: Country;
  customBanner?: Maybe<CustomBanner>;
  founded?: Maybe<Scalars['String']>;
  /** The `games` field cannot be nested within a list. */
  games: GameConnection;
  id: Scalars['ID'];
  lastFiveGames: Array<Game>;
  /** The `latest_games` field cannot be nested within a list. */
  latestGames: GameConnection;
  license: License;
  name: Scalars['String'];
  /** The `open_auctions` field cannot be nested within a list. */
  openAuctions: AuctionConnection;
  optaId?: Maybe<Scalars['String']>;
  pictureSecondaryUrl?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  /** @deprecated Replaced teamPictureUrl on CardType */
  pictureUrlByRarity: Scalars['Json'];
  /** The `players` field cannot be nested within a list. */
  players: PlayerConnection;
  ready: Scalars['Boolean'];
  /** The `recent_departures` field cannot be nested within a list. */
  recentDepartures: PlayerConnection;
  slug: Scalars['String'];
  upcomingGames: Array<Maybe<Game>>;
};


/** Objects with publicly accessible cards */
export type TeamInterfaceActiveMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Objects with publicly accessible cards */
export type TeamInterfaceActivePlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Objects with publicly accessible cards */
export type TeamInterfaceCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


/** Objects with publicly accessible cards */
export type TeamInterfaceGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate: Scalars['ISO8601DateTime'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  startDate: Scalars['ISO8601DateTime'];
};


/** Objects with publicly accessible cards */
export type TeamInterfaceLatestGamesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Objects with publicly accessible cards */
export type TeamInterfaceOpenAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Objects with publicly accessible cards */
export type TeamInterfacePictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


/** Objects with publicly accessible cards */
export type TeamInterfacePictureUrlByRarityArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};


/** Objects with publicly accessible cards */
export type TeamInterfacePlayersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Objects with publicly accessible cards */
export type TeamInterfaceRecentDeparturesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Objects with publicly accessible cards */
export type TeamInterfaceUpcomingGamesArgs = {
  first: Scalars['Int'];
};

/** Represents a list of players available for a minting quota organized by tiers */
export type TieredPlayerPool = {
  __typename?: 'TieredPlayerPool';
  tier0: Array<Scalars['String']>;
  tier1: Array<Scalars['String']>;
  tier2: Array<Scalars['String']>;
  tier3: Array<Scalars['String']>;
};

export enum Tradeable {
  /** The card is stored in the Sorare account */
  Internal = 'INTERNAL',
  /** The card is stored in the mapped account */
  Mapped = 'MAPPED',
  /** The card is neither in the Sorare account nor in the mapped account */
  No = 'NO',
  /** The card is still on Loom */
  NotYet = 'NOT_YET',
  /** The card is on sale */
  OnSale = 'ON_SALE',
  /** The card has no owner or does not belong to the user */
  Undefined = 'UNDEFINED',
  /** The card is transferrable */
  Yes = 'YES'
}

export enum TransactionStatus {
  /** Transaction cancelled */
  Cancelled = 'CANCELLED',
  /** Transaction confirmed */
  Confirmed = 'CONFIRMED',
  /** Transaction dropped */
  Dropped = 'DROPPED',
  /** Transaction failed */
  Failed = 'FAILED',
  /** Transaction is currently minting */
  Pending = 'PENDING'
}

/** The Transfer Market queries */
export type TransferMarket = {
  __typename?: 'TransferMarket';
  /** @deprecated Use `englishAuctions` instead */
  auctions: AuctionConnection;
  banners: Array<TransferMarketBanner>;
  bundledAuction?: Maybe<BundledAuction>;
  /** @deprecated Use `englishAuctions` instead */
  bundledAuctions: BundledAuctionConnection;
  bundledAuctionsWithCards: Array<BundledAuction>;
  bundlesFirst: Scalars['Boolean'];
  cardWeiMinPrice: Scalars['String'];
  englishAuction: BundledAuction;
  englishAuctions: EnglishAuctionConnection;
  featuredBundledAuctions: Array<BundledAuction>;
  id: Scalars['String'];
  /** @deprecated Use the `prepareOffer` mutation */
  limitOrdersForOffer: Array<LimitOrder>;
  offer: Offer;
  powerHourStartDate?: Maybe<Scalars['ISO8601DateTime']>;
  secondaryBanners: Array<TransferMarketBanner>;
  singleSaleOffers: SingleSaleOfferConnection;
};


/** The Transfer Market queries */
export type TransferMarketAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  playerSlugs?: InputMaybe<Array<Scalars['String']>>;
};


/** The Transfer Market queries */
export type TransferMarketBundledAuctionArgs = {
  slug: Scalars['String'];
};


/** The Transfer Market queries */
export type TransferMarketBundledAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  playerSlugs?: InputMaybe<Array<Scalars['String']>>;
};


/** The Transfer Market queries */
export type TransferMarketBundledAuctionsWithCardsArgs = {
  slugs: Array<Scalars['String']>;
};


/** The Transfer Market queries */
export type TransferMarketEnglishAuctionArgs = {
  slug: Scalars['String'];
};


/** The Transfer Market queries */
export type TransferMarketEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  bundled?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  playerSlugs?: InputMaybe<Array<Scalars['String']>>;
};


/** The Transfer Market queries */
export type TransferMarketFeaturedBundledAuctionsArgs = {
  size?: InputMaybe<Scalars['Int']>;
  window?: InputMaybe<Scalars['Int']>;
};


/** The Transfer Market queries */
export type TransferMarketLimitOrdersForOfferArgs = {
  receiveCardsSlugs: Array<Scalars['String']>;
  receiveWeiAmount: Scalars['WeiAmount'];
  receiverSlug?: InputMaybe<Scalars['String']>;
  sendCardsSlugs: Array<Scalars['String']>;
  sendWeiAmount: Scalars['WeiAmount'];
  type?: InputMaybe<OfferType>;
};


/** The Transfer Market queries */
export type TransferMarketOfferArgs = {
  id: Scalars['String'];
};


/** The Transfer Market queries */
export type TransferMarketSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A transfer market banner */
export type TransferMarketBanner = WithPictureInterface & {
  __typename?: 'TransferMarketBanner';
  background?: Maybe<Scalars['String']>;
  colorLeft?: Maybe<Scalars['String']>;
  colorRight?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  hrefLabel?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  pictureUrl?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  videoUrl?: Maybe<Scalars['String']>;
};


/** A transfer market banner */
export type TransferMarketBannerPictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

/** Signable payload for a Starkware transfer request */
export type TransferRequest = {
  __typename?: 'TransferRequest';
  amount: Scalars['String'];
  condition?: Maybe<Scalars['String']>;
  expirationTimestamp: Scalars['Int'];
  feeInfoUser?: Maybe<Fee>;
  nonce: Scalars['Int'];
  receiverPublicKey: Scalars['String'];
  receiverVaultId: Scalars['Int'];
  senderVaultId: Scalars['Int'];
  token: Scalars['String'];
};

/** A Sorare user */
export type User = PublicUserInfoInterface & {
  __typename?: 'User';
  /** @deprecated Replaced by allTimeBestDecksInFormation */
  allTimeBestDecks: Array<Deck>;
  allTimeBestDecksInFormation: Array<DeckInFormation>;
  /**
   * The `auctions` field cannot be nested within a list.
   * @deprecated Use englishAuctions instead
   */
  auctions: AuctionConnection;
  awards: Array<UserAward>;
  /** The `bought_single_sale_offers` field cannot be nested within a list. */
  boughtSingleSaleOffers: SingleSaleOfferConnection;
  /**
   * The `buying_auctions` field cannot be nested within a list.
   * @deprecated Use buyingEnglishAuctions instead
   */
  buyingAuctions: Array<Auction>;
  /** The `buying_english_auctions` field cannot be nested within a list. */
  buyingEnglishAuctions: Array<EnglishAuction>;
  cardCounts: CardCount;
  /** @deprecated Use paginatedCards instead */
  cards: Array<Card>;
  cardsCount: Scalars['Int'];
  createdAt: Scalars['ISO8601DateTime'];
  /** The `custom_decks` field cannot be nested within a list. */
  customDecks: CustomDeckConnection;
  /**
   * The `ended_buying_auctions` field cannot be nested within a list.
   * @deprecated Use endedBuyingEnglishAuctions instead
   */
  endedBuyingAuctions: AuctionConnection;
  /** The `ended_with_no_buyer_single_sale_offers` field cannot be nested within a list. */
  endedWithNoBuyerSingleSaleOffers: SingleSaleOfferConnection;
  /** The `english_auctions` field cannot be nested within a list. */
  englishAuctions: EnglishAuctionConnection;
  ethVaultId?: Maybe<Scalars['Int']>;
  ethereumAddress: Scalars['String'];
  followed?: Maybe<EmailSubscription>;
  /** The `followers` field cannot be nested within a list. */
  followers: UserWithSubscriptionSlugConnection;
  followersCount: Scalars['Int'];
  /** The `following` field cannot be nested within a list. */
  following: UserWithSubscriptionSlugConnection;
  followingCount: Scalars['Int'];
  highlightedDeck?: Maybe<HighlightedDeck>;
  id: Scalars['ID'];
  /**
   * The `live_single_sale_offers` field cannot be nested within a list.
   * @deprecated Use the paginated version instead
   */
  liveSingleSaleOffers: Array<SingleSaleOffer>;
  /**
   * The `lost_auctions` field cannot be nested within a list.
   * @deprecated Use lostEnglishAuctions instead
   */
  lostAuctions: AuctionConnection;
  /** The `lost_english_auctions` field cannot be nested within a list. */
  lostEnglishAuctions: EnglishAuctionConnection;
  nickname: Scalars['String'];
  /** @deprecated Secondary market is offer only */
  openAuctions: Array<Auction>;
  /** @deprecated Secondary market is offer only */
  openEnglishAuctions: Array<EnglishAuction>;
  /** The `paginated_cards` field cannot be nested within a list. */
  paginatedCards: CardConnection;
  /** The `paginated_live_single_sale_offers` field cannot be nested within a list. */
  paginatedLiveSingleSaleOffers: SingleSaleOfferConnection;
  profile: UserProfile;
  /** The `single_sale_offers` field cannot be nested within a list. */
  singleSaleOffers: SingleSaleOfferConnection;
  slug: Scalars['String'];
  /** The `sold_single_sale_offers` field cannot be nested within a list. */
  soldSingleSaleOffers: SingleSaleOfferConnection;
  sorareAddress?: Maybe<Scalars['String']>;
  starkKey?: Maybe<Scalars['String']>;
  starkKeyRegistered: Scalars['Boolean'];
  /**
   * The `won_auctions` field cannot be nested within a list.
   * @deprecated Use wonEnglishAuctions instead
   */
  wonAuctions: AuctionConnection;
  /** The `won_english_auctions` field cannot be nested within a list. */
  wonEnglishAuctions: EnglishAuctionConnection;
};


/** A Sorare user */
export type UserAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserBoughtSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserBuyingAuctionsArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** A Sorare user */
export type UserBuyingEnglishAuctionsArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** A Sorare user */
export type UserCustomDecksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A Sorare user */
export type UserEndedBuyingAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A Sorare user */
export type UserEndedWithNoBuyerSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A Sorare user */
export type UserFollowingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A Sorare user */
export type UserLiveSingleSaleOffersArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** A Sorare user */
export type UserLostAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserLostEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserPaginatedCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


/** A Sorare user */
export type UserPaginatedLiveSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserSoldSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserWonAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user */
export type UserWonEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};

/** A user account entry */
export type UserAccountEntry = Node & {
  __typename?: 'UserAccountEntry';
  aasmState: UserAccountEntryState;
  amount: Scalars['String'];
  date: Scalars['ISO8601DateTime'];
  entryType: UserAccountEntryEntry;
  id: Scalars['ID'];
  operation?: Maybe<UserAccountEntryOperation>;
  provisional: Scalars['Boolean'];
  user: User;
};

/** The connection type for UserAccountEntry. */
export type UserAccountEntryConnection = {
  __typename?: 'UserAccountEntryConnection';
  /** A list of edges. */
  edges: Array<UserAccountEntryEdge>;
  /** A list of nodes. */
  nodes: Array<UserAccountEntry>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserAccountEntryEdge = {
  __typename?: 'UserAccountEntryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<UserAccountEntry>;
};

export enum UserAccountEntryEntry {
  Deposit = 'DEPOSIT',
  EthMigrationRounding = 'ETH_MIGRATION_ROUNDING',
  Payment = 'PAYMENT',
  Reward = 'REWARD',
  Withdrawal = 'WITHDRAWAL',
  WithdrawalFee = 'WITHDRAWAL_FEE'
}

/** Object that can be an operation of a UserAccountEntry */
export type UserAccountEntryOperation = Bid | EthMigration | FastWithdrawal | FullWithdrawalRequest | Offer | So5Reward | StarkwareWithdrawal | Withdrawal;

export enum UserAccountEntryState {
  Cancelled = 'CANCELLED',
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING'
}

/** A user award */
export type UserAward = {
  __typename?: 'UserAward';
  award: Award;
  category: AwardCategory;
  claimableReward?: Maybe<Scalars['Int']>;
  claimedLevel?: Maybe<Scalars['Int']>;
  completed: Scalars['Boolean'];
  level: Scalars['Int'];
  maxLevel: Scalars['Int'];
  nextLevel: Scalars['Int'];
  nextRequirement?: Maybe<Scalars['String']>;
  nextReward?: Maybe<Scalars['Int']>;
  progression?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
};

/** A user notification regarding an Award event */
export type UserAwardNotification = NotificationInterface & {
  __typename?: 'UserAwardNotification';
  amount?: Maybe<Scalars['Int']>;
  award: UserAward;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  level?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  read: Scalars['Boolean'];
  user: CurrentUser;
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** A list of nodes. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

/** A user-readable error */
export type UserError = {
  __typename?: 'UserError';
  /** The error code */
  code?: Maybe<Scalars['Int']>;
  /** A description of the error */
  message: Scalars['String'];
  /** Which input value this error came from */
  path?: Maybe<Array<Scalars['String']>>;
};

/** A user lifecycle entry */
export type UserLifecycleInput = {
  name: Scalars['String'];
  value: Scalars['Json'];
};

/** User Offer Interface */
export type UserOffersInterface = {
  blockedUntil?: Maybe<Scalars['ISO8601DateTime']>;
  blockedUsers: UserConnection;
  directOffers: OfferConnection;
  endedDirectOffersReceived: OfferConnection;
  endedDirectOffersSent: OfferConnection;
  pendingDirectOffersReceived: OfferConnection;
  pendingDirectOffersSent: OfferConnection;
};


/** User Offer Interface */
export type UserOffersInterfaceBlockedUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** User Offer Interface */
export type UserOffersInterfaceDirectOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  direction: OfferDirection;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** User Offer Interface */
export type UserOffersInterfaceEndedDirectOffersReceivedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** User Offer Interface */
export type UserOffersInterfaceEndedDirectOffersSentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** User Offer Interface */
export type UserOffersInterfacePendingDirectOffersReceivedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};


/** User Offer Interface */
export type UserOffersInterfacePendingDirectOffersSentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
};

/** An object representing the past or present ownership of a card by a user */
export type UserOwner = OwnerInterface & {
  __typename?: 'UserOwner';
  account?: Maybe<Account>;
  address: Scalars['String'];
  blockchain: Scalars['String'];
  card: Card;
  /** The deal id that created this owner in case it comes from an offer */
  dealId?: Maybe<Scalars['String']>;
  from: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  migratorApproval: Scalars['Boolean'];
  optimistic: Scalars['Boolean'];
  ownerable: User;
  /** Card price, in wei. */
  price: Scalars['String'];
  transferType: Scalars['String'];
  userNonce?: Maybe<Scalars['Int']>;
};

/** An owner with conversion rates */
export type UserOwnerWithRates = OwnerInterface & {
  __typename?: 'UserOwnerWithRates';
  account?: Maybe<Account>;
  address: Scalars['String'];
  blockchain: Scalars['String'];
  card: Card;
  /** The deal id that created this owner in case it comes from an offer */
  dealId?: Maybe<Scalars['String']>;
  from: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  migratorApproval: Scalars['Boolean'];
  optimistic: Scalars['Boolean'];
  ownerable: User;
  /** Card price, in wei. */
  price: Scalars['String'];
  priceInFiat: Fiat;
  transferType: Scalars['String'];
  userNonce?: Maybe<Scalars['Int']>;
};

/** A Sorare user profile */
export type UserProfile = WithPictureInterface & {
  __typename?: 'UserProfile';
  clubBanner?: Maybe<Skin>;
  clubName: Scalars['String'];
  clubShield?: Maybe<Skin>;
  discordUsername?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  pictureUrl?: Maybe<Scalars['String']>;
  /** The date the user created his first non rookie / training lineup */
  proSince?: Maybe<Scalars['ISO8601DateTime']>;
  /** @deprecated Rookie concept is no longer being used */
  rookie: Scalars['Boolean'];
  slug: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  twitterUsername?: Maybe<Scalars['String']>;
  user: User;
  verified: Scalars['Boolean'];
};


/** A Sorare user profile */
export type UserProfilePictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

/** A Sorare user settings */
export type UserSettings = {
  __typename?: 'UserSettings';
  currency?: Maybe<Currency>;
  disableAllEmails: Scalars['Boolean'];
  fiatCurrency?: Maybe<FiatCurrency>;
  id: Scalars['ID'];
  lastTcuVersionAccepted: Scalars['Boolean'];
  lifecycle: Scalars['Json'];
  locale?: Maybe<Scalars['String']>;
  notificationPreferences: Array<NotificationPreference>;
};

/** User social connections */
export type UserSocialInterface = {
  followed?: Maybe<EmailSubscription>;
  /** The `followers` field cannot be nested within a list. */
  followers: UserWithSubscriptionSlugConnection;
  followersCount: Scalars['Int'];
  /** The `following` field cannot be nested within a list. */
  following: UserWithSubscriptionSlugConnection;
  followingCount: Scalars['Int'];
};


/** User social connections */
export type UserSocialInterfaceFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** User social connections */
export type UserSocialInterfaceFollowingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** An affiliate */
export type UserSource = {
  __typename?: 'UserSource';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlug = PublicUserInfoInterface & UserSocialInterface & {
  __typename?: 'UserWithSubscriptionSlug';
  /** @deprecated Replaced by allTimeBestDecksInFormation */
  allTimeBestDecks: Array<Deck>;
  allTimeBestDecksInFormation: Array<DeckInFormation>;
  /**
   * The `auctions` field cannot be nested within a list.
   * @deprecated Use englishAuctions instead
   */
  auctions: AuctionConnection;
  awards: Array<UserAward>;
  /** The `bought_single_sale_offers` field cannot be nested within a list. */
  boughtSingleSaleOffers: SingleSaleOfferConnection;
  /**
   * The `buying_auctions` field cannot be nested within a list.
   * @deprecated Use buyingEnglishAuctions instead
   */
  buyingAuctions: Array<Auction>;
  /** The `buying_english_auctions` field cannot be nested within a list. */
  buyingEnglishAuctions: Array<EnglishAuction>;
  cardCounts: CardCount;
  /** @deprecated Use paginatedCards instead */
  cards: Array<Card>;
  cardsCount: Scalars['Int'];
  createdAt: Scalars['ISO8601DateTime'];
  /** The `custom_decks` field cannot be nested within a list. */
  customDecks: CustomDeckConnection;
  /**
   * The `ended_buying_auctions` field cannot be nested within a list.
   * @deprecated Use endedBuyingEnglishAuctions instead
   */
  endedBuyingAuctions: AuctionConnection;
  /** The `ended_with_no_buyer_single_sale_offers` field cannot be nested within a list. */
  endedWithNoBuyerSingleSaleOffers: SingleSaleOfferConnection;
  /** The `english_auctions` field cannot be nested within a list. */
  englishAuctions: EnglishAuctionConnection;
  ethVaultId?: Maybe<Scalars['Int']>;
  ethereumAddress: Scalars['String'];
  followed?: Maybe<EmailSubscription>;
  /** The `followers` field cannot be nested within a list. */
  followers: UserWithSubscriptionSlugConnection;
  followersCount: Scalars['Int'];
  /** The `following` field cannot be nested within a list. */
  following: UserWithSubscriptionSlugConnection;
  followingCount: Scalars['Int'];
  highlightedDeck?: Maybe<HighlightedDeck>;
  id: Scalars['ID'];
  /**
   * The `live_single_sale_offers` field cannot be nested within a list.
   * @deprecated Use the paginated version instead
   */
  liveSingleSaleOffers: Array<SingleSaleOffer>;
  /**
   * The `lost_auctions` field cannot be nested within a list.
   * @deprecated Use lostEnglishAuctions instead
   */
  lostAuctions: AuctionConnection;
  /** The `lost_english_auctions` field cannot be nested within a list. */
  lostEnglishAuctions: EnglishAuctionConnection;
  nickname: Scalars['String'];
  /** @deprecated Secondary market is offer only */
  openAuctions: Array<Auction>;
  /** @deprecated Secondary market is offer only */
  openEnglishAuctions: Array<EnglishAuction>;
  /** The `paginated_cards` field cannot be nested within a list. */
  paginatedCards: CardConnection;
  /** The `paginated_live_single_sale_offers` field cannot be nested within a list. */
  paginatedLiveSingleSaleOffers: SingleSaleOfferConnection;
  profile: UserProfile;
  /** The `single_sale_offers` field cannot be nested within a list. */
  singleSaleOffers: SingleSaleOfferConnection;
  slug: Scalars['String'];
  /** The `sold_single_sale_offers` field cannot be nested within a list. */
  soldSingleSaleOffers: SingleSaleOfferConnection;
  sorareAddress?: Maybe<Scalars['String']>;
  starkKey?: Maybe<Scalars['String']>;
  starkKeyRegistered: Scalars['Boolean'];
  subscriptionSlug?: Maybe<Scalars['String']>;
  /**
   * The `won_auctions` field cannot be nested within a list.
   * @deprecated Use wonEnglishAuctions instead
   */
  wonAuctions: AuctionConnection;
  /** The `won_english_auctions` field cannot be nested within a list. */
  wonEnglishAuctions: EnglishAuctionConnection;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugBoughtSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugBuyingAuctionsArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugBuyingEnglishAuctionsArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugCustomDecksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugEndedBuyingAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugEndedWithNoBuyerSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugFollowingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugLiveSingleSaleOffersArgs = {
  newlyListed?: InputMaybe<Scalars['Boolean']>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugLostAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugLostEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugPaginatedCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugPaginatedLiveSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugSoldSingleSaleOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugWonAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};


/** A Sorare user with the subscription slug of the current user */
export type UserWithSubscriptionSlugWonEnglishAuctionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortByEndDate?: InputMaybe<SortingOption>;
};

/** The connection type for UserWithSubscriptionSlug. */
export type UserWithSubscriptionSlugConnection = {
  __typename?: 'UserWithSubscriptionSlugConnection';
  /** A list of edges. */
  edges: Array<UserWithSubscriptionSlugEdge>;
  /** A list of nodes. */
  nodes: Array<UserWithSubscriptionSlug>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserWithSubscriptionSlugEdge = {
  __typename?: 'UserWithSubscriptionSlugEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<UserWithSubscriptionSlug>;
};

/** Utm params */
export type UtmInput = {
  utmCampaign?: InputMaybe<Scalars['String']>;
  utmContent?: InputMaybe<Scalars['String']>;
  utmMedium?: InputMaybe<Scalars['String']>;
  utmSource?: InputMaybe<Scalars['String']>;
  utmTerm?: InputMaybe<Scalars['String']>;
};

export type ValueBoundaries = {
  __typename?: 'ValueBoundaries';
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type ValueOpenBoundaries = {
  __typename?: 'ValueOpenBoundaries';
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

export enum WalletStatus {
  /** The card is stored in the Sorare account */
  Internal = 'INTERNAL',
  /** The card is stored in the mapped account */
  Mapped = 'MAPPED',
  /** The card has no owner or does not belong to the user */
  Unknown = 'UNKNOWN'
}

/** Fast withdrawal */
export type WithFastWithdrawal = {
  /** Get a starkware conditional transfer request for a fast withdrawal */
  fastWithdrawal: FastWithdrawal;
};


/** Fast withdrawal */
export type WithFastWithdrawalFastWithdrawalArgs = {
  amount: Scalars['String'];
  to: Scalars['String'];
};

/** Favorites */
export type WithFavoriteInterface = {
  favoriteCards: Array<Card>;
  favoriteClubs: Array<Club>;
  favoritePlayers: Array<Player>;
  mySubscriptions: EmailSubscriptionConnection;
};


/** Favorites */
export type WithFavoriteInterfaceMySubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SortingOption>;
  types?: InputMaybe<Array<SubscribableType>>;
};

/** Objects with memberships */
export type WithMemberships = {
  activeClubMembership?: Maybe<Membership>;
  appearances: Scalars['Int'];
  beforeLastOwningMembership?: Maybe<Membership>;
  clubMemberships: Array<Membership>;
  memberships: Array<Membership>;
};

/** Notifications */
export type WithNotifications = {
  notifications: NotificationConnection;
  unreadNotificationsCount: Scalars['Int'];
};


/** Notifications */
export type WithNotificationsNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<NotificationCategoryInput>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Objects with a picture with derivatives */
export type WithPictureInterface = {
  pictureUrl?: Maybe<Scalars['String']>;
};


/** Objects with a picture with derivatives */
export type WithPictureInterfacePictureUrlArgs = {
  derivative?: InputMaybe<Scalars['String']>;
};

/** Objects with publicly accessible cards */
export type WithPublicCardsInterface = {
  /** The `cards` field cannot be nested within a list. */
  cards: CardConnection;
};


/** Objects with publicly accessible cards */
export type WithPublicCardsInterfaceCardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  positions?: InputMaybe<Array<Position>>;
  rarities?: InputMaybe<Array<Rarity>>;
  serialNumber?: InputMaybe<Scalars['Int']>;
  shirtNumber?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};

/** With Referral Interface */
export type WithReferralsInterface = {
  referee: Scalars['Boolean'];
  refereeReward?: Maybe<ReferralReward>;
  referralAsReferee?: Maybe<Referral>;
  referralRewardsCount: Scalars['Int'];
  /** Get the list of referrals */
  referrals: ReferralPaginated;
  referrer?: Maybe<User>;
  unclaimedReferralRewardsCount: Scalars['Int'];
};


/** With Referral Interface */
export type WithReferralsInterfaceReferralsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<ReferralState>;
};

export type WithSubscriptionsInterface = {
  currentUserSubscription?: Maybe<EmailSubscription>;
  slug: Scalars['String'];
  subscriptionsCount: Scalars['Int'];
};

/** A withdrawal */
export type Withdrawal = {
  __typename?: 'Withdrawal';
  agreedFeeAmount: Scalars['String'];
  amount: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  status: WithdrawalStatus;
  to: Scalars['String'];
  transactionHash?: Maybe<Scalars['String']>;
};

export enum WithdrawalStatus {
  /** Withdrawal was cancelled */
  Cancelled = 'CANCELLED',
  /** Withdrawal is confirmed */
  Confirmed = 'CONFIRMED',
  /** Withdrawal is created and should be confirmed */
  Created = 'CREATED',
  /** Withdrawal has settled on the blockchain */
  Settled = 'SETTLED',
  /** Withdrawal has failed */
  SettlementFailed = 'SETTLEMENT_FAILED',
  /** Withdrawal has been published on the blockchain */
  SettlementPublished = 'SETTLEMENT_PUBLISHED'
}

/** A withdrawal with conversion rates */
export type WithdrawalWithRates = {
  __typename?: 'WithdrawalWithRates';
  agreedFeeAmount: Scalars['String'];
  amount: Scalars['String'];
  amountInFiat: Fiat;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  status: WithdrawalStatus;
  to: Scalars['String'];
  transactionHash?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of acceptOffer */
export type AcceptOfferInput = {
  blockchainId: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  migrationData?: InputMaybe<OfferMigrationInput>;
  /** List of signed LimitOrder objects. */
  starkSignatures: Array<StarkSignatureInput>;
};

/** Autogenerated return type of acceptOffer */
export type AcceptOfferPayload = {
  __typename?: 'acceptOfferPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  offer?: Maybe<Offer>;
};

/** Autogenerated input type of addCardsToDeck */
export type AddCardsToDeckInput = {
  cardSlugs: Array<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  deckSlug: Scalars['String'];
};

/** Autogenerated return type of addCardsToDeck */
export type AddCardsToDeckPayload = {
  __typename?: 'addCardsToDeckPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  deck?: Maybe<DeckInterface>;
  errors: Array<UserError>;
};

/** Autogenerated input type of addFavouriteClubs */
export type AddFavouriteClubsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  subscribables: Array<SubscribableInput>;
};

/** Autogenerated return type of addFavouriteClubs */
export type AddFavouriteClubsPayload = {
  __typename?: 'addFavouriteClubsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of approveMigrator */
export type ApproveMigratorInput = {
  address: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  nonce: Scalars['Int'];
  signature: Scalars['String'];
};

/** Autogenerated return type of approveMigrator */
export type ApproveMigratorPayload = {
  __typename?: 'approveMigratorPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
};

/** Autogenerated input type of bid */
export type BidInput = {
  /** Bid amount, in wei. */
  amount: Scalars['String'];
  auctionId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** List of signed LimitOrder objects. */
  starkSignatures: Array<StarkSignatureInput>;
};

/** Autogenerated return type of bid */
export type BidPayload = {
  __typename?: 'bidPayload';
  bid?: Maybe<Bid>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of blockUserOffers */
export type BlockUserOffersInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  userSlug: Scalars['String'];
};

/** Autogenerated return type of blockUserOffers */
export type BlockUserOffersPayload = {
  __typename?: 'blockUserOffersPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
};

/** Autogenerated input type of buySkin */
export type BuySkinInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  skinId: Scalars['ID'];
};

/** Autogenerated return type of buySkin */
export type BuySkinPayload = {
  __typename?: 'buySkinPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  skin?: Maybe<Skin>;
};

/** Autogenerated input type of cancelEthBankWithdrawals */
export type CancelEthBankWithdrawalsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of cancelEthBankWithdrawals */
export type CancelEthBankWithdrawalsPayload = {
  __typename?: 'cancelEthBankWithdrawalsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of cancelFastWithdrawal */
export type CancelFastWithdrawalInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  fastWithdrawalId: Scalars['ID'];
};

/** Autogenerated return type of cancelFastWithdrawal */
export type CancelFastWithdrawalPayload = {
  __typename?: 'cancelFastWithdrawalPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  fastWithdrawal?: Maybe<FastWithdrawal>;
};

/** Autogenerated input type of cancelOffer */
export type CancelOfferInput = {
  blockchainId: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of cancelOffer */
export type CancelOfferPayload = {
  __typename?: 'cancelOfferPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  offer?: Maybe<Offer>;
};

/** Autogenerated input type of cancelWithdrawal */
export type CancelWithdrawalInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  withdrawalId: Scalars['ID'];
};

/** Autogenerated return type of cancelWithdrawal */
export type CancelWithdrawalPayload = {
  __typename?: 'cancelWithdrawalPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  withdrawal?: Maybe<Withdrawal>;
};

/** Autogenerated input type of checkPhoneNumberVerificationCode */
export type CheckPhoneNumberVerificationCodeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  code: Scalars['String'];
};

/** Autogenerated return type of checkPhoneNumberVerificationCode */
export type CheckPhoneNumberVerificationCodePayload = {
  __typename?: 'checkPhoneNumberVerificationCodePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of claimAward */
export type ClaimAwardInput = {
  award: Award;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of claimAward */
export type ClaimAwardPayload = {
  __typename?: 'claimAwardPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of claimCardDrop */
export type ClaimCardDropInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  task: OnboardingTaskEnum;
};

/** Autogenerated return type of claimCardDrop */
export type ClaimCardDropPayload = {
  __typename?: 'claimCardDropPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of claimReferralReward */
export type ClaimReferralRewardInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  referralRewardId: Scalars['ID'];
};

/** Autogenerated return type of claimReferralReward */
export type ClaimReferralRewardPayload = {
  __typename?: 'claimReferralRewardPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  referralReward?: Maybe<ReferralReward>;
};

/** Autogenerated input type of claimReward */
export type ClaimRewardInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  so5RewardId: Scalars['ID'];
};

/** Autogenerated return type of claimReward */
export type ClaimRewardPayload = {
  __typename?: 'claimRewardPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  so5Reward?: Maybe<So5Reward>;
};

/** Autogenerated input type of completeOnboardingTask */
export type CompleteOnboardingTaskInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  task: OnboardingTaskEnum;
};

/** Autogenerated return type of completeOnboardingTask */
export type CompleteOnboardingTaskPayload = {
  __typename?: 'completeOnboardingTaskPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of confirmSo5Lineups */
export type ConfirmSo5LineupsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  so5LineupIds: Array<Scalars['ID']>;
};

/** Autogenerated return type of confirmSo5Lineups */
export type ConfirmSo5LineupsPayload = {
  __typename?: 'confirmSo5LineupsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  so5Lineups: Array<So5Lineup>;
};

/** Autogenerated input type of createCardWithdrawal */
export type CreateCardWithdrawalInput = {
  cardSlug: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  destination: Scalars['String'];
  /** List of signed LimitOrder objects. */
  starkSignatures: Array<StarkSignatureInput>;
};

/** Autogenerated return type of createCardWithdrawal */
export type CreateCardWithdrawalPayload = {
  __typename?: 'createCardWithdrawalPayload';
  card?: Maybe<Card>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
};

/** Autogenerated input type of createCustomDeck */
export type CreateCustomDeckInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  visible: Scalars['Boolean'];
};

/** Autogenerated return type of createCustomDeck */
export type CreateCustomDeckPayload = {
  __typename?: 'createCustomDeckPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  deck?: Maybe<CustomDeck>;
  errors: Array<UserError>;
};

/** Autogenerated input type of createDirectOffer */
export type CreateDirectOfferInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID used as unique deal identifier. Consider using `crypto.getRandomValues(new Uint32Array(4)).join()` to generate one. */
  dealId: Scalars['String'];
  /** Number of seconds this offer should be valid */
  duration?: InputMaybe<Scalars['Int']>;
  migrationData?: InputMaybe<OfferMigrationInput>;
  receiveCardsSlugs: Array<Scalars['String']>;
  receiverSlug: Scalars['String'];
  sendCardsSlugs: Array<Scalars['String']>;
  sendWeiAmount: Scalars['WeiAmount'];
  /** List of signed LimitOrder objects. */
  starkSignatures: Array<StarkSignatureInput>;
};

/** Autogenerated return type of createDirectOffer */
export type CreateDirectOfferPayload = {
  __typename?: 'createDirectOfferPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  offer?: Maybe<Offer>;
};

/** Autogenerated input type of createEthBankWithdrawalIntent */
export type CreateEthBankWithdrawalIntentInput = {
  amount: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of createEthBankWithdrawalIntent */
export type CreateEthBankWithdrawalIntentPayload = {
  __typename?: 'createEthBankWithdrawalIntentPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  ethBankWithdrawalIntent?: Maybe<EthBankWithdrawalIntent>;
};

/** Autogenerated input type of createEthMigration */
export type CreateEthMigrationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  nonce: Scalars['String'];
  signature: Scalars['String'];
  weiAmount: Scalars['String'];
};

/** Autogenerated return type of createEthMigration */
export type CreateEthMigrationPayload = {
  __typename?: 'createEthMigrationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of createEthVault */
export type CreateEthVaultInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of createEthVault */
export type CreateEthVaultPayload = {
  __typename?: 'createEthVaultPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of createFastWithdrawal */
export type CreateFastWithdrawalInput = {
  amount: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  salt: Scalars['String'];
  /** List of signed LimitOrder objects. */
  starkSignatures: Array<StarkSignatureInput>;
  to: Scalars['String'];
};

/** Autogenerated return type of createFastWithdrawal */
export type CreateFastWithdrawalPayload = {
  __typename?: 'createFastWithdrawalPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of createOrUpdateSingleBuyOfferMinPrice */
export type CreateOrUpdateSingleBuyOfferMinPriceInput = {
  amount: Scalars['String'];
  cardSlug: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  isPrivate: Scalars['Boolean'];
};

/** Autogenerated return type of createOrUpdateSingleBuyOfferMinPrice */
export type CreateOrUpdateSingleBuyOfferMinPricePayload = {
  __typename?: 'createOrUpdateSingleBuyOfferMinPricePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  singleBuyOfferMinPrice?: Maybe<SingleBuyOfferMinPrice>;
};

/** Autogenerated input type of createOrUpdateSo5Lineup */
export type CreateOrUpdateSo5LineupInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  so5Appearances: Array<So5AppearanceInput>;
  so5LeaderboardId: Scalars['ID'];
  so5LineupId?: InputMaybe<Scalars['ID']>;
};

/** Autogenerated return type of createOrUpdateSo5Lineup */
export type CreateOrUpdateSo5LineupPayload = {
  __typename?: 'createOrUpdateSo5LineupPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  so5Lineup?: Maybe<So5Lineup>;
};

/** Autogenerated input type of createPaymentIntent */
export type CreatePaymentIntentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  saveCard?: InputMaybe<Scalars['Boolean']>;
  weiAmount?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of createPaymentIntent */
export type CreatePaymentIntentPayload = {
  __typename?: 'createPaymentIntentPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUserPaymentMethods?: Maybe<Array<PaymentMethod>>;
  errors: Array<UserError>;
  paymentIntent?: Maybe<PaymentIntent>;
};

/** Autogenerated input type of createSingleBuyOffer */
export type CreateSingleBuyOfferInput = {
  cardSlug: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID used as unique deal identifier. Consider using `crypto.getRandomValues(new Uint32Array(4)).join()` to generate one. */
  dealId: Scalars['String'];
  price: Scalars['WeiAmount'];
  /** List of signed LimitOrder objects. */
  starkSignatures: Array<StarkSignatureInput>;
};

/** Autogenerated return type of createSingleBuyOffer */
export type CreateSingleBuyOfferPayload = {
  __typename?: 'createSingleBuyOfferPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  offer?: Maybe<Offer>;
};

/** Autogenerated input type of createSingleSaleOffer */
export type CreateSingleSaleOfferInput = {
  cardSlug: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID used as unique deal identifier. Consider using `crypto.getRandomValues(new Uint32Array(4)).join()` to generate one. */
  dealId: Scalars['String'];
  migrationData?: InputMaybe<OfferMigrationInput>;
  price: Scalars['WeiAmount'];
  /** List of signed LimitOrder objects. */
  starkSignatures: Array<StarkSignatureInput>;
  startDate?: InputMaybe<Scalars['ISO8601DateTime']>;
};

/** Autogenerated return type of createSingleSaleOffer */
export type CreateSingleSaleOfferPayload = {
  __typename?: 'createSingleSaleOfferPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  offer?: Maybe<SingleSaleOffer>;
};

/** Autogenerated input type of createSubscription */
export type CreateSubscriptionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  subscribable: SubscribableInput;
};

/** Autogenerated return type of createSubscription */
export type CreateSubscriptionPayload = {
  __typename?: 'createSubscriptionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  subscription?: Maybe<EmailSubscription>;
};

/** Autogenerated input type of createWithdrawal */
export type CreateWithdrawalInput = {
  agreedFeeAmount?: InputMaybe<Scalars['String']>;
  amount: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  dealId: Scalars['String'];
  signature: Scalars['String'];
  to: Scalars['String'];
};

/** Autogenerated return type of createWithdrawal */
export type CreateWithdrawalPayload = {
  __typename?: 'createWithdrawalPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  withdrawal?: Maybe<Withdrawal>;
};

/** Autogenerated input type of deleteCustomDeck */
export type DeleteCustomDeckInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  deckSlug: Scalars['String'];
};

/** Autogenerated return type of deleteCustomDeck */
export type DeleteCustomDeckPayload = {
  __typename?: 'deleteCustomDeckPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  deck?: Maybe<CustomDeck>;
  errors: Array<UserError>;
};

/** Autogenerated input type of deleteSo5Lineup */
export type DeleteSo5LineupInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  so5LineupId: Scalars['ID'];
};

/** Autogenerated return type of deleteSo5Lineup */
export type DeleteSo5LineupPayload = {
  __typename?: 'deleteSo5LineupPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  so5Leaderboard: So5Leaderboard;
};

/** Autogenerated input type of deleteSubscription */
export type DeleteSubscriptionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
};

/** Autogenerated return type of deleteSubscription */
export type DeleteSubscriptionPayload = {
  __typename?: 'deleteSubscriptionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  subscribable?: Maybe<Subscribable>;
  subscription?: Maybe<EmailSubscription>;
};

/** Autogenerated input type of deleteUserSo5Lineups */
export type DeleteUserSo5LineupsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  so5FixtureId: Scalars['ID'];
  so5LeagueIds?: InputMaybe<Array<Scalars['ID']>>;
};

/** Autogenerated return type of deleteUserSo5Lineups */
export type DeleteUserSo5LineupsPayload = {
  __typename?: 'deleteUserSo5LineupsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  so5Fixture: So5Fixture;
};

/** Autogenerated input type of destroyAccount */
export type DestroyAccountInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

/** Autogenerated return type of destroyAccount */
export type DestroyAccountPayload = {
  __typename?: 'destroyAccountPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of destroyReferral */
export type DestroyReferralInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  referralId: Scalars['ID'];
};

/** Autogenerated return type of destroyReferral */
export type DestroyReferralPayload = {
  __typename?: 'destroyReferralPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of detachPaymentMethod */
export type DetachPaymentMethodInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  paymentMethod: Scalars['String'];
};

/** Autogenerated return type of detachPaymentMethod */
export type DetachPaymentMethodPayload = {
  __typename?: 'detachPaymentMethodPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser: CurrentUser;
  errors: Array<UserError>;
};

/** Autogenerated input type of disable2fa */
export type Disable2faInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

/** Autogenerated return type of disable2fa */
export type Disable2faPayload = {
  __typename?: 'disable2faPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of disconnectOmniauthProvider */
export type DisconnectOmniauthProviderInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
};

/** Autogenerated return type of disconnectOmniauthProvider */
export type DisconnectOmniauthProviderPayload = {
  __typename?: 'disconnectOmniauthProviderPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  userProfile?: Maybe<UserProfile>;
};

/** Autogenerated input type of draftCommonTeam */
export type DraftCommonTeamInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  playerIds: Array<Scalars['ID']>;
};

/** Autogenerated return type of draftCommonTeam */
export type DraftCommonTeamPayload = {
  __typename?: 'draftCommonTeamPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
};

/** Autogenerated input type of editCardInDeck */
export type EditCardInDeckInput = {
  cardSlug: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  deckSlug: Scalars['String'];
  newIndex: Scalars['Int'];
};

/** Autogenerated return type of editCardInDeck */
export type EditCardInDeckPayload = {
  __typename?: 'editCardInDeckPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  deck?: Maybe<DeckInterface>;
  errors: Array<UserError>;
};

/** Autogenerated input type of editCustomDeck */
export type EditCustomDeckInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  deckSlug: Scalars['String'];
  name: Scalars['String'];
  newIndex?: InputMaybe<Scalars['Int']>;
  visible: Scalars['Boolean'];
};

/** Autogenerated return type of editCustomDeck */
export type EditCustomDeckPayload = {
  __typename?: 'editCustomDeckPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  deck?: Maybe<CustomDeck>;
  errors: Array<UserError>;
};

/** Autogenerated input type of enable2fa */
export type Enable2faInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  otpAttempt: Scalars['String'];
};

/** Autogenerated return type of enable2fa */
export type Enable2faPayload = {
  __typename?: 'enable2faPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of generateOtpBackupCodes */
export type GenerateOtpBackupCodesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of generateOtpBackupCodes */
export type GenerateOtpBackupCodesPayload = {
  __typename?: 'generateOtpBackupCodesPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of markNotificationsAsRead */
export type MarkNotificationsAsReadInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  notificationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of markNotificationsAsRead */
export type MarkNotificationsAsReadPayload = {
  __typename?: 'markNotificationsAsReadPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of mintCardsForUsers */
export type MintCardsForUsersInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  intents: Array<MintCardsForUsersInput>;
};

/** Autogenerated return type of mintCardsForUsers */
export type MintCardsForUsersPayload = {
  __typename?: 'mintCardsForUsersPayload';
  cards?: Maybe<Array<Card>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
};

/** Autogenerated input type of prepareAcceptOffer */
export type PrepareAcceptOfferInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  dealId: Scalars['String'];
};

/** Autogenerated return type of prepareAcceptOffer */
export type PrepareAcceptOfferPayload = {
  __typename?: 'prepareAcceptOfferPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  limitOrders?: Maybe<Array<LimitOrder>>;
};

/** Autogenerated input type of prepareCardWithdrawal */
export type PrepareCardWithdrawalInput = {
  cardSlug: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of prepareCardWithdrawal */
export type PrepareCardWithdrawalPayload = {
  __typename?: 'prepareCardWithdrawalPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  transferRequest?: Maybe<TransferRequest>;
};

/** Autogenerated input type of prepareOffer */
export type PrepareOfferInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  receiveCardsSlugs: Array<Scalars['String']>;
  receiveWeiAmount: Scalars['WeiAmount'];
  receiverSlug?: InputMaybe<Scalars['String']>;
  sendCardsSlugs: Array<Scalars['String']>;
  sendWeiAmount: Scalars['WeiAmount'];
  type?: InputMaybe<OfferType>;
};

/** Autogenerated return type of prepareOffer */
export type PrepareOfferPayload = {
  __typename?: 'prepareOfferPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  /** List of LimitOrder objects used as payload to sign for the `createSingleSaleOffer`, `createDirectOffer` or `createSingleBuyOffer` mutations. */
  limitOrders?: Maybe<Array<LimitOrder>>;
};

/** Autogenerated input type of rejectOffer */
export type RejectOfferInput = {
  block?: InputMaybe<Scalars['Boolean']>;
  blockchainId: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of rejectOffer */
export type RejectOfferPayload = {
  __typename?: 'rejectOfferPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  offer?: Maybe<Offer>;
};

/** Autogenerated input type of relayCall */
export type RelayCallInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  encodedFunction: Scalars['String'];
  extraGas: Scalars['Int'];
  signature: Scalars['String'];
};

/** Autogenerated return type of relayCall */
export type RelayCallPayload = {
  __typename?: 'relayCallPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser: CurrentUser;
  errors: Array<UserError>;
  transaction?: Maybe<EthereumTransaction>;
};

/** Autogenerated input type of removeCardFromDeck */
export type RemoveCardFromDeckInput = {
  cardSlug: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  deckSlug: Scalars['String'];
};

/** Autogenerated return type of removeCardFromDeck */
export type RemoveCardFromDeckPayload = {
  __typename?: 'removeCardFromDeckPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  deck?: Maybe<DeckInterface>;
  errors: Array<UserError>;
};

/** Autogenerated input type of resetCommonDraft */
export type ResetCommonDraftInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of resetCommonDraft */
export type ResetCommonDraftPayload = {
  __typename?: 'resetCommonDraftPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  userSettings?: Maybe<UserSettings>;
};

/** Autogenerated input type of resetPrivateKey */
export type ResetPrivateKeyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  starkKey?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of resetPrivateKey */
export type ResetPrivateKeyPayload = {
  __typename?: 'resetPrivateKeyPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser: CurrentUser;
  errors: Array<UserError>;
};

/** Autogenerated input type of resumeOnboarding */
export type ResumeOnboardingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of resumeOnboarding */
export type ResumeOnboardingPayload = {
  __typename?: 'resumeOnboardingPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of setDeviceToken */
export type SetDeviceTokenInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  devicePlatform: Scalars['String'];
  deviceToken: Scalars['String'];
  disable?: InputMaybe<Scalars['Boolean']>;
};

/** Autogenerated return type of setDeviceToken */
export type SetDeviceTokenPayload = {
  __typename?: 'setDeviceTokenPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
};

/** Autogenerated input type of signIn */
export type SignInInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  gaClientId?: InputMaybe<Scalars['String']>;
  otpAttempt?: InputMaybe<Scalars['String']>;
  otpSessionChallenge?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of signIn */
export type SignInPayload = {
  __typename?: 'signInPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
  otpSessionChallenge?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of signUp */
export type SignUpInput = {
  acceptTcu?: InputMaybe<Scalars['Boolean']>;
  agreedToReceiveOffersFromPartners?: InputMaybe<Scalars['Boolean']>;
  certified?: InputMaybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  /** The path the new User is from (to be used to redirect him after email confirmation) */
  fromPath?: InputMaybe<Scalars['String']>;
  gaClientId?: InputMaybe<Scalars['String']>;
  impactClickId?: InputMaybe<Scalars['String']>;
  invitationToken?: InputMaybe<Scalars['String']>;
  nickname: Scalars['String'];
  password: Scalars['String'];
  recaptchaToken: Scalars['String'];
  referrer?: InputMaybe<Scalars['String']>;
  sorareAddress: Scalars['String'];
  sorarePrivateKey: SorarePrivateKeyAttributes;
  sorarePrivateKeyBackup: Scalars['String'];
  starkKey?: InputMaybe<Scalars['String']>;
  utmParams?: InputMaybe<UtmInput>;
};

/** Autogenerated return type of signUp */
export type SignUpPayload = {
  __typename?: 'signUpPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of skipOnboarding */
export type SkipOnboardingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of skipOnboarding */
export type SkipOnboardingPayload = {
  __typename?: 'skipOnboardingPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

/** Autogenerated input type of unblockUserOffers */
export type UnblockUserOffersInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  userSlug: Scalars['String'];
};

/** Autogenerated return type of unblockUserOffers */
export type UnblockUserOffersPayload = {
  __typename?: 'unblockUserOffersPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
};

/** Autogenerated input type of updateSubscription */
export type UpdateSubscriptionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  rarities: Array<Scalars['String']>;
  slug: Scalars['String'];
};

/** Autogenerated return type of updateSubscription */
export type UpdateSubscriptionPayload = {
  __typename?: 'updateSubscriptionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  subscribable?: Maybe<Subscribable>;
  subscription?: Maybe<EmailSubscription>;
};

/** Autogenerated input type of updateUserProfile */
export type UpdateUserProfileInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  clubBannerId?: InputMaybe<Scalars['ID']>;
  clubName?: InputMaybe<Scalars['String']>;
  clubShieldId?: InputMaybe<Scalars['ID']>;
  nickname?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['File']>;
  status?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of updateUserProfile */
export type UpdateUserProfilePayload = {
  __typename?: 'updateUserProfilePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  userProfile?: Maybe<UserProfile>;
};

/** Autogenerated input type of updateUserSettings */
export type UpdateUserSettingsInput = {
  acceptTcu?: InputMaybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Currency>;
  fiatCurrency?: InputMaybe<FiatCurrency>;
  lifecycle?: InputMaybe<UserLifecycleInput>;
  locale?: InputMaybe<Scalars['String']>;
  notificationPreference?: InputMaybe<NotificationPreferenceInput>;
};

/** Autogenerated return type of updateUserSettings */
export type UpdateUserSettingsPayload = {
  __typename?: 'updateUserSettingsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  userSettings?: Maybe<UserSettings>;
};

/** Autogenerated input type of verifyPhoneNumber */
export type VerifyPhoneNumberInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
};

/** Autogenerated return type of verifyPhoneNumber */
export type VerifyPhoneNumberPayload = {
  __typename?: 'verifyPhoneNumberPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  currentUser?: Maybe<CurrentUser>;
  errors: Array<UserError>;
};

export type PlayerInfoFragment = { __typename?: 'Player', id: string, slug: string, displayName: string, position: string, pictureUrl?: string | null, cardSampleUrl?: string | null, stats?: { __typename?: 'Stats', assists: number, goals: number } | null, activeClub?: { __typename?: 'Club', id: string, name: string, domesticLeague?: { __typename?: 'Competition', id: string, name: string, displayName: string } | null } | null, status: { __typename?: 'PlayerStatus', lastFifteenSo5Appearances?: number | null, lastFifteenSo5AverageScore?: number | null, lastFiveSo5Appearances?: number | null, lastFiveSo5AverageScore?: number | null, playingStatus?: string | null }, cards: { __typename?: 'CardConnection', edges: Array<{ __typename?: 'CardEdge', node?: { __typename?: 'Card', priceRange?: { __typename?: 'Range', max: string, min: string } | null } | null }> } };

export type GetPlayerInformationsQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPlayerInformationsQuery = { __typename?: 'Query', player: { __typename?: 'Player', id: string, slug: string, displayName: string, position: string, pictureUrl?: string | null, cardSampleUrl?: string | null, stats?: { __typename?: 'Stats', assists: number, goals: number } | null, activeClub?: { __typename?: 'Club', id: string, name: string, domesticLeague?: { __typename?: 'Competition', id: string, name: string, displayName: string } | null } | null, status: { __typename?: 'PlayerStatus', lastFifteenSo5Appearances?: number | null, lastFifteenSo5AverageScore?: number | null, lastFiveSo5Appearances?: number | null, lastFiveSo5AverageScore?: number | null, playingStatus?: string | null }, cards: { __typename?: 'CardConnection', edges: Array<{ __typename?: 'CardEdge', node?: { __typename?: 'Card', priceRange?: { __typename?: 'Range', max: string, min: string } | null } | null }> } } };

export type GetPlayersInformationsQueryVariables = Exact<{
  slugs: Array<Scalars['String']> | Scalars['String'];
}>;


export type GetPlayersInformationsQuery = { __typename?: 'Query', players: Array<{ __typename?: 'Player', id: string, slug: string, displayName: string, position: string, pictureUrl?: string | null, cardSampleUrl?: string | null, stats?: { __typename?: 'Stats', assists: number, goals: number } | null, activeClub?: { __typename?: 'Club', id: string, name: string, domesticLeague?: { __typename?: 'Competition', id: string, name: string, displayName: string } | null } | null, status: { __typename?: 'PlayerStatus', lastFifteenSo5Appearances?: number | null, lastFifteenSo5AverageScore?: number | null, lastFiveSo5Appearances?: number | null, lastFiveSo5AverageScore?: number | null, playingStatus?: string | null }, cards: { __typename?: 'CardConnection', edges: Array<{ __typename?: 'CardEdge', node?: { __typename?: 'Card', priceRange?: { __typename?: 'Range', max: string, min: string } | null } | null }> } }> };

export type SignInMutationMutationVariables = Exact<{
  input: SignInInput;
  aud: Scalars['String'];
}>;


export type SignInMutationMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'signInPayload', otpSessionChallenge?: string | null, currentUser?: { __typename?: 'CurrentUser', slug: string, jwtToken: { __typename?: 'JwtToken', token: string, expiredAt: any } } | null, errors: Array<{ __typename?: 'UserError', message: string }> } | null };

export const PlayerInfoFragmentDoc = gql`
    fragment PlayerInfo on Player {
  id
  slug
  stats(seasonStartYear: 2021) {
    assists
    goals
  }
  activeClub {
    id
    name
    domesticLeague {
      id
      name
      displayName
    }
  }
  displayName
  slug
  position
  pictureUrl
  status {
    lastFifteenSo5Appearances
    lastFifteenSo5AverageScore
    lastFiveSo5Appearances
    lastFiveSo5AverageScore
    playingStatus
  }
  cardSampleUrl(rarity: "limited")
  cards(rarities: limited) {
    edges {
      node {
        priceRange {
          max
          min
        }
      }
    }
  }
}
    `;
export const GetPlayerInformationsDocument = gql`
    query getPlayerInformations($slug: String!) {
  player(slug: $slug) {
    ...PlayerInfo
  }
}
    ${PlayerInfoFragmentDoc}`;
export const GetPlayersInformationsDocument = gql`
    query getPlayersInformations($slugs: [String!]!) {
  players(slugs: $slugs) {
    ...PlayerInfo
  }
}
    ${PlayerInfoFragmentDoc}`;
export const SignInMutationDocument = gql`
    mutation signInMutation($input: signInInput!, $aud: String!) {
  signIn(input: $input) {
    currentUser {
      slug
      jwtToken(aud: $aud) {
        token
        expiredAt
      }
    }
    otpSessionChallenge
    errors {
      message
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getPlayerInformations(variables: GetPlayerInformationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPlayerInformationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPlayerInformationsQuery>(GetPlayerInformationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPlayerInformations');
    },
    getPlayersInformations(variables: GetPlayersInformationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPlayersInformationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPlayersInformationsQuery>(GetPlayersInformationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPlayersInformations');
    },
    signInMutation(variables: SignInMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignInMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignInMutationMutation>(SignInMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signInMutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;