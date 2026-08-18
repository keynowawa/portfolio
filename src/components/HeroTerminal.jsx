import { useEffect, useRef, useState } from 'react';
import { profile } from '../content/portfolio';
import { findPersonalAnswer, heroComments } from '../content/askMe';
import Glyph from './Glyph';
import styles from './HeroTerminal.module.css';

export default function HeroTerminal() {
  const [commentIndex, setCommentIndex] = useState(0);
  const [commentText, setCommentText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [isAnswering, setIsAnswering] = useState(false);
  const [answerLeaving, setAnswerLeaving] = useState(false);
  const answerTimerRef = useRef(null);
  const dismissTimerRef = useRef(null);
  const clearTimerRef = useRef(null);
  const questionScrollRef = useRef({ left: 0, top: 0 });

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setCommentText(heroComments[0]);
      return undefined;
    }

    const message = heroComments[commentIndex];
    let delay = deleting ? 46 : 38;
    if (!deleting && commentText === message) delay = 2600;
    if (deleting && commentText === '') delay = 420;

    const timer = window.setTimeout(() => {
      if (!deleting && commentText === message) {
        setDeleting(true);
        return;
      }
      if (deleting && commentText === '') {
        setDeleting(false);
        setCommentIndex((current) => (current + 1) % heroComments.length);
        return;
      }
      setCommentText(message.slice(0, commentText.length + (deleting ? -1 : 1)));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [commentIndex, commentText, deleting]);

  useEffect(() => () => {
    window.clearTimeout(answerTimerRef.current);
    window.clearTimeout(dismissTimerRef.current);
    window.clearTimeout(clearTimerRef.current);
  }, []);

  const restoreQuestionScroll = () => {
    const position = questionScrollRef.current;
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        window.scrollTo({ left: position.left, top: position.top, behavior: 'auto' });
      });
    });
  };

  const handleQuestion = (event) => {
    event.preventDefault();
    const value = question.trim();
    if (!value || isAnswering) return;
    questionScrollRef.current = { left: window.scrollX, top: window.scrollY };
    window.clearTimeout(answerTimerRef.current);
    window.clearTimeout(dismissTimerRef.current);
    window.clearTimeout(clearTimerRef.current);
    setAnswer(null);
    setAnswerLeaving(false);
    setIsAnswering(true);
    restoreQuestionScroll();
    answerTimerRef.current = window.setTimeout(() => {
      setAnswer(findPersonalAnswer(value));
      setIsAnswering(false);
      restoreQuestionScroll();
      dismissTimerRef.current = window.setTimeout(() => setAnswerLeaving(true), 6500);
      clearTimerRef.current = window.setTimeout(() => {
        setAnswer(null);
        setAnswerLeaving(false);
        setQuestion((current) => current.trim() === value ? '' : current);
        restoreQuestionScroll();
      }, 7100);
    }, 520 + (value.length % 5) * 70);
  };

  const handleQuestionChange = (event) => {
    window.clearTimeout(dismissTimerRef.current);
    window.clearTimeout(clearTimerRef.current);
    if (answer) setAnswer(null);
    setAnswerLeaving(false);
    setQuestion(event.target.value);
  };

  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.terminal}>
        <nav className={styles.terminalNav} aria-label="Portfolio navigation">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#journey">Story</a>
          <a className={styles.secondaryNavItem} href="#toolkit">Stack</a>
          <a className={styles.secondaryNavItem} href="#credentials">Certs</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.terminalMain}>
          <h1 id="hero-title">Kyann Tagle</h1>
          <p className={styles.role}>Full-stack developer exploring data, privacy, and cryptography.</p>

          <div className={styles.commentTerminal} aria-hidden="true">
            <code>{commentText}</code>
            <i className={styles.commentCursor} aria-hidden="true" />
          </div>

          <div className={styles.askArea}>
            <form className={`${styles.askForm} ${isAnswering ? styles.answering : ''}`} onSubmit={handleQuestion} aria-busy={isAnswering}>
              <div className={styles.askLine}>
                <input
                  id="hero-question"
                  type="text"
                  aria-label="Ask me anything"
                  value={question}
                  onChange={handleQuestionChange}
                  placeholder="ask me anything"
                  autoComplete="off"
                  maxLength={160}
                />
                <button type="submit" disabled={!question.trim() || isAnswering} aria-label="Ask Kyann">
                  <Glyph name="searchPrompt" size={20} />
                </button>
              </div>
            </form>

            <div className={`${styles.askAnswer} ${answerLeaving ? styles.answerLeaving : ''}`} aria-live="polite" aria-busy={isAnswering}>
              {isAnswering && <div className={styles.answerLoader} aria-label="Thinking"><i /><i /><i /></div>}
              {answer && (
                <p>
                  {answer.text}
                  {answer.action === 'resume' && <span className={styles.answerActions}><a href={profile.resumeUrl} target="_blank" rel="noreferrer">View resume</a></span>}
                  {answer.action === 'contact' && <span className={styles.answerActions}><a href={`mailto:${profile.email}`}>Email</a><i aria-hidden="true">·</i><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></span>}
                  {answer.action === 'github' && <span className={styles.answerActions}><a href={profile.github} target="_blank" rel="noreferrer">Open GitHub</a></span>}
                  {answer.action === 'linkedin' && <span className={styles.answerActions}><a href={profile.linkedin} target="_blank" rel="noreferrer">Open LinkedIn</a></span>}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
