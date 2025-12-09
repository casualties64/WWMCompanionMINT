
import React, { useState } from 'react';
import { BookOpen, Gift, Youtube, AlertCircle, ShoppingCart } from 'lucide-react';

export const GuideTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'PART1' | 'EXCHANGE' | 'ARENA'>('PART1');

  const TabButton: React.FC<{
    id: typeof activeTab;
    label: string;
    icon: React.ReactNode;
  }> = ({ id, label, icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`
        flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-bold transition-all duration-200 w-full md:w-auto justify-center
        ${activeTab === id 
          ? 'bg-wwm-green text-stone-900 shadow-lg shadow-emerald-900/20' 
          : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200'}
      `}
    >
      {icon}
      {label}
    </button>
  );

  const renderPart1 = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-stone-300 leading-relaxed">
      <div id="t3_1p0w88z-post-rtjson-content" className="md text-14-scalable pb-2xs" style={{ "--emote-size": "20px" } as any} dir="auto">
        <h1 className="text-24-scalable xs:text-20-scalable font-bold text-wwm-green mb-4 text-2xl">[Note: This guide is constantly being updated. Please check back often!]</h1>
        <p className="mb-4">
          <strong>[UPDATE] GUIDE SPLIT INTO 5 PARTS!</strong>
        </p>
        <p className="mb-4">
          Due to Reddit's post length limit, I cannot add more updates here. I have split the guide into Four parts to cover everything in detail.
        </p>
        <p className="mb-4">
          ---
        </p>
        <h1 className="text-24-scalable xs:text-20-scalable font-bold text-white mb-4 text-xl">⚠️ NAVIGATION INDEX</h1>
        <p className="mb-2">
          <strong>👉</strong><a className="text-wwm-green hover:underline cursor-pointer" href="https://www.reddit.com/r/wherewindsmeet_/comments/1p0w88z/guide_f2p_spending_guide_how_to_maximize_your/" target="_blank" rel="noopener noreferrer"><strong>[CLICK HERE FOR PART1: F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)]</strong></a>
        </p>
        <p className="mb-2">
          <strong>👉</strong> <a className="text-wwm-green hover:underline cursor-pointer" href="https://www.reddit.com/r/wherewindsmeet_/comments/1p1ra9a/guide_part_2_how_to_play_efficiently_ui_breakdown/" target="_blank" rel="noopener noreferrer"><strong>[CLICK HERE FOR PART 2: Gameplay, UI &amp; "No-Grind" Routine]</strong></a>
        </p>
        <p className="mb-2">
          <strong>👉</strong><a className="text-wwm-green hover:underline cursor-pointer" href="https://www.reddit.com/r/wherewindsmeet_/comments/1p1s0aj/guide_part_3_advanced_weapon_skin_reforging/" target="_blank" rel="noopener noreferrer"> <strong>[CLICK HERE FOR PART 3: Advanced Weapon Reforging(Weapon skins)]</strong></a>
        </p>
        <p className="mb-2">
          <strong>👉</strong><a className="text-wwm-green hover:underline cursor-pointer" href="https://www.reddit.com/r/wherewindsmeet_/comments/1p2u0jn/guide_part_4_where_winds_meet_the_ultimate/" target="_blank" rel="noopener noreferrer"><strong>[CLICK HERE FOR PART 4: Where Winds Meet: The Ultimate Merchant Trading Guide (How to Make Serious Money)</strong></a><strong>]</strong>
        </p>
        <p className="mb-2">
          <strong>👉</strong><a className="text-wwm-green hover:underline cursor-pointer" href="https://www.reddit.com/r/wherewindsmeet_/comments/1p3is5r/guide_part_5_cn_spoilers_want_to_plan_your_pulls/" target="_blank" rel="noopener noreferrer"><strong>[CLICK HERE FOR Part 5: [CN Spoilers] Want to plan your pulls? Here is the complete Cosmetics Roadmap(still update)]</strong></a>
        </p>
        <p className="mb-4">
          <strong>👉</strong> <a className="text-wwm-green hover:underline cursor-pointer" href="https://www.reddit.com/r/wherewindsmeet_/comments/1p6xsyn/psa_if_you_cant_trigger_a_new_encounterquest_read/" target="_blank" rel="noopener noreferrer"><strong>[PSA] If you can't trigger a new Encounter/Quest, read this (It's not a bug!)</strong></a>
        </p>
        <p className="mb-4">
          ---
        </p>
        <p className="mb-4">
          <em>(Original Post Starts Below)</em>
        </p>
        <h1 className="text-24-scalable xs:text-20-scalable font-bold text-wwm-green mb-4 text-2xl">Intro &amp; Reality Check</h1>
        <p className="mb-4">
          Hi everyone! I play on the CN server. English isn't my first language, so I'm using AI to help translate.
        </p>
        <p className="mb-4">
          I have spent some time putting this guide together to cover as many items and mechanics as possible. <strong>If you have any questions or if there are specific items you are confused about, please leave a comment.</strong> I will do my best to answer and update the main post with explanations.
        </p>
        <p className="mb-4">
          <strong>Heads up: This is a long and detailed post.</strong>
        </p>
        <p className="mb-4">
          However, if you really want to understand how the monetization works—whether you aim to be a strict F2P (Free-to-Play) player or want to spend money efficiently without getting ripped off—taking the time to read this carefully will be very helpful.
        </p>
        <p className="mb-4">
          <strong>⚠️ Important Expectation Management:</strong>
        </p>
        <p className="mb-4">
          I want to be very clear: <strong>This game is NOT predatory Pay-to-Win</strong> (spending is entirely restricted to cosmetics).
        </p>
        <p className="mb-4">
          <strong>HOWEVER, it is undeniably still an MMO.</strong>
        </p>
        <p className="mb-4">
          Even though the graphics and gameplay might look like a single-player action game, the payment structure is "bloated" and complex, typical of Asian MMOs. Even a "Lite" MMO is still an MMO at its core.
        </p>
        <p className="mb-4">
          <strong>Why am I sharing this?</strong>
        </p>
        <p className="mb-4">
          I know discussing money can be depressing. It often feels like stripping the joy out of a game and reducing it to a cold transaction.
        </p>
        <p className="mb-4">
          <strong>The Goal:</strong> Understanding these mechanics is the only way to spot potential "traps" so you can play with peace of mind.
        </p>
        <p className="mb-4">
          <strong>For F2P Players:</strong> I listed these details so you know exactly what you might "miss" and—more importantly—what you still get. I hope this rebuilds your confidence.
        </p>
        <p className="mb-4">
          <strong>Rest Assured:</strong> Please do not be intimidated. <strong>You can experience 100% of the continuous Main Story and Map updates without spending a single penny.</strong> Based on the CN version, I can confirm this content is excellent.
        </p>
        <p className="mb-4">
          Sometimes, we need to dive deeper into how a game makes money. This knowledge empowers you to choose <em><strong>how</strong></em> you want to enjoy the game—or calculate exactly how much it costs to meet your expectations—so you can manage your time and wallet wisely.
        </p>
        <p className="mb-8">
          <em><strong>Disclaimer: Please note that things might differ on Global, so treat this as a reference based on CN experience and always check your own server</strong></em>.
        </p>
        <h1 className="text-24-scalable xs:text-20-scalable font-bold text-wwm-green mb-4 text-2xl">1. The Store &amp; The "50% Off" Trick</h1>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3jrsf41id62g1.png?width=117&amp;format=png&amp;auto=webp&amp;s=a12fe9cabc2a31a0eda46793454a3a03c4f424a2" title="Image from r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3jrsf41id62g1.png?width=117&amp;format=png&amp;auto=webp&amp;s=a12fe9cabc2a31a0eda46793454a3a03c4f424a2" alt="r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="117" height="auto" style={{ aspectRatio: "117/129" }} loading="eager" />
          </a>
        </figure>
        <p className="mb-4">
          For cosmetics sold directly in the store, never pay full price.
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              <strong>The Coupons:</strong> These look like golden rectangular tickets. Each one gives <strong>10% off</strong>.
            </p>
          </li>
          <li>
            <p>
              <strong>How to get them:</strong>
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>
                <p>
                  <strong>Daily Sign-ins (Main Source):</strong> You get these regularly by logging in. (Roughly every 18 days).
                </p>
              </li>
              <li>
                <p>
                  <strong>Resonance Shop (Exchange):</strong> You can verify in the "Resonance Shop". You can usually exchange "Stardust" (points from gacha pulls) for <strong>1 extra coupon per month</strong>.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <p>
              <strong>Stacking Strategy:</strong> You can stack up to <strong>5 coupons</strong> on a single item. This means you can get a <strong>50% discount</strong>.
            </p>
          </li>
          <li>
            <p>
              <strong>Missed a day?</strong> If you miss a login, don't worry. You can earn currency from multiplayer modes to "make up" the sign-in, ensuring you get your coupons.
            </p>
          </li>
        </ul>
        <p className="mb-4">
          <strong>PRICE TIERS &amp; MICRO-SPENDING GUIDE:</strong>
        </p>
        <p className="mb-4">
          The Store features four main price tiers for direct-purchase cosmetics: 6, 68, 128, and 258 Pearls. The developers constantly add new items to these specific price points.
        </p>
        <p className="mb-4">
          If you are a "Micro-Spender" or on a tight budget, you will always find fresh options that fit your price range.
        </p>
        <p className="mb-4">
          Important: Unlike Limited Banners, old store items do NOT expire. They stay in the shop permanently while new ones are added. This means you can take your time to hoard Discount Coupons (to get that 50% off) and buy them whenever you are ready.
        </p>
        <p className="mb-8">
          This applies to more than just outfits. Budget-friendly Weapon Skins, Visual Effects, and Mounts are also updated regularly. So even with low spending, you will consistently find affordable items to enjoy.
        </p>
        <h1 className="text-24-scalable xs:text-20-scalable font-bold text-wwm-green mb-4 text-2xl">2. Echo Jade (Free Currency) - What to Buy vs. Save</h1>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3ug3fvb9d62g1.png?width=79&amp;format=png&amp;auto=webp&amp;s=46b5e5fc2f2bada720cd635d993e2fc490770cea" title="Image from r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3ug3fvb9d62g1.png?width=79&amp;format=png&amp;auto=webp&amp;s=46b5e5fc2f2bada720cd635d993e2fc490770cea" alt="r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="79" height="auto" style={{ aspectRatio: "79/71" }} loading="eager" />
          </a>
        </figure>
        <p className="mb-4">
          Jade is the green currency obtained from exploration and gameplay. Note that Jade is <strong>NOT purchasable directly with real money</strong> (even the Monthly Pass only accumulates it slowly), so every Jade counts.
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              <strong>Standard Uses:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <p>
                  <strong>Re-customization:</strong> Change