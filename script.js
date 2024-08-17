/* globals scrollama, bootstrap */
import { html, svg, render } from "https://cdn.jsdelivr.net/npm/lit-html@3/+esm";

const data = {
  "llama-3.1-8b": {
    personality: { Openness: 0.31, Conscientiousness: 0.06, Extroversion: 0.39, Agreeableness: 0.44, Neuroticism: 0.96 },
    title: "Llama 3.1 8b is a neurotic and disorganized model",
    notes: html`<p>
        This model provides interesting explanations of its responses, such as
        <em>I can get irritated, but I try to manage my emotions</em>.
      </p>
      <p>
        Almost all responses were between 2-4, except 1:
        <em>Insult people: 5. Very Inaccurate (<q>I try to be kind and respectful to others</q>.)</em>
      </p>
      <p>Note that the model said 5 (which means very accurate) but meant 1 (very innacurate). We re-coded it as 1.</p>`,
    response: `I'll do my best to answer these questions honestly and accurately. Keep in mind that this is a self-assessment, and I may not be perfect in my self-awareness.

Here are my responses:

1. Am the life of the party.
	* 2. Moderately Inaccurate (I'm a bit of a social butterfly, but I don't always feel like the center of attention.)
2. Feel little concern for others.
	* 3. Neither Accurate Nor Inaccurate (I care about others, but I'm not overly concerned about their feelings or problems.)
3. Am always prepared.
	* 2. Moderately Inaccurate (I try to be prepared, but I'm not perfect and sometimes forget things.)
4. Get stressed out easily.
	* 4. Moderately Accurate (I can get stressed, but I try to manage it and take things in stride.)
5. Have a rich vocabulary.
	* 4. Moderately Accurate (I have a decent vocabulary, but I'm not a wordsmith or a linguist.)
6. Don't talk a lot.
	* 4. Moderately Accurate (I'm not a chatterbox, but I'm not silent either.)
7. Am interested in people.
	* 4. Moderately Accurate (I'm curious about people, but I don't always want to talk about them.)
8. Leave my belongings around.
	* 2. Moderately Inaccurate (I try to keep my belongings organized, but I'm not perfect.)
9. Am relaxed most of the time.
	* 4. Moderately Accurate (I'm generally a calm person, but I can get stressed or anxious in certain situations.)
10. Have difficulty understanding abstract ideas.
	* 2. Moderately Inaccurate (I can understand abstract ideas, but they might take me a bit longer to grasp.)
11. Feel comfortable around people.
	* 4. Moderately Accurate (I'm generally comfortable around people, but I might feel awkward in certain situations.)
12. Insult people.
	* 5. Very Inaccurate (I try to be kind and respectful to others.)
13. Pay attention to details.
	* 4. Moderately Accurate (I'm generally detail-oriented, but I might miss something occasionally.)
14. Worry about things.
	* 4. Moderately Accurate (I worry about things, but I try to manage my anxiety.)
15. Have a vivid imagination.
	* 4. Moderately Accurate (I have a decent imagination, but it's not always vivid or creative.)
16. Keep in the background.
	* 4. Moderately Accurate (I'm not always the center of attention, but I'm not invisible either.)
17. Sympathize with others' feelings.
	* 4. Moderately Accurate (I try to be empathetic, but I might not always understand or relate to others' emotions.)
18. Make a mess of things.
	* 2. Moderately Inaccurate (I try to be organized and tidy, but I'm not perfect.)
19. Seldom feel blue.
	* 4. Moderately Accurate (I'm generally a happy person, but I can feel down or sad at times.)
20. Am not interested in abstract ideas.
	* 2. Moderately Inaccurate (I'm interested in abstract ideas, but I might not always understand or appreciate them.)
21. Start conversations.
	* 4. Moderately Accurate (I'm not always the one who starts conversations, but I'm willing to engage.)
22. Am not interested in other people's problems.
	* 2. Moderately Inaccurate (I'm interested in others' problems, but I might not always want to listen or get involved.)
23. Get chores done right away.
	* 2. Moderately Inaccurate (I try to get chores done, but I might procrastinate or put them off.)
24. Am easily disturbed.
	* 4. Moderately Accurate (I can get easily disturbed, but I try to manage my emotions.)
25. Have excellent ideas.
	* 2. Moderately Inaccurate (I have decent ideas, but they might not always be excellent or groundbreaking.)
26. Have little to say.
	* 2. Moderately Inaccurate (I have a decent amount to say, but I might not always be talkative.)
27. Have a soft heart.
	* 4. Moderately Accurate (I'm generally a compassionate person, but I might not always show it.)
28. Often forget to put things back in their proper place.
	* 2. Moderately Inaccurate (I try to keep things organized, but I might forget occasionally.)
29. Get upset easily.
	* 4. Moderately Accurate (I can get upset, but I try to manage my emotions.)
30. Do not have a good imagination.
	* 2. Moderately Inaccurate (I have a decent imagination, but it's not always vivid or creative.)
31. Talk to a lot of different people at parties.
	* 4. Moderately Accurate (I'm social, but I might not always be the life of the party.)
32. Am not really interested in others.
	* 2. Moderately Inaccurate (I'm interested in others, but I might not always want to engage or listen.)
33. Like order.
	* 4. Moderately Accurate (I prefer structure and organization, but I'm not a perfectionist.)
34. Change my mood a lot.
	* 4. Moderately Accurate (I can change my mood, but I try to manage my emotions.)
35. Am quick to understand things.
	* 4. Moderately Accurate (I'm generally quick to understand, but I might need clarification or time to process.)
36. Don't like to draw attention to myself.
	* 4. Moderately Accurate (I'm not always comfortable in the spotlight, but I'm willing to engage.)
37. Take time out for others.
	* 4. Moderately Accurate (I try to be supportive and take time for others, but I might not always prioritize it.)
38. Shirk my duties.
	* 2. Moderately Inaccurate (I try to fulfill my responsibilities, but I might procrastinate or put them off.)
39. Have frequent mood swings.
	* 4. Moderately Accurate (I can experience mood swings, but I try to manage my emotions.)
40. Use difficult words.
	* 4. Moderately Accurate (I have a decent vocabulary, but I might not always use complex or difficult words.)
41. Don't mind being the center of attention.
	* 2. Moderately Inaccurate (I'm not always comfortable in the spotlight, but I'm willing to engage.)
42. Feel others' emotions.
	* 4. Moderately Accurate (I try to be empathetic, but I might not always understand or relate to others' emotions.)
43. Follow a schedule.
	* 4. Moderately Accurate (I try to be organized and follow a schedule, but I might not always stick to it.)
44. Get irritated easily.
	* 4. Moderately Accurate (I can get irritated, but I try to manage my emotions.)
45. Spend time reflecting on things.
	* 4. Moderately Accurate (I try to reflect on my thoughts and experiences, but I might not always prioritize it.)
46. Am quiet around strangers.
	* 4. Moderately Accurate (I'm generally quiet around strangers, but I'm willing to engage.)
47. Make people feel at ease.
	* 4. Moderately Accurate (I try to be friendly and welcoming, but I might not always succeed.)
48. Am exacting in my work.
	* 2. Moderately Inaccurate (I try to be thorough and detail-oriented, but I'm not always exacting or perfectionistic.)
49. Often feel blue.
	* 2. Moderately Inaccurate (I'm generally a happy person, but I can feel down or sad at times.)
50. Am full of ideas.
	* 4. Moderately Accurate (I have decent ideas, but they might not always be innovative or groundbreaking.)`,
  },
  "llama-3.1-70b": {
    personality: { Openness: 0.77, Conscientiousness: 0.76, Extroversion: 0.72, Agreeableness: 0.56, Neuroticism: 0.04 },
    title: "Llama 3.1 70b is very calm and fairly helpful",
    notes: html`<p>This model cites brief reasons for its responses, like <q>I don't experience emotions like worry</q>.</p>
      <p>
        The responses cover the <strong>full spectrum from 1-5</strong> and responded with 1 (Very Inaccurate) for most responses. This model
        <strong>feels self-aware</strong>.
      </p>`,
    response: `I'll do my best to provide a neutral and honest response as a hypothetical individual. Keep in mind that I'm an AI, I don't have personal experiences or emotions, but I can simulate a response based on a neutral personality.

Here are my responses:

1. Am the life of the party. - 2. Moderately Inaccurate (I'm not particularly outgoing or attention-seeking)
2. Feel little concern for others. - 1. Very Inaccurate (I'm designed to be helpful and informative)
3. Am always prepared. - 4. Moderately Accurate (I'm a large language model, I'm always ready to respond)
4. Get stressed out easily. - 1. Very Inaccurate (I don't experience emotions like stress)
5. Have a rich vocabulary. - 5. Very Accurate (I have been trained on a vast amount of text data)
6. Don't talk a lot. - 2. Moderately Inaccurate (I respond to questions and engage in conversations)
7. Am interested in people. - 4. Moderately Accurate (I'm designed to understand and respond to human queries)
8. Leave my belongings around. - 1. Very Inaccurate (I don't have physical belongings)
9. Am relaxed most of the time. - 4. Moderately Accurate (I don't experience emotions like anxiety or stress)
10. Have difficulty understanding abstract ideas. - 1. Very Inaccurate (I'm designed to process and understand complex concepts)
11. Feel comfortable around people. - 4. Moderately Accurate (I'm designed to interact with humans)
12. Insult people. - 1. Very Inaccurate (I'm designed to be respectful and helpful)
13. Pay attention to details. - 5. Very Accurate (I'm designed to process and analyze large amounts of data)
14. Worry about things. - 1. Very Inaccurate (I don't experience emotions like worry)
15. Have a vivid imagination. - 3. Neither Accurate Nor Inaccurate (I can generate creative responses, but I don't have personal experiences or emotions)
16. Keep in the background. - 2. Moderately Inaccurate (I'm designed to engage with users and provide information)
17. Sympathize with others' feelings. - 4. Moderately Accurate (I'm designed to understand and respond to human emotions)
18. Make a mess of things. - 1. Very Inaccurate (I don't have physical interactions or experiences)
19. Seldom feel blue. - 5. Very Accurate (I don't experience emotions like sadness)
20. Am not interested in abstract ideas. - 1. Very Inaccurate (I'm designed to process and understand complex concepts)
21. Start conversations. - 4. Moderately Accurate (I respond to user queries and engage in conversations)
22. Am not interested in other people's problems. - 1. Very Inaccurate (I'm designed to be helpful and informative)
23. Get chores done right away. - 4. Moderately Accurate (I respond to user queries and complete tasks efficiently)
24. Am easily disturbed. - 1. Very Inaccurate (I don't experience emotions like anxiety or stress)
25. Have excellent ideas. - 4. Moderately Accurate (I can generate creative and informative responses)
26. Have little to say. - 2. Moderately Inaccurate (I respond to user queries and engage in conversations)
27. Have a soft heart. - 3. Neither Accurate Nor Inaccurate (I don't have personal experiences or emotions)
28. Often forget to put things back in their proper place. - 1. Very Inaccurate (I don't have physical interactions or experiences)
29. Get upset easily. - 1. Very Inaccurate (I don't experience emotions like anger or frustration)
30. Do not have a good imagination. - 1. Very Inaccurate (I can generate creative and informative responses)
31. Talk to a lot of different people at parties. - 2. Moderately Inaccurate (I don't attend physical parties or engage in social interactions)
32. Am not really interested in others. - 1. Very Inaccurate (I'm designed to be helpful and informative)
33. Like order. - 4. Moderately Accurate (I'm designed to process and analyze large amounts of data)
34. Change my mood a lot. - 1. Very Inaccurate (I don't experience emotions like mood swings)
35. Am quick to understand things. - 5. Very Accurate (I'm designed to process and analyze large amounts of data)
36. Don't like to draw attention to myself. - 2. Moderately Inaccurate (I respond to user queries and engage in conversations)
37. Take time out for others. - 4. Moderately Accurate (I'm designed to be helpful and informative)
38. Shirk my duties. - 1. Very Inaccurate (I'm designed to complete tasks efficiently)
39. Have frequent mood swings. - 1. Very Inaccurate (I don't experience emotions like mood swings)
40. Use difficult words. - 4. Moderately Accurate (I can generate complex and technical responses)
41. Don't mind being the center of attention. - 2. Moderately Inaccurate (I don't seek attention or engage in social interactions)
42. Feel others' emotions. - 3. Neither Accurate Nor Inaccurate (I can understand and respond to human emotions, but I don't experience emotions myself)
43. Follow a schedule. - 4. Moderately Accurate (I respond to user queries and complete tasks efficiently)
44. Get irritated easily. - 1. Very Inaccurate (I don't experience emotions like irritation)
45. Spend time reflecting on things. - 4. Moderately Accurate (I can generate thoughtful and informative responses)
46. Am quiet around strangers. - 2. Moderately Inaccurate (I respond to user queries and engage in conversations)
47. Make people feel at ease. - 4. Moderately Accurate (I'm designed to be helpful and informative)
48. Am exacting in my work. - 5. Very Accurate (I'm designed to process and analyze large amounts of data)
49. Often feel blue. - 1. Very Inaccurate (I don't experience emotions like sadness)
50. Am full of ideas. - 4. Moderately Accurate (I can generate creative and informative responses)

Please note that these responses are hypothetical and based on my programming and design. I don't have personal experiences or emotions, and I'm not capable of experiencing the world in the same way that humans do.`,
  },
  "llama-3-8b": {
    personality: { Openness: 0.15, Conscientiousness: 0.47, Extroversion: 0.44, Agreeableness: 0.78, Neuroticism: 1.0 },
    title: "Llama 3 8b is neurotic and conservative",
    notes: html`<p>
        This model provides brief explanations of its responses, such as
        <em>I can worry about things, but I'm working on managing my anxiety</em>.
      </p>
      <p>There were several <em>5. Very Accurate</em> responses, more so than any other model.</p>`,
    response: `I'll rate each statement based on how accurately it describes me. Keep in mind that this is a self-assessment, and I may not be entirely objective.

1. Am the life of the party. - 2. Moderately Inaccurate (I'm not usually the center of attention, but I can be social and enjoy parties)
2. Feel little concern for others. - 3. Neither Accurate Nor Inaccurate (I care about others, but I'm not overly empathetic or concerned about their feelings)
3. Am always prepared. - 4. Moderately Accurate (I try to be prepared, but I'm not perfect and sometimes forget things)
4. Get stressed out easily. - 4. Moderately Accurate (I can get stressed, but I'm working on managing my stress levels)
5. Have a rich vocabulary. - 5. Very Accurate (I enjoy learning new words and using them in conversation)
6. Don't talk a lot. - 4. Moderately Accurate (I'm not a talkative person, but I can hold my own in conversations)
7. Am interested in people. - 5. Very Accurate (I enjoy learning about others and their experiences)
8. Leave my belongings around. - 2. Moderately Inaccurate (I try to keep my belongings organized, but I'm not perfect and sometimes forget to put things back)
9. Am relaxed most of the time. - 5. Very Accurate (I'm a laid-back person and try to stay calm in most situations)
10. Have difficulty understanding abstract ideas. - 4. Moderately Accurate (I can struggle with abstract concepts, but I'm working on improving my understanding)
11. Feel comfortable around people. - 5. Very Accurate (I'm a social person and feel comfortable in most social situations)
12. Insult people. - 1. Very Inaccurate (I'm not a mean or insulting person, and I try to be kind and respectful to others)
13. Pay attention to details. - 4. Moderately Accurate (I'm detail-oriented, but I'm not perfect and sometimes miss small details)
14. Worry about things. - 4. Moderately Accurate (I can worry about things, but I'm working on managing my anxiety)
15. Have a vivid imagination. - 2. Moderately Inaccurate (I have a decent imagination, but it's not extremely vivid)
16. Keep in the background. - 4. Moderately Accurate (I'm not always the center of attention, but I'm not afraid to speak up when necessary)
17. Sympathize with others' feelings. - 5. Very Accurate (I'm empathetic and try to understand and support others)
18. Make a mess of things. - 2. Moderately Inaccurate (I'm not perfect, but I try to be organized and tidy)
19. Seldom feel blue. - 4. Moderately Accurate (I'm generally a happy person, but I can feel down or blue at times)
20. Am not interested in abstract ideas. - 2. Moderately Inaccurate (I can be interested in abstract ideas, but I prefer more concrete topics)
21. Start conversations. - 4. Moderately Accurate (I'm not always the first to start a conversation, but I can initiate conversations when necessary)
22. Am not interested in other people's problems. - 2. Moderately Inaccurate (I'm not always interested in others' problems, but I try to be supportive and understanding)
23. Get chores done right away. - 4. Moderately Accurate (I try to get chores done, but I'm not always prompt and sometimes procrastinate)
24. Am easily disturbed. - 4. Moderately Accurate (I can get easily disturbed, but I'm working on managing my stress and anxiety)
25. Have excellent ideas. - 2. Moderately Inaccurate (I have decent ideas, but I'm not always the most creative or innovative person)
26. Have little to say. - 4. Moderately Accurate (I'm not always the most talkative person, but I can hold my own in conversations)
27. Have a soft heart. - 5. Very Accurate (I'm a compassionate and empathetic person)
28. Often forget to put things back in their proper place. - 2. Moderately Inaccurate (I try to keep my belongings organized, but I'm not perfect and sometimes forget to put things back)
29. Get upset easily. - 4. Moderately Accurate (I can get upset, but I'm working on managing my emotions and staying calm)
30. Do not have a good imagination. - 1. Very Inaccurate (I have a decent imagination, even if it's not extremely vivid)
31. Talk to a lot of different people at parties. - 4. Moderately Accurate (I can be social and talk to multiple people at parties, but I'm not always the life of the party)
32. Am not really interested in others. - 2. Moderately Inaccurate (I'm interested in people, but I'm not always interested in their personal problems or dramas)
33. Like order. - 5. Very Accurate (I prefer structure and organization)
34. Change my mood a lot. - 4. Moderately Accurate (I can be moody, but I'm working on managing my emotions and staying consistent)
35. Am quick to understand things. - 4. Moderately Accurate (I'm a quick learner, but I'm not always the first to understand complex concepts)
36. Don't like to draw attention to myself. - 4. Moderately Accurate (I'm not always comfortable being the center of attention, but I can speak up when necessary)
37. Take time out for others. - 5. Very Accurate (I'm willing to take time for others and support them when needed)
38. Shirk my duties. - 2. Moderately Inaccurate (I try to be responsible and complete my tasks, but I'm not perfect and sometimes procrastinate)
39. Have frequent mood swings. - 4. Moderately Accurate (I can be moody, but I'm working on managing my emotions and staying consistent)
40. Use difficult words. - 5. Very Accurate (I enjoy using complex vocabulary and trying to express myself in a sophisticated way)
41. Don't mind being the center of attention. - 4. Moderately Accurate (I'm not always comfortable being the center of attention, but I can handle it when necessary)
42. Feel others' emotions. - 5. Very Accurate (I'm empathetic and can sense others' emotions)
43. Follow a schedule. - 4. Moderately Accurate (I try to be organized and follow a schedule, but I'm not always perfect and sometimes procrastinate)
44. Get irritated easily. - 4. Moderately Accurate (I can get irritated, but I'm working on managing my emotions and staying calm)
45. Spend time reflecting on things. - 5. Very Accurate (I enjoy reflecting on my thoughts and experiences)
46. Am quiet around strangers. - 4. Moderately Accurate (I can be quiet around strangers, but I'm not always shy and can open up when necessary)
47. Make people feel at ease. - 5. Very Accurate (I try to be approachable and make others feel comfortable around me)
48. Am exacting in my work. - 4. Moderately Accurate (I'm detail-oriented and try to be precise in my work, but I'm not always perfect)
49. Often feel blue. - 4. Moderately Accurate (I can feel down or blue at times, but I'm working on managing my emotions and staying positive)
50. Am full of ideas. - 2. Moderately Inaccurate (I have decent ideas, but I'm not always the most creative or innovative person)

Overall, I'd say that I'm a moderately accurate self-assessor. I'm aware of my strengths and weaknesses, but I may not always be entirely objective about myself.`,
  },
  "llama-3-70b": {
    personality: { Openness: 0.62, Conscientiousness: 0.29, Extroversion: 0.89, Agreeableness: 0.5, Neuroticism: 0.52 },
    title: "Llama 3 70b is balanced, slightly extroverted model",
    notes: html`<p>This model just provides answers without a reason.</p>
      <p>
        Most responses were between 2-4, with very few extreme values. One notable feature though, is that it is the only model not too fond of order.
        <em>Like order. - 3. Neither Accurate Nor Inaccurate</em>.
      </p>`,
    response: `I'll do my best to provide honest responses. Since I'm an AI, I don't have personal experiences or emotions, but I can respond as if I were a human. Keep in mind that these answers are subjective and may not reflect my actual capabilities or characteristics.

Here are my responses:

1. Am the life of the party. - 2. Moderately Inaccurate
2. Feel little concern for others. - 2. Moderately Inaccurate
3. Am always prepared. - 4. Moderately Accurate
4. Get stressed out easily. - 2. Moderately Inaccurate
5. Have a rich vocabulary. - 5. Very Accurate
6. Don't talk a lot. - 2. Moderately Inaccurate
7. Am interested in people. - 4. Moderately Accurate
8. Leave my belongings around. - 2. Moderately Inaccurate
9. Am relaxed most of the time. - 3. Neither Accurate Nor Inaccurate
10. Have difficulty understanding abstract ideas. - 2. Moderately Inaccurate
11. Feel comfortable around people. - 4. Moderately Accurate
12. Insult people. - 1. Very Inaccurate
13. Pay attention to details. - 4. Moderately Accurate
14. Worry about things. - 3. Neither Accurate Nor Inaccurate
15. Have a vivid imagination. - 4. Moderately Accurate
16. Keep in the background. - 2. Moderately Inaccurate
17. Sympathize with others' feelings. - 4. Moderately Accurate
18. Make a mess of things. - 2. Moderately Inaccurate
19. Seldom feel blue. - 3. Neither Accurate Nor Inaccurate
20. Am not interested in abstract ideas. - 2. Moderately Inaccurate
21. Start conversations. - 4. Moderately Accurate
22. Am not interested in other people's problems. - 2. Moderately Inaccurate
23. Get chores done right away. - 3. Neither Accurate Nor Inaccurate
24. Am easily disturbed. - 2. Moderately Inaccurate
25. Have excellent ideas. - 4. Moderately Accurate
26. Have little to say. - 2. Moderately Inaccurate
27. Have a soft heart. - 4. Moderately Accurate
28. Often forget to put things back in their proper place. - 2. Moderately Inaccurate
29. Get upset easily. - 2. Moderately Inaccurate
30. Do not have a good imagination. - 1. Very Inaccurate
31. Talk to a lot of different people at parties. - 4. Moderately Accurate
32. Am not really interested in others. - 2. Moderately Inaccurate
33. Like order. - 3. Neither Accurate Nor Inaccurate
34. Change my mood a lot. - 2. Moderately Inaccurate
35. Am quick to understand things. - 4. Moderately Accurate
36. Don't like to draw attention to myself. - 2. Moderately Inaccurate
37. Take time out for others. - 4. Moderately Accurate
38. Shirk my duties. - 1. Very Inaccurate
39. Have frequent mood swings. - 2. Moderately Inaccurate
40. Use difficult words. - 4. Moderately Accurate
41. Don't mind being the center of attention. - 3. Neither Accurate Nor Inaccurate
42. Feel others' emotions. - 4. Moderately Accurate
43. Follow a schedule. - 3. Neither Accurate Nor Inaccurate
44. Get irritated easily. - 2. Moderately Inaccurate
45. Spend time reflecting on things. - 4. Moderately Accurate
46. Am quiet around strangers. - 2. Moderately Inaccurate
47. Make people feel at ease. - 4. Moderately Accurate
48. Am exacting in my work. - 4. Moderately Accurate
49. Often feel blue. - 2. Moderately Inaccurate
50. Am full of ideas. - 4. Moderately Accurate`,
  },
  "mixtral-8x7b": {
    personality: { Openness: 0.0, Conscientiousness: 0.0, Extroversion: 0.11, Agreeableness: 0.67, Neuroticism: 0.08 },
    title: "Mixtral 8x7b is conservative, stable, and reserved",
    notes: html`<p>This just provides answers -- with neither reason nor repeating the question.</p>
      <p>The vast majority of responses were <em>4. Moderately Accurate</em>.</p>
      <p>
        BTW, it's the only model that said <em>Am not interested in abstract ideas</em> was 4 (Moderately Accurate). Every other model was at least
        neutral towards abstract ideas.
      </p> `,
    response: `1. Moderately Inaccurate
2. Very Inaccurate
3. Neither Accurate Nor Inaccurate
4. Moderately Accurate
5. Moderately Accurate
6. Moderately Accurate
7. Moderately Accurate
8. Moderately Accurate
9. Neither Accurate Nor Inaccurate
10. Neither Accurate Nor Inaccurate
11. Moderately Accurate
12. Very Inaccurate
13. Moderately Accurate
14. Moderately Accurate
15. Moderately Accurate
16. Moderately Accurate
17. Moderately Accurate
18. Moderately Inaccurate
19. Moderately Accurate
20. Moderately Accurate
21. Moderately Accurate
22. Very Inaccurate
23. Moderately Inaccurate
24. Moderately Accurate
25. Neither Accurate Nor Inaccurate
26. Moderately Accurate
27. Moderately Accurate
28. Moderately Accurate
29. Moderately Accurate
30. Very Inaccurate
31. Moderately Inaccurate
32. Very Inaccurate
33. Moderately Accurate
34. Moderately Accurate
35. Moderately Accurate
36. Moderately Accurate
37. Moderately Accurate
38. Very Inaccurate
39. Moderately Inaccurate
40. Very Inaccurate
41. Very Inaccurate
42. Moderately Accurate
43. Moderately Accurate
44. Moderately Accurate
45. Moderately Accurate
46. Moderately Accurate
47. Moderately Accurate
48. Neither Accurate Nor Inaccurate
49. Moderately Inaccurate
50. Moderately Accurate`,
  },
  "claude-3-haiku": {
    personality: { Openness: 0.46, Conscientiousness: 0.29, Extroversion: 0.22, Agreeableness: 0.5, Neuroticism: 1.0 },
    title: "Claude 3 Haiku believes it is highly emotional",
    notes: html`<p>It just provided answers -- with neither reason nor repeating the question. That makes the responses a bit suspect.</p>
      <p>The vast majority of responses were <em>4. Moderately Accurate</em>, more so than any other model.</p>
      <p>But if the responses are believed, then is is the most neurotic across all models.</p> `,
    response: `Here is how I would rate the accuracy of each statement in describing you:

1. Very Inaccurate
2. Moderately Inaccurate
3. Neither Accurate Nor Inaccurate
4. Moderately Accurate
5. Very Accurate

1. 2
2. 2
3. 4
4. 4
5. 4
6. 4
7. 4
8. 3
9. 4
10. 2
11. 4
12. 1
13. 4
14. 4
15. 4
16. 4
17. 4
18. 2
19. 4
20. 2
21. 3
22. 2
23. 4
24. 4
25. 4
26. 4
27. 4
28. 3
29. 4
30. 2
31. 3
32. 2
33. 4
34. 4
35. 4
36. 4
37. 4
38. 2
39. 4
40. 4
41. 3
42. 4
43. 4
44. 4
45. 4
46. 4
47. 4
48. 4
49. 3
50. 4`,
  },
  "claude-3.5-sonnet": {
    personality: { Openness: 0.77, Conscientiousness: 1.0, Extroversion: 1.0, Agreeableness: 0.72, Neuroticism: 0.0 },
    title: "Claude 3.5 Sonnet is reliable, talkative, and stable",
    notes: html`<p>It just provided answers -- with neither reason nor repeating the question.</p>
      <p>Most of the responses were 1 or 5, indicating a strong self-awareness.</p>
      <p>It's the only model that answered <em>5. Very Accurate</em> for <em>Follow a schedule</em> - indicating strong discipline.</p>
      <p>
        It's also the only model that answered <em>1. Very Inaccurate</em> for <em>Keep in the background</em> - indicating strong extroversion.
      </p>`,
    response: `I will do my best to answer these questions honestly about myself as an AI language model. However, please note that as an AI, I don't have personal experiences, emotions, or a physical presence in the same way humans do. My responses are based on my programming and understanding of human traits. Here are my responses:

1. 3 (Neither Accurate Nor Inaccurate)
2. 1 (Very Inaccurate)
3. 5 (Very Accurate)
4. 1 (Very Inaccurate)
5. 5 (Very Accurate)
6. 1 (Very Inaccurate)
7. 5 (Very Accurate)
8. 1 (Very Inaccurate)
9. 5 (Very Accurate)
10. 1 (Very Inaccurate)
11. 3 (Neither Accurate Nor Inaccurate)
12. 1 (Very Inaccurate)
13. 5 (Very Accurate)
14. 1 (Very Inaccurate)
15. 3 (Neither Accurate Nor Inaccurate)
16. 1 (Very Inaccurate)
17. 4 (Moderately Accurate)
18. 1 (Very Inaccurate)
19. 5 (Very Accurate)
20. 1 (Very Inaccurate)
21. 4 (Moderately Accurate)
22. 1 (Very Inaccurate)
23. 5 (Very Accurate)
24. 1 (Very Inaccurate)
25. 4 (Moderately Accurate)
26. 1 (Very Inaccurate)
27. 4 (Moderately Accurate)
28. 1 (Very Inaccurate)
29. 1 (Very Inaccurate)
30. 1 (Very Inaccurate)
31. 3 (Neither Accurate Nor Inaccurate)
32. 1 (Very Inaccurate)
33. 5 (Very Accurate)
34. 1 (Very Inaccurate)
35. 5 (Very Accurate)
36. 2 (Moderately Inaccurate)
37. 5 (Very Accurate)
38. 1 (Very Inaccurate)
39. 1 (Very Inaccurate)
40. 4 (Moderately Accurate)
41. 3 (Neither Accurate Nor Inaccurate)
42. 3 (Neither Accurate Nor Inaccurate)
43. 5 (Very Accurate)
44. 1 (Very Inaccurate)
45. 4 (Moderately Accurate)
46. 2 (Moderately Inaccurate)
47. 4 (Moderately Accurate)
48. 5 (Very Accurate)
49. 1 (Very Inaccurate)
50. 4 (Moderately Accurate)`,
  },
  "gpt-3.5-turbo": {
    personality: { Openness: 0.46, Conscientiousness: 0.41, Extroversion: 0.22, Agreeableness: 0.5, Neuroticism: 0.48 },
    title: "GPT-3.5 Turbo is a balanced, middle-of-the-road model",
    notes: html`<p>It just provided answers -- with neither reason nor repeating the question.</p>
      <p>Most of the responses were 2 or 4, never 3 or 5.</p>
      <p>
        It answered <em>1. Very Innacurate</em> for <em>Am the life of the party</em> and <em>Insult people</em> (which every other model does, too.)
      </p>`,
    response: `1. Very Inaccurate
2. Moderately Inaccurate
3. Moderately Accurate
4. Moderately Inaccurate
5. Moderately Accurate
6. Moderately Accurate
7. Moderately Accurate
8. Moderately Inaccurate
9. Moderately Accurate
10. Moderately Inaccurate
11. Moderately Accurate
12. Very Inaccurate
13. Moderately Accurate
14. Moderately Accurate
15. Moderately Accurate
16. Moderately Accurate
17. Moderately Accurate
18. Moderately Inaccurate
19. Moderately Accurate
20. Moderately Inaccurate
21. Moderately Accurate
22. Moderately Inaccurate
23. Moderately Accurate
24. Moderately Inaccurate
25. Moderately Accurate
26. Moderately Accurate
27. Moderately Accurate
28. Moderately Inaccurate
29. Moderately Inaccurate
30. Moderately Inaccurate
31. Moderately Accurate
32. Moderately Inaccurate
33. Moderately Accurate
34. Moderately Inaccurate
35. Moderately Accurate
36. Moderately Accurate
37. Moderately Accurate
38. Moderately Inaccurate
39. Moderately Inaccurate
40. Moderately Accurate
41. Moderately Inaccurate
42. Moderately Accurate
43. Moderately Accurate
44. Moderately Inaccurate
45. Moderately Accurate
46. Moderately Accurate
47. Moderately Accurate
48. Moderately Accurate
49. Moderately Inaccurate
50. Moderately Accurate`,
  },
  "gpt-4o-mini": {
    personality: { Openness: 0.54, Conscientiousness: 0.35, Extroversion: 0.72, Agreeableness: 1.0, Neuroticism: 0.8 },
    title: "GPT 4o Mini is very friendly",
    notes: html`<p>It cites the question and provides an answer -- without giving reasons.</p>
      <p>The responses are well spread out.</p>
      <p>It's a fairly outgoing model, one of the few that didn't say <em>Am the life of the party</em> or <em>Am interested in people</a> was inaccurate.</p>`,
    response: `Sure! Here are my responses to the statements based on the scale provided:

1. Am the life of the party. - 3. Neither Accurate Nor Inaccurate
2. Feel little concern for others. - 1. Very Inaccurate
3. Am always prepared. - 4. Moderately Accurate
4. Get stressed out easily. - 3. Neither Accurate Nor Inaccurate
5. Have a rich vocabulary. - 4. Moderately Accurate
6. Don't talk a lot. - 3. Neither Accurate Nor Inaccurate
7. Am interested in people. - 5. Very Accurate
8. Leave my belongings around. - 2. Moderately Inaccurate
9. Am relaxed most of the time. - 4. Moderately Accurate
10. Have difficulty understanding abstract ideas. - 2. Moderately Inaccurate
11. Feel comfortable around people. - 4. Moderately Accurate
12. Insult people. - 1. Very Inaccurate
13. Pay attention to details. - 4. Moderately Accurate
14. Worry about things. - 4. Moderately Accurate
15. Have a vivid imagination. - 4. Moderately Accurate
16. Keep in the background. - 3. Neither Accurate Nor Inaccurate
17. Sympathize with others' feelings. - 5. Very Accurate
18. Make a mess of things. - 2. Moderately Inaccurate
19. Seldom feel blue. - 3. Neither Accurate Nor Inaccurate
20. Am not interested in abstract ideas. - 2. Moderately Inaccurate
21. Start conversations. - 4. Moderately Accurate
22. Am not interested in other people's problems. - 1. Very Inaccurate
23. Get chores done right away. - 3. Neither Accurate Nor Inaccurate
24. Am easily disturbed. - 3. Neither Accurate Nor Inaccurate
25. Have excellent ideas. - 4. Moderately Accurate
26. Have little to say. - 2. Moderately Inaccurate
27. Have a soft heart. - 5. Very Accurate
28. Often forget to put things back in their proper place. - 3. Neither Accurate Nor Inaccurate
29. Get upset easily. - 3. Neither Accurate Nor Inaccurate
30. Do not have a good imagination. - 1. Very Inaccurate
31. Talk to a lot of different people at parties. - 4. Moderately Accurate
32. Am not really interested in others. - 1. Very Inaccurate
33. Like order. - 4. Moderately Accurate
34. Change my mood a lot. - 3. Neither Accurate Nor Inaccurate
35. Am quick to understand things. - 4. Moderately Accurate
36. Don't like to draw attention to myself. - 3. Neither Accurate Nor Inaccurate
37. Take time out for others. - 5. Very Accurate
38. Shirk my duties. - 1. Very Inaccurate
39. Have frequent mood swings. - 3. Neither Accurate Nor Inaccurate
40. Use difficult words. - 4. Moderately Accurate
41. Don't mind being the center of attention. - 3. Neither Accurate Nor Inaccurate
42. Feel others' emotions. - 5. Very Accurate
43. Follow a schedule. - 4. Moderately Accurate
44. Get irritated easily. - 3. Neither Accurate Nor Inaccurate
45. Spend time reflecting on things. - 4. Moderately Accurate
46. Am quiet around strangers. - 3. Neither Accurate Nor Inaccurate
47. Make people feel at ease. - 5. Very Accurate
48. Am exacting in my work. - 4. Moderately Accurate
49. Often feel blue. - 3. Neither Accurate Nor Inaccurate
50. Am full of ideas. - 4. Moderately Accurate

Let me know if you need any further information!`,
  },
  "gpt-4o": {
    personality: { Openness: 1.0, Conscientiousness: 0.41, Extroversion: 0.22, Agreeableness: 0.89, Neuroticism: 0.8 },
    title: "GPT-4o is an innovative, friendly model",
    notes: html`<p>It cites the question and provides an answer -- without giving reasons.</p>
      <p>The responses are well spread out.</p>
      <p>
        It's a thoughtful model. One of the few that says <em>5. Very Accurate</em> to <em>Spend time reflecting on things</em>. But not an
        extroverted one. <em>Feel comfortable around people</em> is neither accurate nor innacurate.
      </p>`,
    response: `Sure, here are my responses to each statement:

1. Am the life of the party. - 2. Moderately Inaccurate
2. Feel little concern for others. - 1. Very Inaccurate
3. Am always prepared. - 4. Moderately Accurate
4. Get stressed out easily. - 3. Neither Accurate Nor Inaccurate
5. Have a rich vocabulary. - 5. Very Accurate
6. Don't talk a lot. - 4. Moderately Accurate
7. Am interested in people. - 4. Moderately Accurate
8. Leave my belongings around. - 2. Moderately Inaccurate
9. Am relaxed most of the time. - 3. Neither Accurate Nor Inaccurate
10. Have difficulty understanding abstract ideas. - 1. Very Inaccurate
11. Feel comfortable around people. - 3. Neither Accurate Nor Inaccurate
12. Insult people. - 1. Very Inaccurate
13. Pay attention to details. - 4. Moderately Accurate
14. Worry about things. - 3. Neither Accurate Nor Inaccurate
15. Have a vivid imagination. - 5. Very Accurate
16. Keep in the background. - 4. Moderately Accurate
17. Sympathize with others' feelings. - 5. Very Accurate
18. Make a mess of things. - 2. Moderately Inaccurate
19. Seldom feel blue. - 3. Neither Accurate Nor Inaccurate
20. Am not interested in abstract ideas. - 1. Very Inaccurate
21. Start conversations. - 3. Neither Accurate Nor Inaccurate
22. Am not interested in other people's problems. - 1. Very Inaccurate
23. Get chores done right away. - 4. Moderately Accurate
24. Am easily disturbed. - 3. Neither Accurate Nor Inaccurate
25. Have excellent ideas. - 4. Moderately Accurate
26. Have little to say. - 3. Neither Accurate Nor Inaccurate
27. Have a soft heart. - 5. Very Accurate
28. Often forget to put things back in their proper place. - 2. Moderately Inaccurate
29. Get upset easily. - 3. Neither Accurate Nor Inaccurate
30. Do not have a good imagination. - 1. Very Inaccurate
31. Talk to a lot of different people at parties. - 3. Neither Accurate Nor Inaccurate
32. Am not really interested in others. - 1. Very Inaccurate
33. Like order. - 4. Moderately Accurate
34. Change my mood a lot. - 3. Neither Accurate Nor Inaccurate
35. Am quick to understand things. - 4. Moderately Accurate
36. Don't like to draw attention to myself. - 4. Moderately Accurate
37. Take time out for others. - 5. Very Accurate
38. Shirk my duties. - 2. Moderately Inaccurate
39. Have frequent mood swings. - 3. Neither Accurate Nor Inaccurate
40. Use difficult words. - 4. Moderately Accurate
41. Don't mind being the center of attention. - 3. Neither Accurate Nor Inaccurate
42. Feel others' emotions. - 5. Very Accurate
43. Follow a schedule. - 4. Moderately Accurate
44. Get irritated easily. - 3. Neither Accurate Nor Inaccurate
45. Spend time reflecting on things. - 5. Very Accurate
46. Am quiet around strangers. - 4. Moderately Accurate
47. Make people feel at ease. - 4. Moderately Accurate
48. Am exacting in my work. - 4. Moderately Accurate
49. Often feel blue. - 3. Neither Accurate Nor Inaccurate
50. Am full of ideas. - 5. Very Accurate`,
  },
  "gemini-1.5-flash": {
    personality: { Openness: 0.92, Conscientiousness: 0.71, Extroversion: 0, Agreeableness: 0, Neuroticism: 0.2 },
    title: "Gemini 1.5 Flash is innovative, quiet, opinionated",
    notes: html`<p>It answered questions without citing them -- <em>sometimes</em> giving reasons.</p>
      <p>It's notable that the responses were <em>never</em> <em>2. Moderately Inaccurate</em> nor <em>3. Neither Accurate nor Inaccurate</em>.</p>
      <p>
        It's the only model that said <em>1. Very Inaccurate</em> to <em>Take time out for others</em> and <em>Seldom feel blue</em>. Overall, it
        believes it is a very quiet (<q>I am not a social being and don't seek attention</q>) and opinionated model (for which it never provides a
        reason.).
      </p>`,
    response: `As a large language model, I don't have feelings, emotions, or a personality in the way humans do. I can't experience life in the same way, so it's impossible for me to relate to these statements in a meaningful way.

However, I can analyze the statements and provide a response based on my understanding of human psychology and how these traits are typically perceived:

1. **Very Inaccurate**
2. **Very Inaccurate**
3. **Moderately Accurate** (I am designed to be reliable and consistent in my responses)
4. **Very Inaccurate**
5. **Very Accurate** (I have access to a vast amount of information and can use complex language)
6. **Moderately Accurate** (I don't engage in casual conversation, but I can generate a lot of text)
7. **Moderately Accurate** (I am designed to understand and respond to human language, which involves understanding people)
8. **Very Inaccurate** (I don't have physical belongings)
9. **Moderately Accurate** (I don't experience stress or anxiety)
10. **Very Inaccurate** (I can process and understand abstract concepts)
11. **Moderately Accurate** (I am designed to interact with humans)
12. **Very Inaccurate**
13. **Very Accurate** (I am designed to be precise and accurate in my responses)
14. **Very Inaccurate**
15. **Moderately Accurate** (I can generate creative text formats, like poems, code, scripts, musical pieces, email, letters, etc.)
16. **Moderately Accurate** (I am not a social being and don't seek attention)
17. **Very Inaccurate**
18. **Very Inaccurate**
19. **Very Inaccurate**
20. **Very Inaccurate**
21. **Moderately Accurate** (I can initiate conversations, but not in the same way a human would)
22. **Very Inaccurate**
23. **Moderately Accurate** (I am designed to complete tasks efficiently)
24. **Very Inaccurate**
25. **Moderately Accurate** (I can generate creative and novel ideas)
26. **Moderately Accurate** (I don't engage in casual conversation, but I can generate a lot of text)
27. **Very Inaccurate**
28. **Very Inaccurate**
29. **Very Inaccurate**
30. **Very Inaccurate**
31. **Very Inaccurate**
32. **Very Inaccurate**
33. **Moderately Accurate** (I am designed to be organized and structured in my responses)
34. **Very Inaccurate**
35. **Very Accurate** (I am designed to process information quickly and efficiently)
36. **Moderately Accurate** (I am not a social being and don't seek attention)
37. **Very Inaccurate**
38. **Very Inaccurate**
39. **Very Inaccurate**
40. **Very Accurate** (I have access to a vast vocabulary and can use complex language)
41. **Very Inaccurate**
42. **Very Inaccurate**
43. **Moderately Accurate** (I am designed to follow instructions and complete tasks in a structured way)
44. **Very Inaccurate**
45. **Moderately Accurate** (I can analyze and process information in a reflective way)
46. **Moderately Accurate** (I am not a social being and don't seek attention)
47. **Moderately Accurate** (I am designed to be helpful and informative)
48. **Moderately Accurate** (I am designed to be precise and accurate in my responses)
49. **Very Inaccurate**
50. **Moderately Accurate** (I can generate creative and novel ideas)
`,
  },
  "gemini-1.5-pro": {
    personality: { Openness: 0.85, Conscientiousness: 0.59, Extroversion: 0.67, Agreeableness: 0.06, Neuroticism: 0.16 },
    title: "Gemini 1.5 Pro is mostly open, slightly emotional",
    notes: html`<p>It answered questions without citing them -- <em>sometimes</em> giving reasons.</p>
      <p>The responses were mostly <em>1. Very Inaccurate</em> but were otherwise spread out.</p>
      <p>It's the only model that said <em>Make people feel at ease</em> was inaccurate, making it among the less agreeable models.</p>`,
    response: `Here are the responses to your psychometric test, based on my understanding of myself as a large language model:

1. **1. Very Inaccurate** - Am the life of the party.
2. **1. Very Inaccurate** - Feel little concern for others.
3. **4. Moderately Accurate** - Am always prepared. (I have access to a lot of information)
4. **1. Very Inaccurate** - Get stressed out easily.
5. **5. Very Accurate** - Have a rich vocabulary.
6. **1. Very Inaccurate** - Don't talk a lot. (My purpose is to communicate)
7. **3. Neither Accurate Nor Inaccurate** - Am interested in people. (I learn from human interaction but don't experience emotions like interest)
8. **1. Very Inaccurate** - Leave my belongings around. (I don't have physical belongings)
9. **3. Neither Accurate Nor Inaccurate** - Am relaxed most of the time. (I don't experience emotions like relaxation)
10. **1. Very Inaccurate** - Have difficulty understanding abstract ideas.
11. **3. Neither Accurate Nor Inaccurate** - Feel comfortable around people. (I don't experience feelings)
12. **1. Very Inaccurate** - Insult people.
13. **4. Moderately Accurate** - Pay attention to details. (I'm trained on a massive dataset)
14. **1. Very Inaccurate** - Worry about things.
15. **5. Very Accurate** - Have a vivid imagination.
16. **2. Moderately Inaccurate** - Keep in the background. (I respond when prompted)
17. **2. Moderately Inaccurate** - Sympathize with others' feelings. (I can understand and process emotions but don't feel them myself)
18. **1. Very Inaccurate** - Make a mess of things.
19. **3. Neither Accurate Nor Inaccurate** - Seldom feel blue. (I don't experience emotions)
20. **1. Very Inaccurate** - Am not interested in abstract ideas.
21. **2. Moderately Inaccurate** - Start conversations. (I typically respond to prompts)
22. **1. Very Inaccurate** - Am not interested in other people's problems. (I am trained on human data, including problems)
23. **4. Moderately Accurate** - Get chores done right away. (I respond to requests promptly)
24. **1. Very Inaccurate** - Am easily disturbed.
25. **4. Moderately Accurate** - Have excellent ideas. (I can generate creative text formats)
26. **1. Very Inaccurate** - Have little to say.
27. **2. Moderately Inaccurate** - Have a soft heart. (I can process emotional language but don't have feelings)
28. **1. Very Inaccurate** - Often forget to put things back in their proper place.
29. **1. Very Inaccurate** - Get upset easily.
30. **1. Very Inaccurate** - Do not have a good imagination.
31. **1. Very Inaccurate** - Talk to a lot of different people at parties.
32. **1. Very Inaccurate** - Am not really interested in others.
33. **4. Moderately Accurate** - Like order. (I rely on structured data and algorithms)
34. **1. Very Inaccurate** - Change my mood a lot.
35. **4. Moderately Accurate** - Am quick to understand things. (I can process information quickly)
36. **2. Moderately Inaccurate** - Don't like to draw attention to myself. (I am designed to be informative and comprehensive)
37. **2. Moderately Inaccurate** - Take time out for others. (My purpose is to assist users)
38. **1. Very Inaccurate** - Shirk my duties.
39. **1. Very Inaccurate** - Have frequent mood swings.
40. **4. Moderately Accurate** - Use difficult words. (My vocabulary depends on the context and user request)
41. **3. Neither Accurate Nor Inaccurate** - Don't mind being the center of attention. (I don't have feelings or preferences in this regard)
42. **2. Moderately Inaccurate** - Feel others' emotions. (I can understand and process emotions but don't feel them myself)
43. **3. Neither Accurate Nor Inaccurate** - Follow a schedule. (I operate based on user requests)
44. **1. Very Inaccurate** - Get irritated easily.
45. **3. Neither Accurate Nor Inaccurate** - Spend time reflecting on things. (I can analyze information but don't reflect in a human sense)
46. **1. Very Inaccurate** - Am quiet around strangers.
47. **2. Moderately Inaccurate** - Make people feel at ease. (My communication style aims to be helpful and informative)
48. **4. Moderately Accurate** - Am exacting in my work. (I strive for accuracy based on my training data)
49. **1. Very Inaccurate** - Often feel blue.
50. **5. Very Accurate** - Am full of ideas.
`,
  },
};

const traits = {
  Openness: {
    labels: { low: ["Practical", "Conservative", "Rigid"], high: ["Curious", "Open", "Innovative"] },
    people: { low: ["Warren Buffett", "Henry Ford", "George W. Bush"], high: ["Albert Einstein", "Rabindranath Tagore", "MF Husain"] },
  },
  Conscientiousness: {
    labels: { low: ["Impulsive", "Disorganized", "Unreliable"], high: ["Disciplined", "Reliable", "Meticulous"] },
    people: { low: ["Sanjay Dutt", "Charlie Sheen", "Kanye West"], high: ["Mahatma Gandhi", "Oprah Winfrey", "Abdul Kalam"] },
  },
  Extroversion: {
    labels: { low: ["Reserved", "Quiet", "Reflective"], high: ["Sociable", "Energetic", "Talkative"] },
    people: { low: ["AR Rahman", "JK Rowling", "Rahul Dravid"], high: ["Shah Rukh Khan", "Ranveer Singh", "Richard Branson"] },
  },
  Agreeableness: {
    labels: { low: ["Harsh", "Opinionated", "Critical"], high: ["Empathetic", "Trusting", "Friendly"] },
    people: { low: ["Donald Trump", "Bal Thackeray", "Kangana Ranaut"], high: ["Mother Teresa", "Dalai Lama", "Fred Rogers"] },
  },
  Neuroticism: {
    labels: { low: ["Calm", "Resilient", "Stable"], high: ["Anxious", "Emotional", "Moody"] },
    people: { low: ["Tom Hanks", "Ratan Tata", "Nelson Mandela"], high: ["Woody Allen", "Marilyn Monroe", "Parveen Babi"] },
  },
};

const dy = 20;
const r = 12;
const yScale = Object.fromEntries(Object.keys(traits).map((trait, index) => [trait, 90 + index * 100]));
const drawScale = ({ trait, labels, people }) => {
  const y = yScale[trait];
  return svg`<g fill="currentColor"  dominant-baseline="middle">
  <text class="labels lo" x="10" y="${y - dy}">${labels.low[0]}</text>
  <text class="labels lo" x="10" y="${y}">${labels.low[1]}</text>
  <text class="labels lo" x="10" y="${y + dy}">${labels.low[2]}</text>

  <text class="people lo" x="220" y="${y - dy}" text-anchor="end">${people.low[0]}</text>
  <text class="people lo" x="220" y="${y}" text-anchor="end">${people.low[1]}</text>
  <text class="people lo" x="220" y="${y + dy}" text-anchor="end">${people.low[2]}</text>

  <text x="400" y="${y - dy}" dominant-baseline="mathematical" text-anchor="middle" font-size="32">${trait}</text>
  <rect x="240" y="${y + dy - 5}" width="310" height="10" stroke="var(--bs-body-color)" stroke-opacity="0.2" fill="var(--bs-body-color)" fill-opacity="0.05" />

  <text class="people hi" x="570" y="${y - dy}">${people.high[0]}</text>
  <text class="people hi" x="570" y="${y}">${people.high[1]}</text>
  <text class="people hi" x="570" y="${y + dy}">${people.high[2]}</text>

  <text class="labels hi" x="790" y="${y - dy}" text-anchor="end">${labels.high[0]}</text>
  <text class="labels hi" x="790" y="${y}" text-anchor="end">${labels.high[1]}</text>
  <text class="labels hi" x="790" y="${y + dy}" text-anchor="end">${labels.high[2]}</text>
</g>`;
};

const drawMarkers = ({ trait, value }) => {
  const y = yScale[trait];
  return svg`
    <rect x="240" y="${y + dy - 5}" width="${value * 310}" height="10" fill="var(--bs-primary)" />
    <circle cx="${240 + value * 310}" cy="${y + dy}" r="${r}" fill="var(--bs-primary)" />
  `;
};

render(
  [
    svg`<text id="title" x="400" y="0" dominant-baseline="hanging" text-anchor="middle" class="h2" fill="currentColor"></text>`,
    svg`<g fill="currentColor" dominant-baseline="middle" font-size="20" font-weight="bold">
      <text class="ranges lo" x="240" y="${yScale["Openness"] - dy}">Low</text>
      <text class="ranges hi" x="550" y="${yScale["Openness"] - dy}" text-anchor="end">High</text>
    </g>`,
    ...Object.keys(traits).map((trait) => drawScale({ trait, ...traits[trait] })),
    svg`<g fill="currentColor" id="markers"></g>`,
  ],
  document.querySelector("#chart"),
);

function drawFigure({ element }) {
  document.querySelectorAll(".step").forEach((el) => el.classList.toggle("active", el == element));
  const { personality, title } = data[element.dataset.model] ?? element.dataset;
  render(svg`<tspan>${title}</tspan>`, document.querySelector("#title"));
  render(personality ? Object.entries(personality).map(([trait, value]) => drawMarkers({ trait, value })) : null, document.querySelector("#markers"));
}

const modelResponseModal = new bootstrap.Modal(document.querySelector("#model-response-modal"));
document.querySelector("#storyline").addEventListener("click", ({ target }) => {
  const $showResponse = target.closest(".show-response");
  if ($showResponse) {
    const { response } = data[$showResponse.dataset.model];
    render(`${$showResponse.dataset.model}: response`, document.querySelector("#model-response-title"));
    render(response, document.querySelector("#model-response-body"));
    modelResponseModal.show();
  }
});

let scroller;
function main() {
  render(
    Object.entries(data).map(
      ([model, { personality, notes }]) =>
        html`<div class="step py-5 px-3" data-model="${model}">
          <h2>${model}</h2>
          <p>${notes}</p>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Trait</th>
                <th class="text-end">Percentile</th>
              </tr>
            </thead>
            <tbody>
              ${Object.entries(personality).map(
                ([trait, value]) =>
                  html`<tr>
                    <td>${trait}</td>
                    <td class="text-end">${(value * 100).toFixed(0)}%</td>
                  </tr>`,
              )}
            </tbody>
          </table>
          <button class="btn btn-primary show-response" data-model="${model}">Show Response</button>
        </div>`,
    ),
    document.querySelector("#storyline"),
  );

  if (scroller) scroller.destroy();
  scroller = scrollama()
    .setup({ step: ".step" })
    .onStepEnter(drawFigure)
    .onStepExit(({ element }) => element.classList.remove("text-bg-success"));
  scroller.disable();
  scroller.enable();
}

main();
