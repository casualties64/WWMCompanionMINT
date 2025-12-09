
import React, { useState } from 'react';
import { BookOpen, Gift, Youtube, AlertCircle, ShoppingCart, Sword, Coins, Calendar, MapPin, Search, Gamepad2 } from 'lucide-react';

export const GuideTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'PART1' | 'PART2' | 'PART3' | 'PART4' | 'PART5' | 'EXCHANGE' | 'ARENA'>('PART1');

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
                  <strong>Re-customization:</strong> Change your appearance (200 Jade).
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-pfkgj5fwg62g1.png?width=195&amp;format=png&amp;auto=webp&amp;s=e1678b401b84d8618e19cb360dd5026f13305e6c" title="Image from r/wherewindsmeet_ - Re-customize your character coupon" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-pfkgj5fwg62g1.png?width=195&amp;format=png&amp;auto=webp&amp;s=e1678b401b84d8618e19cb360dd5026f13305e6c" alt="r/wherewindsmeet_ - Re-customize your character coupon" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="195" height="auto" style={{ aspectRatio: "195/265" }} loading="eager" />
          </a>
          <figcaption className="text-center text-sm text-stone-500 mt-1">Re-customize your character coupon</figcaption>
        </figure>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              <strong>Skill Books:</strong> Buy from NPCs (~5000 Jade total to buy them all).
            </p>
          </li>
        </ul>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-f03sctzej62g1.png?width=225&amp;format=png&amp;auto=webp&amp;s=813fd3a212a8396c23a3fc907a1f2ea1df1c39fc" title="Image from r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-f03sctzej62g1.png?width=225&amp;format=png&amp;auto=webp&amp;s=813fd3a212a8396c23a3fc907a1f2ea1df1c39fc" alt="r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="225" height="auto" style={{ aspectRatio: "225/282" }} loading="eager" />
          </a>
        </figure>
        <p className="mb-4">
          There is a crucial technique called 'Yi Shui Ge'. You must prioritize leveling this skill to maximum rank immediately (ASAP), as it is mandatory for all martial arts builds. You may need to look for it by its icon or translated description if the name differs in the global version, ensuring you can level it up as fast as possible.
        </p>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-jl0qobfobj2g1.png?width=64&amp;format=png&amp;auto=webp&amp;s=4ccd6317e1f3e1780e1c97bb6582b53bb122ff9d" title="Image from r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-jl0qobfobj2g1.png?width=64&amp;format=png&amp;auto=webp&amp;s=4ccd6317e1f3e1780e1c97bb6582b53bb122ff9d" alt="r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="64" height="auto" style={{ aspectRatio: "64/81" }} loading="eager" />
          </a>
        </figure>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-us9u1z7pj62g1.png?width=320&amp;format=png&amp;auto=webp&amp;s=abe47f6a42a8899d8152c0807b41364f9a7623de" title="Image from r/wherewindsmeet_ - Find this merchant here.QINGHE" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-us9u1z7pj62g1.png?width=320&amp;format=png&amp;auto=webp&amp;s=abe47f6a42a8899d8152c0807b41364f9a7623de" alt="r/wherewindsmeet_ - Find this merchant here.QINGHE" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="320" height="auto" srcSet="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-us9u1z7pj62g1.png?width=320&amp;crop=smart&amp;auto=webp&amp;s=dde3aec9a9c0c6448c56682a89d220b0f96fe0ba 320w" sizes="(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw" style={{ aspectRatio: "320/153" }} loading="eager" />
          </a>
          <figcaption className="text-center text-sm text-stone-500 mt-1">Find this merchant here.QINGHE</figcaption>
        </figure>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-vs8z60d2k62g1.png?width=438&amp;format=png&amp;auto=webp&amp;s=fb0ffd5bcf6ffe37410305cc95c457ae324e8b8f" title="Image from r/wherewindsmeet_ - Find this merchant here.KAIFENG" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-vs8z60d2k62g1.png?width=438&amp;format=png&amp;auto=webp&amp;s=fb0ffd5bcf6ffe37410305cc95c457ae324e8b8f" alt="r/wherewindsmeet_ - Find this merchant here.KAIFENG" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="438" height="auto" srcSet="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-vs8z60d2k62g1.png?width=320&amp;crop=smart&amp;auto=webp&amp;s=2c675857e349436654d4af4582ffd4d21b765b23 320w" sizes="(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw" style={{ aspectRatio: "438/152" }} loading="eager" />
          </a>
          <figcaption className="text-center text-sm text-stone-500 mt-1">Find this merchant here.KAIFENG</figcaption>
        </figure>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-kg4q5ct7k62g1.png?width=451&amp;format=png&amp;auto=webp&amp;s=9dbd99efb89d19499d61b8eec0200bdf5317eea8" title="Image from r/wherewindsmeet_ - Find this merchant here.KaiFeng" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-kg4q5ct7k62g1.png?width=451&amp;format=png&amp;auto=webp&amp;s=9dbd99efb89d19499d61b8eec0200bdf5317eea8" alt="r/wherewindsmeet_ - Find this merchant here.KaiFeng" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="451" height="auto" srcSet="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-kg4q5ct7k62g1.png?width=320&amp;crop=smart&amp;auto=webp&amp;s=c966a78825156007770908e9faf7816a067ad255 320w" sizes="(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw" style={{ aspectRatio: "451/164" }} loading="eager" />
          </a>
          <figcaption className="text-center text-sm text-stone-500 mt-1">Find this merchant here.KaiFeng</figcaption>
        </figure>
        <p className="mb-4">
          <strong>gacha exchange:</strong> you can swap 160 <strong>echo jade</strong> for a standard (blue) pull. you can also swap 200 <strong>echo jade</strong> for a <strong>celestial echo</strong> (gold) pull, but this is limited to 2 per week (it is not unlimited!).
        </p>
        <p className="mb-4">
          <strong>monthly pass shop (cn feature):</strong> on cn, buying the monthly pass (~$5) unlocks a special privilege shop. there, you can buy a gender change item for 6,400 <strong>echo jade</strong>. (note: subject to change on global, but good to know).
        </p>
        <p className="mb-4">
          ⚠️ <strong>critical tip:</strong> the "limited echo jade banner". every season usually has a special banner that uses <strong>echo jade</strong>, not cash.
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              <strong>don't panic (duration):</strong> on the cn server, developers were quite generous with the time limit. these banners usually lasted a very long time (sometimes even extended into the next season) specifically to allow f2p players enough time to grind the <strong>echo jade</strong> needed.
            </p>
          </li>
          <li>
            <p>
              <strong>advice:</strong> while you don't need 24k <strong>echo jade</strong> right now, you should start saving. don't spend <strong>echo jade</strong> randomly on <strong>solemn echo</strong> banners, or you might regret it when the limited outfit drops.
            </p>
          </li>
          <li>
            <p>
              <strong>f2p reality check:</strong> you absolutely can save enough <strong>echo jade</strong> without buying a monthly pass. however, it requires effort. you will need to be diligent about clearing the map (100% exploration), opening every chest, and not missing events. the monthly pass just makes this process less tiring/stressful.
            </p>
          </li>
        </ul>
        <p className="mb-4">
          <strong>note:</strong> regular (blue) gacha tickets and <strong>echo jade</strong> are used for two different types of banners:
        </p>
        <ol className="list-decimal pl-5 mb-4 space-y-1">
          <li>
            <p>
              the <strong>solemn echo</strong> banner (this is permanent and will always exist).
            </p>
          </li>
          <li>
            <p>
              the limited-time <strong>echo jade</strong> banner (not released on global yet).
            </p>
          </li>
        </ol>
        <p className="mb-4">
          <strong>important:</strong> the pity/guarantee count is not shared between these two banners. they are calculated completely separately.
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              the limited-edition <strong>echo jade</strong> banner requires 24,000 <strong>echo jade</strong> (or 150 standard pulls) to hit pity and usually lasts for about 3 months.
            </p>
          </li>
        </ul>
        <p className="mb-4">
          <strong>the unlock requirement:</strong> you need to have pulled a total of 200 times on the <strong>solemn echo</strong> banner to unlock access to the limited <strong>echo jade</strong> banner.
        </p>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>
            <p>
              <strong>don't worry about "wasted" pulls:</strong> if you are pulling on <strong>solemn echo</strong> right now, your progress counts! when the limited <strong>echo jade</strong> banner eventually releases, the game will look at your past history. if you have already done 200 pulls by then, the new banner will be unlocked immediately.
            </p>
          </li>
          <li>
            <p>
              <strong>one-time threshold:</strong> you only need to reach this 200-pull threshold once for your account. once unlocked, all future limited <strong>echo jade</strong> banners in later seasons will be automatically unlocked for you. you do not need to pull 200 times on <strong>solemn echo</strong> again for every new banner.
            </p>
          </li>
        </ul>
        <h1 className="text-24-scalable xs:text-20-scalable font-bold text-wwm-green mb-4 text-2xl">3. Celestial Echo: The F2P Strategy</h1>
        <p className="mb-4">
          <strong>clarification:</strong> this is a completely different pool from the <strong>solemn echo</strong> or <strong>echo jade</strong> banners mentioned above. you cannot use <strong>echo jade</strong> directly here.
        </p>
        <p className="mb-4">
          to pull in this pool (<strong>celestial echo</strong>), you must use pearls (cash currency) or <strong>special echo</strong> (gold tickets).
        </p>
        <p className="mb-4">
          <strong>important:</strong> while <strong>special echo</strong> tickets can be bought with pearls, there are several ways to obtain them for free inside the game. you do not strictly need to spend money if you are patient.
        </p>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-s7bljktce62g1.png?width=90&amp;format=png&amp;auto=webp&amp;s=7380faeac48ecca7611b37f56987d4215d688ebc" title="Image from r/wherewindsmeet_ -  160 Echo Jade" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-s7bljktce62g1.png?width=90&amp;format=png&amp;auto=webp&amp;s=7380faeac48ecca7611b37f56987d4215d688ebc" alt="r/wherewindsmeet_ -  160 Echo Jade" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="90" height="auto" style={{ aspectRatio: "90/81" }} loading="eager" />
          </a>
          <figcaption className="text-center text-sm text-stone-500 mt-1"> 160 Echo Jade</figcaption>
        </figure>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-h7l2c5vhe62g1.png?width=93&amp;format=png&amp;auto=webp&amp;s=f81caa5ac015f41b2bd07f87113b092a5b7d3bd0" title="Image from r/wherewindsmeet_ - Lingering Melody" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-h7l2c5vhe62g1.png?width=93&amp;format=png&amp;auto=webp&amp;s=f81caa5ac015f41b2bd07f87113b092a5b7d3bd0" alt="r/wherewindsmeet_ - Lingering Melody" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="93" height="auto" style={{ aspectRatio: "93/90" }} loading="eager" />
          </a>
          <figcaption className="text-center text-sm text-stone-500 mt-1">Lingering Melody</figcaption>
        </figure>
        <p className="mb-4">
          <strong>the celestial echo pool</strong> (limited banner) has a hard pity at 150 pulls. unless you're a whale, do not spend real money here. you can actually grind this for free.
        </p>
        <p className="mb-4">
          <strong>weekly routine (3 pulls total):</strong>
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              <strong>shop:</strong> buy 2 pulls for 200 <strong>echo jade</strong> each.
            </p>
          </li>
          <li>
            <p>
              <strong>season shop:</strong> buy 1 pull. (this is the "no-grind" shop that lets you exchange points from simple weekly activities. rewards you for playing casually without the heavy grind.)
            </p>
          </li>
          <li>
            <p>
              <strong>monthly:</strong> exchange for 2 pulls in the shop using points from your free pulls.
            </p>
          </li>
          <li>
            <p>
              <strong>exploration:</strong> some npcs give premium pulls (<strong>special echo</strong>) when defeated.
            </p>
          </li>
          <li>
            <p>
              <strong>events:</strong> always watch out for limited-time events.
            </p>
          </li>
        </ul>
        <p className="mb-4">
          <strong>result:</strong> a f2p player can get ~30 pulls/month. it takes 4-6 months to hit pity for free. patience is key.
        </p>
        <p className="mb-4">
          ⚠️ <strong>important mechanics (common misconceptions):</strong>
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              <strong>pity carries over:</strong> if the current <strong>celestial echo</strong> banner ends and you haven't hit the 150 guarantee yet, your pull count <strong>does not reset</strong>. it carries over to the next limited banner. you can safely "build pity" over several months.
            </p>
          </li>
          <li>
            <p>
              <strong>separate pools:</strong> the <strong>solemn echo</strong> (standard) and <strong>celestial echo</strong> (limited) pools are completely independent. building pity on the standard pool does not help your limited pool pity at all.
            </p>
          </li>
        </ul>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3f3vjxyrh62g1.png?width=447&amp;format=png&amp;auto=webp&amp;s=961e3f775771e3d7478555af47f6c1f79e567aa9" title="Image from r/wherewindsmeet_ - harmonic cores" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3f3vjxyrh62g1.png?width=447&amp;format=png&amp;auto=webp&amp;s=961e3f775771e3d7478555af47f6c1f79e567aa9" alt="r/wherewindsmeet_ - harmonic cores" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="447" height="auto" srcSet="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3f3vjxyrh62g1.png?width=320&amp;crop=smart&amp;auto=webp&amp;s=a151ee200966c8cdd7fc10f5668058d090b4ef99 320w" sizes="(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw" style={{ aspectRatio: "447/433" }} loading="eager" />
          </a>
          <figcaption className="text-center text-sm text-stone-500 mt-1">harmonic cores</figcaption>
        </figure>
        <p className="mb-4">
          <strong>💡 PRO TIP: The "</strong><em><strong>harmonic cores</strong></em><strong>"&amp; Dismantling</strong>
        </p>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>
            <p>
              The "<em>harmonic cores</em>" item you see in the pool is the Universal Exchange Token.
            </p>
          </li>
          <li>
            <p>
              How it works: If you hit Hard Pity (150 pulls) and receive this Token instead of the outfit, you can use it to exchange for items in the banner shop.
            </p>
          </li>
          <li>
            <p>
              The "Regret" Mechanic (Crucial):
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <p>
                  What if you pulled the Rate-Up Outfit but you actually don't like it? Or maybe you wanted the Weapon Skin instead?
                </p>
              </li>
              <li>
                <p>
                  YOU CAN DISMANTLE/DECOMPOSE THE OUTFIT!(Only while it's still in your bag (without clicking to use).)
                </p>
              </li>
              <li>
                <p>
                  The Rate: Dismantling the main outfit gives you 2 <em>Eight - Sound Core</em>.
                </p>
              </li>
              <li>
                <p>
                  Usage: You can then use these 2 <em>harmonic cores</em> to exchange for other items in the shop (like the Weapon Skin, Hair Dye, or save them). This gives you flexibility if you regret your pull!
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <h1 className="text-24-scalable xs:text-20-scalable font-bold text-wwm-green mb-4 text-2xl">how to recycle/exchange items back to harmonic cores</h1>
        <p className="mb-4">
          just adding a quick section here since this can be kinda tricky. if you wanna swap your gacha items back, here’s the drill:
        </p>
        <ol className="list-decimal pl-5 mb-4 space-y-1">
          <li>
            <p>
              <strong>keep it in the bag:</strong> making this super clear—the item must be unused in your <strong>bag</strong>. if you have ever clicked "use" on it, it's locked to your character and you can't put it back in the bag to exchange.
            </p>
          </li>
          <li>
            <p>
              <strong>click exchange:</strong> once you're in the bag interface, just hit the exchange button.
            </p>
          </li>
          <li>
            <p>
              <strong>no expiration:</strong> <em><strong>harmonic cores</strong></em> don't have a time limit. feel free to stack them up and save them for future banners/pools if you want.
            </p>
          </li>
        </ol>
        <p className="mb-4">
          dropping 2 screenshots below so you can see exactly where to click. hope this helps!
        </p>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-inrtct9lpp3g1.png?width=3781&amp;format=png&amp;auto=webp&amp;s=4ad6772b37827f05be1012c20ade30984c687b7a" title="Image from r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-inrtct9lpp3g1.png?width=3781&amp;format=png&amp;auto=webp&amp;s=4ad6772b37827f05be1012c20ade30984c687b7a" alt="r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="750" height="auto" srcSet="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-inrtct9lpp3g1.png?width=320&amp;crop=smart&amp;auto=webp&amp;s=ab8bae21f7ff76b5980107fc8e621e86c175ca08 320w, https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-inrtct9lpp3g1.png?width=640&amp;crop=smart&amp;auto=webp&amp;s=f8468c7ba1901327a24d44a3848b727c06758c92 640w, https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-inrtct9lpp3g1.png?width=1080&amp;crop=smart&amp;auto=webp&amp;s=0ef00de546e1e78c7f1a01c380aee6730f06acf0 1080w" sizes="(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw" style={{ aspectRatio: "750/358.04" }} loading="eager" />
          </a>
        </figure>
        <figure className="mb-8 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-8x45kcylpp3g1.png?width=3799&amp;format=png&amp;auto=webp&amp;s=ea1cad18fe47357ef4bcae7b54ab94e85d27d43d" title="Image from r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-8x45kcylpp3g1.png?width=3799&amp;format=png&amp;auto=webp&amp;s=ea1cad18fe47357ef4bcae7b54ab94e85d27d43d" alt="r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="750" height="auto" srcSet="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-8x45kcylpp3g1.png?width=320&amp;crop=smart&amp;auto=webp&amp;s=67f317e2df6cf6b31b9e5294cc27fdd093d3304e 320w, https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-8x45kcylpp3g1.png?width=640&amp;crop=smart&amp;auto=webp&amp;s=c6c4bbd120ee2213f6c053cd760be423c56fa4f7 640w, https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-8x45kcylpp3g1.png?width=1080&amp;crop=smart&amp;auto=webp&amp;s=c7c3d99552624adf07118393f5613d92cf00b657 1080w" sizes="(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw" style={{ aspectRatio: "750/408.858" }} loading="eager" />
          </a>
        </figure>
        <h1 className="text-24-scalable xs:text-20-scalable font-bold text-wwm-green mb-4 text-2xl">4. advanced gacha mechanics: the "hidden pity" &amp; duplicates</h1>
        <p className="mb-4">
          the gacha rules recently got an upgrade on cn. the wording is confusing, so here is the simple breakdown of how the safety net works for the limited echo jade banner (outfits).
        </p>
        <p className="mb-4">
          a. the "bad luck" protection (hardest pity) if you are extremely unlucky, the game has a hidden counter to force the outfit to drop.
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              the trigger: once you have done 131 pulls in the banner.
            </p>
          </li>
          <li>
            <p>
              the mechanism: after 131 pulls, if you pull a gold drop but it is not the outfit, you gain 20% "wish value".
            </p>
          </li>
          <li>
            <p>
              the guarantee: once this value hits 100% (meaning you pulled a gold drop 5 times in a row without seeing the outfit), your next gold reward is guaranteed to be the outfit set.
            </p>
          </li>
          <li>
            <p>
              summary: basically, even with the worst rng possible, the game eventually stops giving you random items and forces the outfit to appear.
            </p>
          </li>
        </ul>
        <p className="mb-4">
          b. duplicate recycling (purple items) don't be sad if you get duplicate purple (epic) cosmetics.
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              conversion: if you pull a purple cosmetic you already own, it converts into a special currency (let's call it echo tokens).
            </p>
          </li>
          <li>
            <p>
              what to buy with it: you can use these tokens to buy high-value items:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <p>
                  premium dye: used for dyeing hair (including white hair).
                </p>
              </li>
              <li>
                <p>
                  reroll stone: used to reroll the stats/colors of your weapon skin.
                </p>
              </li>
              <li>
                <p>
                  sfx currency: used to buy special visual effects for your character.
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <figure className="mb-8 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-y4gdlr8qf62g1.png?width=463&amp;format=png&amp;auto=webp&amp;s=67ddf8600efeb7231e959316f08688e8d0a1a367" title="Image from r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-y4gdlr8qf62g1.png?width=463&amp;format=png&amp;auto=webp&amp;s=67ddf8600efeb7231e959316f08688e8d0a1a367" alt="r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="463" height="auto" srcSet="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-y4gdlr8qf62g1.png?width=320&amp;crop=smart&amp;auto=webp&amp;s=f5faec91dfcd1416c58aec2a82ac9427e199a9ac 320w" sizes="(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw" style={{ aspectRatio: "463/338" }} loading="eager" />
          </a>
        </figure>
        <h1 className="text-24-scalable xs:text-20-scalable font-bold text-wwm-green mb-4 text-2xl">5. The Dye System: F2P vs. Premium &amp; How to Farm</h1>
        <p className="mb-4">
          Customization is huge in this game. The dye system is split into two tiers: <strong>Basic (Low Saturation)</strong> and <strong>Premium (High Saturation)</strong>.
        </p>
        <p className="mb-4">
          <strong>A. Clothing Dyes (10 powders per dye)</strong>
        </p>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3ido9dqdf62g1.png?width=101&amp;format=png&amp;auto=webp&amp;s=bf12958d70e3e99061c59158c609049bde3bb5e8" title="Image from r/wherewindsmeet_ - Basic Dye" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-3ido9dqdf62g1.png?width=101&amp;format=png&amp;auto=webp&amp;s=bf12958d70e3e99061c59158c609049bde3bb5e8" alt="r/wherewindsmeet_ - Basic Dye" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="101" height="auto" style={{ aspectRatio: "101/102" }} loading="eager" />
          </a>
          <figcaption className="text-center text-sm text-stone-500 mt-1">Basic Dye</figcaption>
        </figure>
        <p className="mb-4">
          <strong>1. Basic Dye (Wooden Box Icon):</strong>
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              Effect: Creates soft, low-saturation colors (Morandi colors).
            </p>
          </li>
          <li>
            <p>
              Review: Honestly, this is enough for 90% of outfits. You can find amazing dye presets from other players that only use this free dye.
            </p>
          </li>
          <li>
            <p>
              How to Farm (Detailed Sources): You can get hundreds of these per month. Here is the full list of shops:
            </p>
          </li>
        </ul>
        <ol className="list-decimal pl-5 mb-4 space-y-1">
          <li>
            <p>
              Dihua Shop (Standard Gacha Banner Shop): Cost: 2 Dihua. Limit: 99 per day. (This is the easiest source!).
            </p>
          </li>
          <li>
            <p>
              Stardust Shop (Gacha Exchange): Cost: 2 Stardust. Limit: 99 per day.
            </p>
          </li>
          <li>
            <p>
              Battle Pass Shop: Cost: 1 BP Coin. Limit: 5 per month.
            </p>
          </li>
          <li>
            <p>
              Social Shops (Affinity / Sworn / Mentorship):
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <p>
                  Affinity Shop: Limit 10/month.
                </p>
              </li>
              <li>
                <p>
                  Sworn/Brotherhood Shop: Limit 10/month.
                </p>
              </li>
              <li>
                <p>
                  Mentorship Shop: Limit 10/month.
                </p>
              </li>
              <li>
                <p>
                  (Cost: 100 Social Coins each).
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              General Merchant (Feng's Brokerage): Cost: 8000 Coins (Standard currency). Limit: 10/month.
            </p>
          </li>
          <li>
            <p>
              Red Name/Jail Area (Sin Forest): Cost: 200 Sin Leaves. Limit: 10/month.
            </p>
          </li>
          <li>
            <p>
              Limited Event Shops: Usually available for event currency (Limit ~35).
            </p>
          </li>
        </ol>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              Verdict: You will likely never run out of this dye.
            </p>
          </li>
        </ul>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-hkr78ia0f62g1.png?width=105&amp;format=png&amp;auto=webp&amp;s=7e8b151e1914d3afcb33b1b4b2e6982cc4e946e1" title="Image from r/wherewindsmeet_ - Advanced dyes" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-hkr78ia0f62g1.png?width=105&amp;format=png&amp;auto=webp&amp;s=7e8b151e1914d3afcb33b1b4b2e6982cc4e946e1" alt="r/wherewindsmeet_ - Advanced dyes" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="105" height="auto" style={{ aspectRatio: "105/102" }} loading="eager" />
          </a>
          <figcaption className="text-center text-sm text-stone-500 mt-1">Advanced dyes</figcaption>
        </figure>
        <p className="mb-4">
          <strong>2. Premium Dye (Green Box Icon - "Cloud Glow"):</strong>
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              Effect: Allows for High Saturation colors (Bright Red, Deep Black, Neon, etc.).
            </p>
          </li>
          <li>
            <p>
              How to Farm (Detailed Sources): This is harder to get than the basic dye.
            </p>
          </li>
        </ul>
        <ol className="list-decimal pl-5 mb-4 space-y-1">
          <li>
            <p>
              Dihua Shop (Standard Gacha Banner Shop): Cost: 10 Dihua. Limit: 10 per week. (This is your main steady source).
            </p>
          </li>
          <li>
            <p>
              Stardust Shop (Gacha Exchange): Cost: 10 Stardust. Limit: 99 per week. (Uses currency from pulling).
            </p>
          </li>
          <li>
            <p>
              Battle Pass Shop: Cost: 5 BP Coins. Limit: 5 per month.
            </p>
          </li>
          <li>
            <p>
              Limited Event Shops: Often available in event stores (e.g., Limit ~45 total).
            </p>
          </li>
          <li>
            <p>
              General Store (Jianghu Treasures): Cost: 100 Pearls. (DO NOT BUY, total rip-off).
            </p>
          </li>
        </ol>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              Monthly Estimate: If you clear the Dihua Shop every week (40) and the Battle Pass (5), an active F2P player can get about 45 powders per month.
            </p>
          </li>
        </ul>
        <p className="mb-4">
          Multiple dyeing slots: Open the clothing menu—My Designs. Each outfit allows you to save 3 dyeing schemes for free. To unlock the maximum, you need to spend Jade to unlock an additional 4 slots. Saved dyeing designs are permanent and can be switched between at any time.
        </p>
        <p className="mb-4">
          <strong>⚠️ CRITICAL WARNING: Do Not Buy "Pre-Dyed" Bundles!</strong>
        </p>
        <p className="mb-4">
          When browsing the Store or viewing other players' presets ("Copying Homework"), you will often see an option to buy the "Outfit + Dye Scheme" together.
        </p>
        <p className="mb-4">
          ABSOLUTELY DO NOT CLICK BUY YET.
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              The Trap: If you buy it this way, the game charges you Pearls (Cash currency) for the dye costs. This is a huge waste because you can get dyes for free via the Battle Pass and Daily Activities.
            </p>
          </li>
          <li>
            <p>
              The Correct Method:
            </p>
          </li>
        </ul>
        <ol className="list-decimal pl-5 mb-4 space-y-1">
          <li>
            <p>
              Always switch the preview back to the "Original Color" first.
            </p>
          </li>
          <li>
            <p>
              Buy the Base Outfit only.
            </p>
          </li>
          <li>
            <p>
              If you liked that specific dye scheme, "Favorite/Save" the preset.
            </p>
          </li>
          <li>
            <p>
              Go to your Dye Menu, apply the saved preset, and pay using your Hoarded Free Dyes.
            </p>
          </li>
        </ol>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              Result: You get the same look, but you save your Pearls!
            </p>
          </li>
        </ul>
        <p className="mb-4">
          <strong>Pro Tip regarding Dye Slots:</strong>
        </p>
        <p className="mb-4">
          On the CN server, the **Monthly Pass Privilege Shop** allows you to buy the "Dye Slot Expansion Item" for just **25 Jade**. (You need 2 items to unlock one new slot).
        </p>
        <p className="mb-4">
          Currently on Global, this item is only available in the cash shop for **20 Pearls**.
        </p>
        <p className="mb-4">
          <strong>⚠️ Advice:</strong> Do NOT buy it with Pearls right now! It is highly likely that the Monthly Pass shop will be updated in the future. If you buy it with Pearls now, you might regret wasting premium currency when you could have bought it with free Jade later.
        </p>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-hz4oq5yhw82g1.png?width=272&amp;format=png&amp;auto=webp&amp;s=bd669807cbeaae74c6a24ceb029d7eb9d8dbd7ce" title="Image from r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-hz4oq5yhw82g1.png?width=272&amp;format=png&amp;auto=webp&amp;s=bd669807cbeaae74c6a24ceb029d7eb9d8dbd7ce" alt="r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="272" height="auto" style={{ aspectRatio: "272/286" }} loading="eager" />
          </a>
        </figure>
        <p className="mb-4">
          <strong>B. Hair Dyes (10 pastes per dye)</strong>
        </p>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-4lpbz0d1f62g1.png?width=121&amp;format=png&amp;auto=webp&amp;s=4e9ac02b67c8727fab2f8f940cc29f8310c7a414" title="Image from r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-4lpbz0d1f62g1.png?width=121&amp;format=png&amp;auto=webp&amp;s=4e9ac02b67c8727fab2f8f940cc29f8310c7a414" alt="r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="121" height="auto" style={{ aspectRatio: "121/108" }} loading="eager" />
          </a>
        </figure>
        <p className="mb-4">
          <strong>1. Basic Hair Dye (Beige Pot - "Qingsi"):</strong>
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              Effect: Creates natural hair colors (Blacks, Browns, etc.).
            </p>
          </li>
          <li>
            <p>
              How to Farm (Detailed Sources):
            </p>
          </li>
        </ul>
        <ol className="list-decimal pl-5 mb-4 space-y-1">
          <li>
            <p>
              Dihua Shop (Standard Gacha Banner Shop): Cost: 5 Dihua. Limit: 10 per month. (Best steady source).
            </p>
          </li>
          <li>
            <p>
              NPC Shop (Zhao Feiyan's Stash): Cost: 25,000 Coins (Standard currency). Limit: 5 per month.
            </p>
          </li>
          <li>
            <p>
              Limited Event Shops: Often available in event stores (Limit ~45).
            </p>
          </li>
          <li>
            <p>
              General Store (Jianghu Treasures): Cost: 50 Pearls. (NOT RECOMMENDED, do not waste Pearls on this).
            </p>
          </li>
        </ol>
        <figure className="mb-6 block w-fit my-0 mx-auto max-w-[100%]">
          <a href="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-0rl7bsi9f62g1.png?width=118&amp;format=png&amp;auto=webp&amp;s=4d21e224cf46773e05caa4f41a45bd19924651eb" title="Image from r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" rel="noopener noreferrer" target="_blank">
            <img src="https://preview.redd.it/guide-f2p-spending-guide-how-to-maximize-your-jade-coupons-v0-0rl7bsi9f62g1.png?width=118&amp;format=png&amp;auto=webp&amp;s=4d21e224cf46773e05caa4f41a45bd19924651eb" alt="r/wherewindsmeet_ - [Guide] F2P &amp; Spending Guide: How to maximize your Jade, Coupons, and Gacha (CN Experience)" className="mb-0 block w-fit my-0 mx-auto max-w-[100%] rounded-lg shadow-md" width="118" height="auto" style={{ aspectRatio: "118/125" }} loading="eager" />
          </a>
        </figure>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              <strong>2. Premium Hair Dye (Blue Pot - "Ninghua"):</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <p>
                  <strong>Effect:</strong> Required for <strong>White/Silver hair</strong> or very bright unnatural colors.
                </p>
              </li>
              <li>
                <p>
                  <strong>Cost:</strong> 1 Dye Job = 10 Pastes.
                </p>
              </li>
              <li>
                <p>
                  <strong>Exchange Rate:</strong> 1 Gacha Token (Echo) = 5 Premium Hair Pastes. So, dyeing once costs <strong>2 orb</strong>.
                </p>
              </li>
              <li>
                <p>
                  <strong>⚠️ SMART SAVING TIP (Don't Buy Direct):</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <p>
                      <strong>I do NOT recommend crafting this dye directly.</strong> It is too expensive (Costs 2 orb).
                    </p>
                  </li>
                  <li>
                    <p>
                      Instead, <strong>wait for Limited Paid Banners</strong>. The game frequently releases special hairstyles that come <strong>pre-dyed</strong> in rare colors (e.g., Red, Gold, Platinum).
                    </p>
                  </li>
                  <li>
                    <p>
                      These pre-dyed hairs usually cost only <strong>1 orb</strong> to exchange.
                    </p>
                  </li>
                  <li>
                    <p>
                      <em>Verdict:</em> Waiting for the specific hair banner is <strong>50% cheaper</strong> than buying the dye yourself!
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p className="mb-4">
          <strong>C. Important Mechanic: Gender Change Refund</strong> If you decide to change your character's gender later (using the item mentioned in Section 2):
        </p>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>
            <p>
              <strong>The Rule:</strong> The game will <strong>REFUND</strong> all the dyes you used on your previous gender's outfits.
            </p>
          </li>
          <li>
            <p>
              <strong>The Catch:</strong> They are refunded as <strong>Time-Limited Items</strong>.
            </p>
          </li>
          <li>
            <p>
              <strong>The Strategy:</strong> Make sure you are ready to re-dye your new outfits immediately after changing gender so you don't waste the refunded materials!
            </p>
          </li>
        </ul>
        <h1 className="text-24-scalable xs:text-20-scalable font-bold text-wwm-green mb-4 text-2xl">Extended Reading: Future Events &amp; Advanced CN Insights</h1>
        <p className="mb-4">
          <em>(The following sections describe events and features that may not be available on the Global server yet. Please treat this as a "Sneak Peek" or a guide on what to save your resources for in the future.)</em>
        </p>
        <h1 className="text-24-scalable xs:text-20-scalable font-bold text-wwm-green mb-4 text-2xl">6. Step-Up Spin (Spinning Wheel)</h1>
        <p className="mb-4">
          <em>(Note: Prices calculated in "Pearls"/Cash currency)</em> This is a limited-time event that is usually cheaper than the main Paid Pool, but costs increase per layer.
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              <strong>Structure:</strong> It has <strong>4 layers</strong>. You unlock the next layer by clearing the current one or getting lucky with the "Grand Prize" early.
            </p>
          </li>
          <li>
            <p>
              <strong>Freebies:</strong> First spin is free. You can also swap 900 Jade for 18 spins.
            </p>
          </li>
          <li>
            <p>
              <strong>Layer 1:</strong> Costs 10 Pearls/spin. (Max cost ~110 Pearls after freebies).
            </p>
          </li>
          <li>
            <p>
              <strong>Layer 2:</strong> Costs 60 Pearls/spin. (Max cost ~3,600 Pearls).
            </p>
          </li>
          <li>
            <p>
              <strong>Layer 3:</strong> Costs 120 Pearls/spin. (Max cost ~7,200 Pearls).
            </p>
          </li>
        </ul>
        <p className="mb-4">
          <strong>COST ANALYSIS:</strong>
        </p>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>
            <p>
              <strong>Worst Case (Hard Pity):</strong> If you have terrible luck and have to clear every item, Layers 1-3 will cost about <strong>10,900 Pearls</strong> total.
            </p>
          </li>
          <li>
            <p>
              <strong>Average Luck:</strong> Realistically, you usually unlock the next layer early without clearing the pot. Most players manage to finish Layer 3 with around <strong>5,000 - 6,000 Pearls</strong>.
            </p>
          </li>
          <li>
            <p>
              <strong>Layer 4 (Warning):</strong> Costs 160 Pearls/spin. Max cost is about <strong>57,600 Pearls</strong>. This is extremely expensive.
            </p>
          </li>
          <li>
            <p>
              <strong>The Strategy:</strong> Layer 4 usually rewards <strong>White Hair</strong>. If you don't strictly need it, <strong>STOP after Layer 3</strong>. You get all the outfits and animations for the best value.
            </p>
          </li>
          <li>
            <p>
              <strong>Monthly Pass Tip:</strong> The Monthly Pass usually gives <strong>300 Pearls</strong> instantly. I highly recommend <strong>saving these Pearls specifically for this Roulette event</strong> rather than spending them on single pulls. Over a few months, this stash can cover a huge chunk of the event cost!
            </p>
          </li>
        </ul>
        <h1 className="text-24-scalable xs:text-20-scalable font-bold text-wwm-green mb-4 text-2xl">7. Special Mini-Game: "Turtle Matching" (Potential Event)</h1>
        <p className="mb-4">
          <em>(Disclaimer: This event appeared once on CN. It is not guaranteed to come to Global, but if it does, here is how it works.)</em>
        </p>
        <p className="mb-4">
          <strong>The Rewards (Autumn/Golden Theme):</strong> This event pool features specific cosmetic items, including:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              <strong>Grand Prizes:</strong> A "Golden Wing" Back Accessory (2888 Points) and a "Golden Palace" Background Scene (1888 Points).
            </p>
          </li>
          <li>
            <p>
              <strong>Accessories:</strong> Bamboo-themed earrings, face veils, headwear, and waist ornaments.
            </p>
          </li>
        </ul>
        <p className="mb-4">
          <strong>How it Works:</strong>
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              <strong>The Game:</strong> It's a 3x3 grid game. You buy "Fortune Bags" to place turtles on the grid.
            </p>
          </li>
          <li>
            <p>
              <strong>Cost:</strong> <strong>10 Pearls</strong> per bag (draw).
            </p>
          </li>
          <li>
            <p>
              <strong>Refund Mechanics:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <p>
                  <strong>Pair Match:</strong> 2 identical turtles = Points + <strong>1 Free Bag</strong>.
                </p>
              </li>
              <li>
                <p>
                  <strong>Line Match:</strong> 3 identical turtles in a line = More Points + <strong>3 Free Bags</strong>.
                </p>
              </li>
              <li>
                <p>
                  <strong>All Unique:</strong> If all turtles are different = Max Points + <strong>5 Free Bags</strong>.
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <p className="mb-4">
          <strong>Cost Analysis (Realistic Budget):</strong> Please be careful with your budget, as "clearing the shop" is expensive.
        </p>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>
            <p>
              <strong>Cosmetics Only (Wings + Accessories):</strong> Some lucky players cleared this for ~3,000 Pearls, but realistically, you should budget <strong>4,000 - 5,000 Pearls</strong> for average luck.
            </p>
          </li>
          <li>
            <p>
              <strong>Full Clear (Including the Background Scene):</strong> The Background Scene is very expensive (1888 pts). If you want <em>everything</em>, expected cost is <strong>6,000+ Pearls</strong>.
            </p>
          </li>
        </ul>
        <p className="mb-4">
          <strong>⚠️ PRO STRATEGY (CRITICAL):</strong> The "Fortune Bags" have a small chance to <strong>drop the cosmetic rewards directly</strong>.
        </p>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>
            <p>
              <strong>DO NOT</strong> spend your points immediately in the event shop.
            </p>
          </li>
          <li>
            <p>
              <strong>Finish all your draws first.</strong> You might get the expensive Golden Wing or other accessories for free from the bags.
            </p>
          </li>
          <li>
            <p>
              <strong>Only use points at the very end</strong> to exchange for the specific items you are missing. If you exchange early, you might pull a duplicate later and waste money!
            </p>
          </li>
        </ul>
        <h1 className="text-24-scalable xs:text-20-scalable font-bold text-wwm-green mb-4 text-2xl">Conclusion: Managing Your Expectations</h1>
        <p className="mb-4">
          I wrote this guide not just to explain the mechanics, but to help you <strong>manage your expectations</strong>.
        </p>
        <p className="mb-4">
          My goal is to show you clearly what the "Spending Ceiling" looks like for whales and what the "Grind Reality" looks like for F2P players.
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <p>
              For Spenders: I hope this helps you see where your money actually goes and where to stop.
            </p>
          </li>
          <li>
            <p>
              For F2P: I hope this helps you understand the limits of free play so you don't feel frustrated later.
            </p>
          </li>
        </ul>
        <p className="mb-4">
          Gaming is an investment of both time and money. By understanding the economy early, you can decide right now if this game fits your budget and lifestyle, rather than sinking hundreds of hours into it only to be disappointed later.
        </p>
        <p className="mb-4">
          Whether you decide to grind hard, play casually, or realize this game isn't for you—I just hope this transparency helps you make the right choice for yourself.
        </p>
        <p className="mb-4">
          Thanks for reading, and have fun in the Jianghu!
        </p>
      </div>
    </div>
  );

  const renderPart2 = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-4">
        <Gamepad2 size={48} className="text-wwm-green opacity-50" />
        <h2 className="text-xl font-bold text-stone-300">Gameplay Guide Coming Soon</h2>
        <p className="text-stone-500 max-w-md">
          Part 2 will cover UI breakdown, daily routines, and efficient gameplay loops. Check back later!
        </p>
      </div>
    </div>
  );

  const renderPart3 = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-4">
        <Sword size={48} className="text-wwm-green opacity-50" />
        <h2 className="text-xl font-bold text-stone-300">Weapon Reforging Guide Coming Soon</h2>
        <p className="text-stone-500 max-w-md">
          Part 3 will detail advanced weapon skin reforging and customization. Check back later!
        </p>
      </div>
    </div>
  );

  const renderPart4 = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-4">
        <Coins size={48} className="text-wwm-green opacity-50" />
        <h2 className="text-xl font-bold text-stone-300">Merchant Trading Guide Coming Soon</h2>
        <p className="text-stone-500 max-w-md">
          Part 4 will be the ultimate guide to making money through merchant trading. Check back later!
        </p>
      </div>
    </div>
  );

  const renderPart5 = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-4">
        <Calendar size={48} className="text-wwm-green opacity-50" />
        <h2 className="text-xl font-bold text-stone-300">Cosmetics Roadmap Coming Soon</h2>
        <p className="text-stone-500 max-w-md">
          Part 5 will contain CN spoilers and a roadmap for future cosmetics to help you plan your pulls. Check back later!
        </p>
      </div>
    </div>
  );

  const renderExchange = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-wwm-green mb-4 flex items-center gap-2">
                <Gift size={20} /> Active Redemption Codes
            </h2>
            <div className="space-y-3">
                {[
                    { code: "WWMISTHEBEST", desc: "Starter rewards" },
                    { code: "WWMLAUNCH", desc: "Launch celebration pack" },
                    { code: "WWM666", desc: "Lucky pack" },
                    { code: "WWM888", desc: "Prosperity pack" },
                    { code: "YYSLSTIB", desc: "Ongoing Code" },
                    { code: "WWMDEVTALK", desc: "Ongoing Code" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-stone-900 p-4 rounded-lg border border-stone-800">
                        <div>
                            <p className="font-mono font-bold text-lg text-white tracking-wider">{item.code}</p>
                            <p className="text-xs text-stone-500">{item.desc}</p>
                        </div>
                        <button 
                            onClick={() => navigator.clipboard.writeText(item.code)}
                            className="text-xs bg-stone-800 hover:bg-stone-700 text-stone-300 px-3 py-1.5 rounded transition-colors"
                        >
                            Copy
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-4 p-4 bg-yellow-900/10 border border-yellow-900/30 rounded text-xs text-yellow-500 flex items-start gap-2">
                <AlertCircle size={14} className="shrink-0 mt-0.5" />
                <p>To redeem: Go to Settings - Account - Redeem Code. Codes are case-sensitive.</p>
            </div>
        </div>
    </div>
  );

  const renderArena = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-wwm-green mb-6 flex items-center gap-2">
          <Youtube className="text-red-500" /> Basics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basics Video 1 */}
            <div className="space-y-2">
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-stone-800 bg-black">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4UFzw-Q39pQ?si=0K1L_W3bJWbGBzaY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <p className="text-sm text-stone-400 font-medium pl-1">Arena Basics 1</p>
            </div>
            {/* Basics Video 2 */}
            <div className="space-y-2">
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-stone-800 bg-black">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DhhUnD1wmX4?si=TNXGe4PADviz3kRk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <p className="text-sm text-stone-400 font-medium pl-1">Arena Basics 2</p>
            </div>
            {/* Basics Video 3 */}
            <div className="space-y-2">
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-stone-800 bg-black">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TCLlK21RVw0?si=kKi6FVrKvNG0WnOs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <p className="text-sm text-stone-400 font-medium pl-1">Arena Basics 3</p>
            </div>
        </div>
      </div>

      <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-wwm-green mb-6 flex items-center gap-2">
          <Youtube className="text-red-500" /> Advanced
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Advanced Video 1 */}
            <div className="space-y-2">
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-stone-800 bg-black">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DMR8UN4gEaY?si=y9eodxucXAPuTs_7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <p className="text-sm text-stone-400 font-medium pl-1">Advanced Strategy 1</p>
            </div>
             {/* Advanced Video 2 */}
            <div className="space-y-2">
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-stone-800 bg-black">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/d9WyWI6RRL4?si=gKyJoHwWmPzByyO9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <p className="text-sm text-stone-400 font-medium pl-1">Advanced Strategy 2</p>
            </div>
             {/* Advanced Video 3 */}
            <div className="space-y-2">
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-stone-800 bg-black">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Xh_xT8Aduu8?si=wUuWEE_-JnbO3iPG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <p className="text-sm text-stone-400 font-medium pl-1">Advanced Strategy 3</p>
            </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full overflow-y-auto p-4 md:p-8 pb-32 md:pb-24">
      <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
        
        {/* Header */}
        <header>
            <h1 className="text-3xl font-bold text-wwm-green mb-2 flex items-center gap-3">
                <BookOpen size={32} /> General Guide
            </h1>
            <p className="text-stone-400 max-w-2xl">
                Comprehensive resources for Where Winds Meet. From F2P strategies to advanced combat mechanics.
            </p>
        </header>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 md:flex flex-wrap gap-2 pb-4 border-b border-stone-800">
            <TabButton id="PART1" label="Part 1: F2P & Spending" icon={<ShoppingCart size={16} />} />
            <TabButton id="PART2" label="Part 2: Gameplay" icon={<Gamepad2 size={16} />} />
            <TabButton id="PART3" label="Part 3: Weapons" icon={<Sword size={16} />} />
            <TabButton id="PART4" label="Part 4: Trading" icon={<Coins size={16} />} />
            <TabButton id="PART5" label="Part 5: Roadmap" icon={<Calendar size={16} />} />
            <TabButton id="EXCHANGE" label="Exchange Codes" icon={<Gift size={16} />} />
            <TabButton id="ARENA" label="Arena Min/Max Videos" icon={<Youtube size={16} />} />
        </div>

        {/* Content Area */}
        <div className="min-h-[500px]">
            {activeTab === 'PART1' && renderPart1()}
            {activeTab === 'PART2' && renderPart2()}
            {activeTab === 'PART3' && renderPart3()}
            {activeTab === 'PART4' && renderPart4()}
            {activeTab === 'PART5' && renderPart5()}
            {activeTab === 'EXCHANGE' && renderExchange()}
            {activeTab === 'ARENA' && renderArena()}
        </div>

      </div>
    </div>
  );
};
